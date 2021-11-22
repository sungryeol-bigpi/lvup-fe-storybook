<template>
  <div>
    <p>{{JSON.stringify(coupon)}}</p>
    <color-button @click="openModal">쿠폰 모달 열기</color-button>
  </div>
</template>

<script>
import ModalCoupon from "@/views/components/coaching/modal-coupon/ModalCoupon.vue"
import ColorButton from '@/views/components/common/ColorButton.vue';

export default {
  name: 'ModalCouponWrap',
  components: { ModalCoupon, ColorButton },
  data: () => ({ coupon: null }),
  props: ['lessonProductId', 'bundleSize', 'originalPrice'],
  methods: {
    async openModal() {
      try {
        this.coupon = await this.$modal(ModalCoupon, { lessonProductId: this.lessonProductId,  bundleSize: this.bundleSize, originalPrice: this.originalPrice });
      } catch (err) {
        console.error(err)
      }
    },
  },
};
</script>
