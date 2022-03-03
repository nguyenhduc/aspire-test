<template>
  <div class="debit-cards-wrapper">
    <div class="row">
      <div class="col">
        <div class="flex justify-end">
          <q-btn
            flat
            no-caps
            icon="visibility"
            color="positive"
            label="Show card number"
            @click="toggleShowCardNumber"
          />
        </div>
      </div>
    </div>
    <div class="row q-gutter-xl">
      <div class="col">
        <div
          class="full-width column wrap justify-center items-center content-center"
        >
          <carousel class="carousel">
            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <card
                cardName="Mark Henry"
                cardNumber="3457089352730961"
                cardThru="12/20"
                cardBank="aspire"
                cardIssuing="Visa"
                :isShowingCardNumber="isShowingCardNumber"
              />
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
            </q-carousel-slide>
          </carousel>
          <card-actions-bar />
        </div>
      </div>
      <div class="gt-md">
        <card-details class="q-mb-md" />
        <recent-transactions />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import { Screen } from 'quasar';
import Card from 'components/Card/Card.vue';
import Carousel from 'components/Carousel.vue';
import CardDetails from './CardDetails.vue';
import RecentTransactions from './RecentTransactions.vue';
import CardActionsBar from './CardActionsBar.vue';

export default defineComponent({
  name: 'DebitCards',
  components: {
    Card,
    Carousel,
    CardDetails,
    CardActionsBar,
    RecentTransactions,
  },
  setup() {
    const isShowingCardNumber = ref(false);

    return {
      Screen: computed(() => Screen),
      toggleShowCardNumber: () =>
        (isShowingCardNumber.value = !isShowingCardNumber.value),
    };
  },
});
</script>

<style scoped lang="scss">
.debit-cards-wrapper {
  padding: 24pt;
  height: 80vh;
  @media screen and (min-width: 1023px) {
    border-radius: 8pt;
    -webkit-box-shadow: 0px 0px 12px 0px #00000014;
    -moz-box-shadow: 0px 0px 12px 0px #00000014;
    box-shadow: 0px 0px 12px 0px #00000014;
  }

  @media screen and (max-width: 1023px) {
    padding: 0;
  }
}
.carousel {
  @media screen and (max-width: 1023px) {
    background: inherit;
  }
}
.transaction-date {
  color: #aaaaaa;
}
.q-tab-panel {
  padding: 0;
}
</style>
