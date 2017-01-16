<template>
    <div class="col_1">
       <content-data></content-data>
       <content-search></content-search>
       <content-range></content-range>
    </div>
</template>

<script>
import ContentData from './ContentData'
import ContentSearch from './ContentSearch'
import ContentRange from './ContentRange'

export default {
  name: 'ContentLeft',
  components: {
      ContentData,ContentSearch,ContentRange
  }
}
</script>

<style scoped>
    .col_1{ float:left;}
    .col_1{ width:33.33%;}
</style>
