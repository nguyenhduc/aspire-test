<template>
  <div class="mobile-nav-wrapper">
    <div class="mobile-nav text-grey q-pa-md">
      <div class="row q-mb-md">
        <div
          class="col flex column items-center"
          v-for="link in links"
          :key="link.title"
        >
          <div class="btn-action">
            <q-img :src="link.icon" />
          </div>
          {{ link.title }}
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script type="ts">
import { defineComponent } from 'vue';
import home_mobile_svg from 'assets/icons/home-mobile.svg';
import card_mobile_svg from 'assets/icons/card-mobile.svg';
import payment_mobile_svg from 'assets/icons/payment-mobile.svg';
import credit_mobile_svg from 'assets/icons/credit-mobile.svg';
import profile_mobile_svg from 'assets/icons/profile-mobile.svg';

const linksList = [
  {
    title: 'Home',
    icon: home_mobile_svg,
  },
  {
    title: 'Cards',
    icon: card_mobile_svg,
  },
  {
    title: 'Payments',
    icon: payment_mobile_svg,
  },
  {
    title: 'Credit',
    icon: credit_mobile_svg,
  },
  {
    title: 'Profile',
    icon: profile_mobile_svg,
  }
];

export default defineComponent({
  name: 'MobileNav',
  setup () {
    return {
      links: linksList,
    }
  }
})
</script>

<style lang="scss" scoped>
.mobile-nav-wrapper {
  position: relative;
  height: 100vh;
  background: #fff;
}
.mobile-nav {
  top: -25px;
  width: 100%;
  height: 100%;
  background: #fff;
  font-size: 9pt;
  -webkit-box-shadow: 0px -3px 6px 0px #00000014;
  box-shadow: 0px -3px 6px 0px #00000014;
}
.btn-action {
  width: 24pt;
  height: 24pt;
}
</style>
