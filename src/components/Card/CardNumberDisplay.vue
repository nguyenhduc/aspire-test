<template>
  <template v-if="isShow">
    {{ content.slice(0, 4) }}
    <div class="spacer" />
    {{ content.slice(4, 8) }}
    <div class="spacer" />
    {{ content.slice(8, 12) }}
    <div class="spacer" />
    {{ content.slice(12, 16) }}
  </template>
  <template v-else>
    <q-icon name="fiber_manual_record" />
    <q-icon name="fiber_manual_record" />
    <q-icon name="fiber_manual_record" />
    <q-icon name="fiber_manual_record" />
    <div class="spacer" />
    <q-icon name="fiber_manual_record" />
    <q-icon name="fiber_manual_record" />
    <q-icon name="fiber_manual_record" />
    <q-icon name="fiber_manual_record" />
    <div class="spacer" />
    <q-icon name="fiber_manual_record" />
    <q-icon name="fiber_manual_record" />
    <q-icon name="fiber_manual_record" />
    <q-icon name="fiber_manual_record" />
    <div class="spacer" />
    {{ hint }}
  </template>
</template>
<style scoped>
i {
  font-size: 0.55em;
}
.spacer {
  width: 20pt;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardNumberDisplay',
  props: {
    content: {
      type: String,
      required: true,
    },
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hint() {
      return this.content.slice(-4);
    },
  },
});
</script>
