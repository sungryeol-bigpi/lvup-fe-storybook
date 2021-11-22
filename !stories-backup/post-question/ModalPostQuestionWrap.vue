<template>
  <div>
    <color-button @click="openModal">질문 모달 열기</color-button>
  </div>
</template>

<script>
import ModalPostQuestion from "@/views/components/coaching/post-question/ModalPostQuestion.vue";
import ColorButton from '@/views/components/common/ColorButton.vue';

export default {
  components: { ModalPostQuestion, ColorButton },
  data: () => ({ question: null }),
  methods: {
    async openModal() {
      try {
        this.question = await this.$modal(ModalPostQuestion, { coachId: 'aaa', userId: 'bbb'});
      } catch (err) {
        console.error(err)
      }
    },
  },
};
</script>
