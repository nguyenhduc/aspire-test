<template>
  <div class="card text-white text-weight-medium">
    <div class="row">{{ cardBank }}</div>
    <div class="row card-name">{{ cardName }}</div>
    <div class="row items-center card-info">
      <card-number-display
        :content="cardNumber"
        :isShow="isShowingCardNumber"
      />
    </div>
    <div class="row card-info">
      <div class="col-6">Thru: {{ cardThru }}</div>
      <div class="col">CVV: ***</div>
    </div>
    <div class="row">
      {{ cardIssuing }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardNumberDisplay from './CardNumberDisplay.vue';

export default defineComponent({
  name: 'Card',
  components: { CardNumberDisplay },
  props: {
    cardName: {
      type: String,
      required: true,
    },

    cardNumber: {
      type: String,
      default: '',
    },

    cardThru: {
      type: String,
      default: '#',
    },

    cardBank: {
      type: String,
      required: true,
    },

    cardIssuing: {
      type: String,
    },

    isShowingCardNumber: {
      type: Boolean,
    },
  },
});
</script>

<style scoped lang="scss">
.card {
  width: 414px;
  height: 248.85px;
  padding: 27pt;

  background-color: #01d167;
  border-radius: 16pt;

  @media screen and (max-width: 1023px) {
    width: 358px;
    height: 220px;
  }
}

.card-name {
  font-size: 24pt;
}

.card-info {
  font-size: 14pt;
}
</style>
