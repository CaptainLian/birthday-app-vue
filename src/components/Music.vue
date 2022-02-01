<template>
  <label>
    <button class="btn btn-primary btn-sm" @click.prevent="playSound('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')">CLICK</button>
    Play Air Plane Ding
  </label>
  <br />
  <label>
    <button class="btn btn-primary btn-sm" @click.prevent="playSound('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')">CLICK</button>
    Play Elevator Ding
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HappyBirthday',
  data: () => ({
    text: '',
  }),
  methods: {
    playSound(sound: string) {
      if (sound) {
        const audio = new Audio(sound);
        audio.play();
      }
    },
  },
});
</script>
