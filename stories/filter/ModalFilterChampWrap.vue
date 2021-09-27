<template>
  <div>
    <p>선택된 champId:{{ champId }}</p>
    <color-button @click="openModal">챔프 필터링 모달 열기</color-button>
  </div>
</template>

<script>
import ModalFilterChamp from "@/views/components/coaching/filter/ModalFilterChamp.vue";
import ColorButton from '@/views/components/common/ColorButton.vue';

export default {
  components: { ModalFilterChamp, ColorButton },
  data: () => ({ champId: "Garen" }),
  methods: {
    async openModal() {
      try {
        this.champId = await this.$modal(ModalFilterChamp, {
          defaultChampId: this.champId,
        });
      } catch (err) {
        console.error(err)
      }
    },
  },
};
</script>
