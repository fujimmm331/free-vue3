<script setup lang="ts">
import { useFieldStore } from '@/stores/index';

const fieldLength = 4
const { fields, move, initializeFields } = useFieldStore()
initializeFields(fieldLength)

const onClickUpButton = () => {
  move('LEFT')
  console.log('onClick')
}
</script>

<template>
  <main>
    <div v-for="field, index in fields" :key="index">
      {{ field }}
    </div>

    <button @click="onClickUpButton">↑</button>
  </main>
</template>
