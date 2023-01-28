<script setup lang="ts" >
import { useAxiosSamplePageFetchData } from '@functions/useAxiosSamplePageFetchData'
const text = 'AxiosPage is running'
const fetchData = useAxiosSamplePageFetchData()

fetchData()

</script>
<template>
  <div>
    {{ text }}
  </div>
</template>