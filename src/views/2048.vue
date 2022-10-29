<script setup lang="ts">
import { reactive } from 'vue';

type StateType = {
  text: string
}

const state = reactive<StateType>({
  text: 'this page is 2048page'
})
</script>

<template>
  <main>
    <div>{{ state.text }}</div>
  </main>
</template>
