<template>
  <div class="card-actions text-blue">
    <div class="row card-actions__bar">
      <div
        class="col flex column items-center text-center"
        v-for="action in actionList"
        :key="action.title"
        @click="action.go"
      >
        <div class="btn-action q-mb-sm">
          <q-img :src="action.icon" />
        </div>
        {{ action.title }}
      </div>
    </div>
    <div v-if="Screen.lt.md">
      <div class="card-actions__mobile-content q-pa-md">
        <card-details class="q-mb-md" />
        <recent-transactions />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'src/store';
import { Screen } from 'quasar';
import CardDetails from './CardDetails.vue';
import RecentTransactions from './RecentTransactions.vue';
import freeze_card_svg from 'src/assets/icons/freeze-card.svg';
import limit_svg from 'src/assets/icons/limit.svg';
import gpay_svg from 'src/assets/icons/gpay.svg';
import replace_card_svg from 'src/assets/icons/replace-card.svg';
import cancel_card_svg from 'src/assets/icons/cancel-card.svg';

export default defineComponent({
  name: 'CardActionsBar',
  components: {
    CardDetails,
    RecentTransactions,
  },
  setup() {
    const $store = useStore();

    const actionList = ref([
      {
        title: computed(() =>
          $store.state.cardModule.selectedCard.isFreezed
            ? 'Unfreeze Card'
            : 'Freeze Card'
        ),
        icon: freeze_card_svg,
        go: () => void $store.dispatch('cardModule/toggleCardStatus'),
      },
      {
        title: 'Set spend limit',
        icon: limit_svg,
      },
      {
        title: 'Add to GPay',
        icon: gpay_svg,
      },
      {
        title: 'Replace card',
        icon: replace_card_svg,
      },
      {
        title: 'Cancel card',
        icon: cancel_card_svg,
      },
    ]);
    return {
      actionList,
      Screen: computed(() => Screen),
    };
  },
});
</script>

<style scoped lang="scss">
.card-actions {
  &__bar {
    padding: 20px;
    border-radius: 16pt 16pt 0 0;
    background-color: #edf3ff;

    @media screen and (min-width: 1023px) {
      border-radius: 16pt;
    }
  }
  &__mobile-content {
    background-color: #fff;
  }
}

.btn-action {
  width: 24pt;
  height: 24pt;
}
</style>
