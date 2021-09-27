<template>
  <div>
    <p>선택된 포지션:{{ position }}</p>
    <color-button @click="openModal">포지션(라인) 필터링 모달 열기</color-button>
  </div>
</template>

<script>
import ModalFilterLane from "@/views/components/coaching/filter/ModalFilterLane.vue";
import ColorButton from '@/views/components/common/ColorButton.vue';

export default {
  components: { ModalFilterLane, ColorButton },
  data: () => ({ position: "ALL" }),
  methods: {
    async openModal() {
      try {
        this.position = await this.$modal(ModalFilterLane, { defaultLane: this.position });
      } catch (err) {
        console.error(err)
      }
    },
  },
};
</script>
