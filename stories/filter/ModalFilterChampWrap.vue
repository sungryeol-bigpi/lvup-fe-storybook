<template>
  <div>
    <button @click="openModal">챔프 필터링 모달 열기</button>
  </div>
</template>

<script>
import ModalFilterChamp from "@/views/components/coaching/filter/ModalFilterChamp.vue";
export default {
  components: { ModalFilterChamp },
  methods: {
    openModal() {
      this.$modal(ModalFilterChamp, {defaultChampId: 'Garen'});
    },
  },
};
</script>
