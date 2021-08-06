<template>
  <div>
    <p v-if="!notification.id" class="notes-unsupported">Not supported</p>
    <template v-else>
      <template v-if="mode === 'view'">
        <template v-if="notes">
          <p class="notes-content" v-html="getNotes()"></p>
          <p class="notes-toolbar"><button class="btn btn-sm btn-default" @click="edit()">Edit notes</button></p>
        </template>
        <template v-else>
          <p class="notes-toolbar"><button class="btn btn-sm btn-default" @click="edit()">Add notes</button></p>
        </template>
      </template>
      <template v-if="mode === 'edit'">
        <p><textarea class="form-control" rows="4" v-model="notes" placeholder="(Optional) Add some notes to this notification. Your users will not see this."></textarea></p>
        <p>
          <button class="btn btn-sm btn-primary" @click="update()">Save</button>
          <button class="btn btn-sm btn-default" @click="cancel()">Cancel</button>
        </p>
      </template>
    </template>
  </div>
</template>

<script>
import { nl2br } from '../libs/string';
import bus from '../libs/bus';

export default {
  data() {
    return {
      instance: null,
      mode: 'view',
      notes: _.get(this.notification, 'data._metadata.notes'),
      cachedNotes: ''
    };
  },
  mounted() {
    this.instance = Fliplet.Notifications.init();
  },
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  watch: {
    mode() {
      bus.$emit('autosize');
    }
  },
  methods: {
    getNotes() {
      return nl2br(this.notes);
    },
    edit() {
      this.cachedNotes = this.notes;
      this.mode = 'edit';
    },
    cancel() {
      this.notes = this.cachedNotes;
      this.mode = 'view';
    },
    update() {
      _.set(this.notification, 'data._metadata.notes', this.notes);

      return this.instance.update(this.notification.id, _.pick(this.notification, 'data')).then(() => {
        this.cachedNotes = '';
        this.mode = 'view';
        this.$emit('update:notification', this.notification);
      }).catch((error) => {
        _.set(this.notification, 'data._metadata.notes', this.cachedNotes);
        Fliplet.Modal.alert({
          title: 'Error updating notes',
          message: Fliplet.parseError(error)
        });
      });
    }
  }
};
</script>
