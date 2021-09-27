<template>
  <div>
    <p>선택된 champId:{{ champId }}</p>
    <button @click="openModal">챔프 필터링 모달 열기</button>
  </div>
</template>

<script>
import ModalFilterChamp from "@/views/components/coaching/filter/ModalFilterChamp.vue";
export default {
  components: { ModalFilterChamp },
  data: () => ({ champId: "Garen" }),
  methods: {
    async openModal() {
      try {
        this.champId = await this.$modal(ModalFilterChamp, {
          defaultChampId: this.champId,
        });
      } catch (err) {
        console.error('no-champ')
      }
    },
  },
};
</script>
