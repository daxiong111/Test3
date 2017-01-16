<template>
    <header>
      <div class="nav_1">
        <a class="logo"></a>
        <hello></hello>
      </div>
        <comp-nav></comp-nav>
    </header>
</template>

<script>
import Hello from './Hello'
import CompNav from './CompNav'

export default {
  name: 'HeadNav',
  components: {
    Hello,CompNav
  }
}
</script>

<style>
  body{ background:#273454;}
  header{ width:100%;}
  .nav_1,.user,.nav_2{  width:100%; height:32px; padding:0 15px;}

  /*头部第一行********************************************************************************/
  .nav_1{ border-bottom:solid 1px #8499c8;
    background-color: #28303d;

  } /*背景*/
  .logo{ float:left; width:182px; height:26px; background-image:url(../../assets/images/photo.png); background-repeat:no-repeat; background-position:0px 0px; margin-top:3px;}

</style>
