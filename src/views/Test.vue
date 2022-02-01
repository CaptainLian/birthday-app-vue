<script lang="ts">
import { defineComponent } from 'vue';
import Music from '../components/Music.vue';

export default defineComponent({
  name: 'TestView',
  components: {
    Music,
  },
  data: () => ({
    name: '',
  }),
  methods: {
    onClickSubmit() {
      this.$router.push({
        path: '/birthday',
        query: {
          name: this.name,
        },
      });
    },
  },
});
</script>

<template>
  <Music />
</template>
