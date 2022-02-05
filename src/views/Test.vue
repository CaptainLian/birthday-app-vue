<script lang="ts">
import { defineComponent } from 'vue';
import Music from '../components/Music.vue';
import FireworksBackground from '../components/FireworksBackground.vue';

export default defineComponent({
  name: 'TestView',
  components: {
    FireworksBackground,
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
  <FireworksBackground />
</template>
