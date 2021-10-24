<template>
  <div>
    <color-button @click="openModal">코치 모달 열기</color-button>
  </div>
</template>

<script>
import ModalTutor from "@/views/components/coaching/modal-tutor/ModalTutor.vue"
import ColorButton from '@/views/components/common/ColorButton.vue';
import coaches from '@mocks/coaches'

export default {
  components: { ModalTutor, ColorButton },
  data: () => ({ question: null }),
  methods: {
    async openModal() {
      try {
        this.question = await this.$modal(ModalTutor, { coachInfo: coaches[0] });
      } catch (err) {
        console.error(err)
      }
    },
  },
};
</script>
