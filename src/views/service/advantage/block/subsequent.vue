<script setup>
import { useI18nLang } from '@hooks'

const { t } = useI18nLang()
</script>

<template>
  <div class="subsequent-container">
    <div class="content-wrap flex flex-horizontal-between flex-vertical-center" >
      <img src="@/assets/img/service/advantage/subsequent/icon.png" alt="" class="left-icon-img" />
      <div class="desc">
        {{ t('t1') }}
      </div>
      <img src="@/assets/img/service/advantage/subsequent/img.png" alt="" class="right-icon-img" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.subsequent-container {
  padding: 60px 0;

  .content-wrap {
    gap: 30px;

    .left-icon-img {
      width: 98px;
    }

    .desc {
      font-size: var(--desc-fz--default);
      line-height: 34px;
    }

    .right-icon-img {
      width: 200px;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "t1": "Subsequent order processing and product procurement and shipping are handled by us. The platform is highly automated, allowing customers to search for relevant orders, batch process orders, batch import orders, etc., according to their own ideas."
  },
  "vn": {
    "t1": "Xử lý đơn đặt hàng tiếp theo và mua sản phẩm và vận chuyển được xử lý bởi chúng tôi. Nền tảng này có tính tự động cao và cho phép khách hàng tìm kiếm các đơn đặt hàng liên quan, đơn đặt hàng xử lý hàng loạt, đơn đặt hàng nhập khẩu số lượng lớn, v.v. theo ý tưởng của họ."
  }
}
</i18n>
