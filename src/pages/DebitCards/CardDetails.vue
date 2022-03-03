<template>
  <q-expansion-item class="expansion-header text-dark">
    <template v-slot:header>
      <q-item-section avatar>
        <q-avatar>
          <img style="width: 24px" :src="card_details_svg" alt="card details" />
        </q-avatar>
      </q-item-section>

      <q-item-section>Card Details</q-item-section>
    </template>
  </q-expansion-item>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import card_details_svg from 'src/assets/icons/card-details.svg';

export default defineComponent({
  name: 'CardDetails',

  setup() {
    return {
      card_details_svg,
    };
  },
});
</script>

<style lang="scss" scoped>
.expansion-header {
  width: 366px;
  height: 72px;
  background-color: #edf3ff;
  border-radius: 8pt;
}
</style>
