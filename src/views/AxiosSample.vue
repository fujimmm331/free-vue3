<script setup lang="ts" >
import BaseResource from '@/resources/BaseResource'
const text = 'AxiosPage is running'
const resource = new BaseResource()
const url = 'https://api.chucknorris.io/jokes/random'
</script>
<template>
  <div>
    {{ text }}
  </div>
</template>