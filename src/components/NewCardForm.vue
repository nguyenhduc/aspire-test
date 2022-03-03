<template>
  <q-card class="full-width" style="height: 200px">
    <q-card-section>
      <div class="text-h5">Adding card...</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-form @submit="onSaveCard">
        <q-input
          dense
          filled
          bg-color="grey-3"
          label="Name card"
          v-model="cardName"
          type="text"
          :rules="nameRules"
        >
        </q-input>
        <q-btn
          :loading="isSubmitting"
          class="float-right"
          label="Submit"
          type="submit"
          color="primary"
        />
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

const nameRules = [
  (val: string | null) =>
    (val !== null && val !== '') || "Please provide card's name",
  (val: string) =>
    val.length > 3 || "Card's name must be longer than 3 characters",
];
export default defineComponent({
  name: 'NewCardForm',

  setup() {
    const cardName = ref('');

    return {
      nameRules,
      cardName,
    };
  },
});
</script>

<style></style>
