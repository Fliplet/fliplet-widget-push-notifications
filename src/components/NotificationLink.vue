<template>
  <p v-if="link.action">
    <template v-if="link.action === 'screen'">
      Screen link: <a href="#" @click.prevent="previewPage">{{ pageName }}</a>
    </template>
    <template v-if="link.action === 'url'">
      URL link: <a :href="link.url" target="_blank" :title="link.url">{{ linkHost }}</a>
    </template>
  </p>
</template>

<script>
import { getAppPages } from '../store';

export default {
  data() {
    return {
      type: '',
      pageName: '',
      linkHost: '',
      openPage: false
    };
  },
  computed: {
    link() {
      const link = _.get(this.notification, 'data.navigate', {});

      if (_.isNull(link)) {
        return {};
      }

      return link;
    }
  },
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.pageName = this.getPageName();
      this.linkHost = this.getLinkHost();
    },
    getPageName() {
      if (this.link.action !== 'screen' || !this.link.page) {
        return '';
      }

      const appPages = getAppPages();
      const page = _.find(appPages, { id: parseInt(this.link.page, 10) });

      if (!page) {
        return '(Page not found)';
      }

      this.openPage = true;

      return page.title;
    },
    previewPage() {
      if (!this.openPage) {
        return;
      }

      Fliplet.Studio.emit('overlay', {
        name: 'page-preview',
        options: {
          size: 'medium',
          title: this.getPageName(),
          classes: 'preview-notification',
          data: {
            appId: Fliplet.Env.get('appId'),
            pageId: this.link.page,
            query: this.link.query
          }
        }
      });
    },
    getLinkHost() {
      if (!this.link.url) {
        return '';
      }

      const link = document.createElement('a');

      link.href = this.link.url;

      return link.host;
    }
  }
};
</script>
