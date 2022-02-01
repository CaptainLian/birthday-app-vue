<template>
   <audio autoplay controls loop volume="0.5">
    <source src="../assets/audios/donnalyn-hbd.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BirthdayMusicPlayer',
});
</script>
