<template>
  <span>
    <input type="text" class="form-control" :placeholder="placeholder" ref="input" v-model="value" />
  </span>
</template>

<script>
export default {
  data() {
    return {
      collection: []
    };
  },
  props: {
    value: {
      type: Array
    },
    placeholder: {
      type: String
    }
  },
  mounted() {
    this.collection = Fliplet.Utils.concat(this.collection, Fliplet.Utils.map(this.value, (obj) => {
      if (Fliplet.Utils.hasIn(obj, 'value')) {
        return obj;
      }

      return {
        value: obj
      };
    }));
    $(this.$refs.input)
      .tokenfield({
        tokens: this.collection,
        createTokensOnBlur: true
      })
      .on('tokenfield:createdtoken', () => {
        this.getTokens();
      })
      .on('tokenfield:removedtoken', () => {
        this.getTokens();
      });
  },
  unmounted() {
    $(this.$refs.input).tokenfield('destroy');
  },
  watch: {
    collection(collection) {
      this.$emit('update:value', Fliplet.Utils.map(collection, 'value'));
    }
  },
  methods: {
    getTokens() {
      this.collection.splice(0, this.collection.length);
      Fliplet.Utils.forEach($(this.$refs.input).tokenfield('getTokens'), (token) => {
        this.collection.push(token);
      });
    }
  }
};
</script>
