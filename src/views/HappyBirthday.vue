<template>
  <div class="HappyBirthday-Fireworks">
    <FireworksBackground />
  </div>

  <div class="HappyBirthday-Background"></div>

  <div class="HappyBirthday-Container">
    <div class="HappyBirthday-Content">
      <img
        class="HappyBirthday-Hamster"
        height="270"
        alt="Birthday Hamster"
        src="https://c.tenor.com/F87MBRLDSiAAAAAC/birthday-cake-hamster.gif"
        width="480"
      />

      <div class="HappyBirthday-Greetings">
        <h1 class="HappyBirthday-Title">Happy Birthday To You!</h1>
        <h1 class="HappyBirthday-Name">{{ celebrantDisplayName }}</h1>
      </div>

      <div class="HappyBirthday-Music">
        <BirthdayMusicPlayer />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useHead } from '@vueuse/head';
import BirthdayMusicPlayer from '../components/BirthdayMusicPlayer.vue';
import FireworksBackground from '../components/FireworksBackground.vue';

export default defineComponent({
  name: 'HappyBirthday',
  props: {
    celebrant: String,
  },
  components: {
    BirthdayMusicPlayer,
    FireworksBackground,
  },
  computed: {
    celebrantDisplayName() {
      return decodeURIComponent(this.celebrant || '');
    },
  },
  setup(props) {
    useHead({
      title: computed(() => `Happy Birthday ${decodeURIComponent(props.celebrant || '')}!`),
      meta: [
        {
          name: 'description',
          content: 'Happy Happy Birthday',
        },
      ],
    });
  },
});
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
  // @import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');

  .HappyBirthday {
    &-Fireworks {
      left: 0;
      top: 0;
      width: 100%;
      height: 40%;
      position: absolute;
    }
    &-Background {
      background-color: lightblue;
      background-image: url('../assets/images/birthday-balloons-cake.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      height: 100vh;
      left: 0;
      position: absolute;
      top: 0;
      width: 100vw;
      z-index: -100;
    }

    &-Container {
      display: flex;
      flex-direction: column;
    }

    &-Content {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    &-Music {
      position: absolute;
      bottom: 0;
      left: 0;
      margin: 12px;
    }

    &-Hamster {
      object-fit: scale-down;
      margin-bottom: 24px;
    }

    &-Title, &-Name {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      color: #2c3e50;
      // font-family: 'Cookie', cursive;
      font-family: 'Dancing Script', cursive;
      font-size: 5em;
      text-align: center;
    }
  };
</style>
