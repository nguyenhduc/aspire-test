<template>
  <q-carousel v-model="slide" swipeable animated navigation>
    <template v-slot:navigation-icon="{ active, onClick }">
      <q-btn v-if="active" flat @click="onClick">
        <span class="active" />
      </q-btn>
      <q-btn v-else color="26A69A" flat @click="onClick">
        <span class="inactive" />
      </q-btn>
    </template>
    <slot></slot>
  </q-carousel>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Carousel',
  setup() {
    return {
      slide: ref('style'),
    };
  },
});
</script>

<style lang="scss" scoped>
.active {
  width: 16pt;
  height: 8pt;
  border-radius: 8pt;
  background: #01d167;
}
.inactive {
  width: 8pt;
  height: 8pt;
  border-radius: 8pt;
  background: #01d167;
  opacity: 20%;
}
</style>
