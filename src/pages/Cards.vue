<template>
  <q-page class="wrapper q-pa-xl">
    <div class="upper-section">
      {{ Screen.lt.md ? 'Account' : 'Available' }} balance
      <img class="mobile-icon" :src="aspire_logo" />
      <div class="row items-center justify-between">
        <div class="available-balance row items-center text-weight-regular">
          <div class="currency text-white">S$</div>
          3,000
        </div>
        <q-btn
          class="gt-sm"
          label="New card"
          no-caps
          icon="add_circle"
          color="accent"
          @click="newCardDialogOpened = true"
        />
        <q-btn
          class="lt-md"
          label="New card"
          flat
          no-caps
          icon="add_circle"
          color="info"
          @click="newCardDialogOpened = true"
        />
      </div>
    </div>
    <q-tabs
      class="text-grey"
      v-model="tab"
      align="left"
      :no-caps="true"
      dense
      :active-color="Screen.lt.md ? 'white' : 'black'"
      indicator-color="info"
      narrow-indicator
    >
      <q-tab name="debit" label="My debit cards" />
      <q-tab name="all" label="All company cards" />
    </q-tabs>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel class="debit-card-panel" name="debit">
        <debit-cards />
      </q-tab-panel>
      <q-tab-panel class="debit-card-panel" name="all"> </q-tab-panel>
    </q-tab-panels>
  </q-page>
  <q-dialog v-model="newCardDialogOpened">
    <new-card-form />
  </q-dialog>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import { Screen } from 'quasar';
import aspire_logo from 'src/assets/aspire_logo.svg';
import DebitCards from './DebitCards/DebitCards.vue';
import NewCardForm from 'components/NewCardForm.vue';

export default defineComponent({
  name: 'PageCards',
  components: {
    DebitCards,
    NewCardForm,
  },
  setup() {
    const newCardDialogOpened = ref(false);
    const toggleNewCardDialog = () => (newCardDialogOpened.value = true);

    return {
      Screen: computed(() => Screen),
      aspire_logo,
      tab: ref('debit'),
      toggleNewCardDialog,
      newCardDialogOpened,
    };
  },
});
</script>

<style scoped lang="scss">
.available-balance {
  font-size: 26pt;
  @media screen and (max-width: 1023px) {
    font-size: 24pt;
  }

  .currency {
    width: 40px;
    margin-right: 12px;
    background-color: #01d167;
    text-align: center;
    border-radius: 4pt;
    font-size: 13pt;
  }
}
.wrapper {
  @media screen and (max-width: 1023px) {
    padding: 0;
    background-color: #0c365a;
    color: #fff;

    .upper-section {
      padding: 24pt;
    }

    .tab-content {
      padding: 0 24pt;
    }
  }
}
.q-tab-panels {
  @media screen and (max-width: 1023px) {
    background-color: inherit;
  }
}

.mobile-icon {
  @media screen and (min-width: 1023px) {
    display: none;
  }
  width: 25pt;
  position: absolute;
  right: 25pt;
  top: 10pt;
}

.debit-card-panel {
  @media screen and (max-width: 1023px) {
    padding: 0;
  }
}
</style>
