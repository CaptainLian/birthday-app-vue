<template>
  <div class="IsBirthdayToday-Content">
    <img
      class="IsBirthdayToday-Thinking"
      width="220"
      height="220"
      src="https://c.tenor.com/OBc0ZE8Wf8UAAAAM/hmm-thinking.gif"
      title="Thinking of you eyyy LMAO"
      alt="Thinking of you eyyy LMAO"
    />

    <div class="IsBirthdayToday-Question">
      Is it your birthday today?
    </div>

    <div class="IsBirthdayToday-Answer">
        <button @click="onClickYes">Yes</button>
        <button @click="onClickNo">No</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';

export default defineComponent({
  name: 'IsBirthday',
  props: {
    celebrant: String,
  },

  methods: {
    onClickYes() {
      const nameUri = atob(this.celebrant ?? '');

      this.$router.push({
        path: '/birthday',
        query: { name: nameUri },
      });
    },

    onClickNo() {
      // eslint-disable-next-line no-alert
      alert('🛑 You\'re not supposed to be here. Please contact your system administrator 🛑');
    },
  },

  setup() {
    useHead({
      title: 'Very Important Survey',
      meta: [
        {
          name: 'description',
          content: 'Survey regarding important stuffs',
        },
      ],
    });
  },
});
</script>

<style scoped lang="scss">
  .IsBirthdayToday {
    &-Content {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      align-items: center;
    }

    &-Thinking {
      margin-bottom: 24px;
      object-fit: contain;
    }

    &-Question {
      margin-bottom: 12px;
    }

    &-Answer {
      display: flex;
      button {
        margin-right: 6px;
      }
    }
  }
</style>
