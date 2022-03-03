<template>
  <q-layout view="hHh lpr fff" v-if="Screen.lt.md">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <mobile-nav />
    </q-footer>
  </q-layout>
  <q-layout view="lHh Lpr lFf" v-else>
    <q-drawer class="q-pa-xl" show-if-above bordered :width="340" :dark="true">
      <q-list>
        <img
          class="cursor-pointer q-mb-md"
          alt="Aspire logo"
          :src="aspire_logo"
        />
        <q-item-label class="description q-mb-xl"
          >Trusted way of banking for 3,000+ SMEs and startups in
          Singapore</q-item-label
        >
        <q-item
          class="list-item"
          clickable
          :to="item.link"
          active-class="list-item--active"
          v-for="item in linksList"
          :key="item.title"
        >
          <q-item-section thumbnail>
            <img :alt="item.title" :src="item.icon" style="width: 24px" />
          </q-item-section>
          <q-item-section>{{ item.title }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Screen } from 'quasar';
import MobileNav from 'components/MobileNav.vue';
import aspire_logo from 'src/assets/aspire-logo.svg';
import card_svg from 'src/assets/icons/card.svg';
import home_svg from 'src/assets/icons/home.svg';
import payment_svg from 'src/assets/icons/payment.svg';
import credit_svg from 'src/assets/icons/credit.svg';
import setting_svg from 'src/assets/icons/setting.svg';

const linksList = [
  {
    title: 'Home',
    icon: home_svg,
  },
  {
    title: 'Cards',
    icon: card_svg,
    link: '/cards',
  },
  {
    title: 'Payments',
    icon: payment_svg,
  },
  {
    title: 'Credit',
    icon: credit_svg,
  },
  {
    title: 'Setting',
    icon: setting_svg,
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: { MobileNav },

  setup() {
    return {
      aspire_logo,
      linksList,
      Screen,
    };
  },
});
</script>

<style lang="scss" scoped>
.description {
  opacity: 30%;
  font-size: 15px;
}
.list-item {
  font-size: 1rem;

  &--active {
    font-weight: bold;
  }
}
</style>
