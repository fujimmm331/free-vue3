<script setup lang="ts">
import { useFieldStore } from '@/stores/index';

const fieldLength = 4
const { fields, initializeFields } = useFieldStore()
initializeFields(fieldLength)
</script>

<template>
  <main>
    <div v-for="field, index in fields" :key="index">
      {{ field }}
    </div>
  </main>
</template>
