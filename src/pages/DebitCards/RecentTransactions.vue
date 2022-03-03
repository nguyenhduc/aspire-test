<template>
  <q-expansion-item class="expansion-header text-dark" default-opened>
    <template v-slot:header>
      <q-item-section avatar>
        <q-avatar>
          <img
            style="width: 24px"
            :src="recent_transactions_svg"
            alt="card details"
          />
        </q-avatar>
      </q-item-section>
      <q-item-section>Recent transactions</q-item-section>
    </template>
    <q-list class="transaction-list">
      <q-card
        :flat="true"
        v-for="transaction in recentTransactions"
        :key="transaction.id"
        class="q-pa-md"
      >
        <div class="row q-gutter-md items-start">
          <div class="col-2">
            <div class="transaction-list__icon blue">
              <q-img :src="transaction.avatar" />
            </div>
          </div>
          <div class="col">
            <div class="row justify-between">
              <div>
                <div class="text-weight-medium">{{ transaction.name }}</div>
                <div class="transaction-date">{{ transaction.date_time }}</div>
              </div>
              <div>
                <div
                  :class="`text-weight-medium transaction-value ${
                    transaction.positive ? 'positive' : ''
                  }`"
                >
                  {{ transaction.amount }}
                </div>
              </div>
            </div>
            <div class="row text-blue items-center">
              <q-btn
                class="q-my-md q-mr-sm"
                size="10px"
                round
                dense
                color="blue"
                icon="payment"
              />
              {{ transaction.action === 'charge' ? 'Charge to' : 'Refund on' }}
              debit card
            </div>
          </div>
        </div>
        <q-separator />
      </q-card>
    </q-list>
    <div class="btn-view-all-transactions flex justify-center">
      <q-btn flat no-caps color="positive" label="View all card transactions" />
    </div>
  </q-expansion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import recent_transactions_svg from 'src/assets/icons/recent-transactions.svg';
import flight_svg from 'src/assets/icons/flights.svg';
import megaphone_svg from 'src/assets/icons/megaphone.svg';
import file_torage_svg from 'src/assets/icons/file-storage.svg';

const recentTransactions = [
  {
    id: 0,
    name: 'Hamleys',
    amount: 'S$ 150',
    date_time: '20 May 2020',
    positive: true,
    action: 'refund',
    avatar: flight_svg,
  },
  {
    id: 1,
    name: 'Hamleys',
    amount: 'S$ 150',
    date_time: '20 May 2020',
    positive: false,
    action: 'charge',
    avatar: megaphone_svg,
  },
  {
    id: 2,
    name: 'Hamleys',
    amount: 'S$ 150',
    date_time: '20 May 2020',
    positive: false,
    action: 'charge',
    avatar: file_torage_svg,
  },
  {
    id: 3,
    name: 'Hamleys',
    amount: 'S$ 150',
    date_time: '20 May 2020',
    positive: false,
    action: 'charge',
    avatar: flight_svg,
  },
];

export default defineComponent({
  name: 'RecentTransactions',

  setup() {
    return {
      recent_transactions_svg,
      recentTransactions,
    };
  },
});
</script>

<style lang="scss" scoped>
.expansion-header {
  background-color: #edf3ff;
  border-radius: 8pt;
  @media screen and (min-width: 1023px) {
    min-width: 366px;
  }
}
.transaction-list {
  border-right: 1px solid #f0f0f0;
  border-left: 1px solid #f0f0f0;

  &__icon {
    width: 48pt;
    height: 48pt;
    padding: 16pt;
    border-radius: 50%;

    &.blue {
      background-color: #009dff1a;
    }
    &.green {
      background-color: #00d6b51a;
    }
    &.red {
      background-color: #f251951a;
    }
  }
}
.btn-view-all-transactions {
  height: 40pt;
  border-radius: 0 0 8pt 8pt;
  background-color: #edfff5;
}
.transaction-value {
  &.positive {
    color: #01d167;
  }
}
</style>
