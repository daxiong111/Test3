<template>
    <div>
        <head-nav></head-nav>
        <content-main></content-main>
    </div>
</template>

<script>
import HeadNav from './components/Head/HeadNav'
import ContentMain from './components/Main/ContentMain'

export default {
  name: 'app',
  components: {
      HeadNav,ContentMain
  }
}
</script>

<style>

</style>
