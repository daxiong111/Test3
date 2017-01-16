<template>
  <div class="hello">
    <ul class="menu_box">
      <li v-for="item in items">
        {{item.message}}
      </li>
    </ul>
    <h1 class="name">{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data:function () {
    return {
      items: [
          { message: '首页' },
          { message: '能源供应' },
          { message: '设备管理' },
          { message: '用能管理' },
          { message: '能耗分析' },
          { message: '数据管理' }
      ],
      msg: 'VISmart 家庭用电预测'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menu_box{ float:left; overflow:hidden; padding-left:40px;}
  .menu_box > li{ display:inline-block; width:160px; height:27px; font-size:12px; line-height:26px; text-align:center; background-image:url(../../assets/images/btn_1.png); background-repeat:no-repeat;  margin-top:5px;  margin-left:-20px; cursor:pointer; letter-spacing:1px; }

  .menu_box > .menu_click{ color:#eef4ff !important;  background-image:url(../../assets/images/btn_2.png) !important;  text-shadow:0px 1px 0px #3e4e70;  margin-left:-8px !important;  margin-right:8px !important;}   /*菜单点击*/
  .menu_box > li:hover{ color:#eef4ff !important;  background-image:url(../../assets/images/btn_2.png) !important;  text-shadow:0px 1px 0px #3e4e70;  margin-left:-8px !important;  margin-right:8px !important;}  /*菜单经过*/
  .name{ float:right; line-height:32px; letter-spacing:0.5px; color:#9EBAEF }   /*项目名称*/
  /*头部第一行********************************************************************************/
</style>
