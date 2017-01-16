<template>
  <div class="nav_2">
    <ul>
      <li class="nav2_btn" v-for="data in datas">
        <i :class="[data.iconA, data.iconB]"></i> <a href="#" @click="changePage(data)">{{data.label}}</a>
      </li>
    </ul>
    <div class="user_right">
      <div class="user_1">
        <a>
          <span></span><p>{{msg1}}</p><i class="icon icon-chat_10"></i>
        </a>
        <ul class="dropdown login" style=" display:none;">
          <li v-for="operator in operators"></li>
        </ul>
      </div>
      <a class="user_2" title="公告"><span></span></a>
      <a class="user_3" title="工作日程"><span></span></a>
      <a class="user_4" title="刷新"><span class="icon icon-chat_22"></span></a>
      <p class="current_page">{{msg2}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CompNav',
  data:function () {
    return {
      datas: [
         {label: '实时数据',iconA:'icon',iconB:'icon-chat_5'},
         {label: '排行榜',iconA:'icon',iconB:'icon-chat_6'},
         {label: '电能预测',iconA:'icon',iconB:'icon-chat_8'}
      ],
      msg1:'用户名',
      operators:[
         {operator:'登录'},
         {operator:'退出'},
         {operator:'注销'}
      ],
      msg2:'当前页：设备管理;_实时数据'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*头部第三行********************************************************************************/
  .nav_2{  width:100%; height:32px; padding:0 15px;}
  .user_right{ float:right;}
  .user_1,.user_2,.user_3,.user_4{ float:left; height:22px; border-radius:2px; border:solid 1px #283b67;  background:url(../../assets/images/bg_1.jpg) repeat; margin-top:4px;  cursor:pointer;}
  .user_1{ width:110px;margin-right:12px;}
  .user_1 a{ display:block; overflow:hidden; width:100%; height:100%; }
  .user_1 span{ width:20px; float:left; height:100%; border-right:solid 1px #283b67; background-position:0 -34px; background-image:url(../../assets/images/photo.png);}
  .user_1 p{ width:70px; float:left; height:100%; text-indent:5px; color:#13244a; font-size:12px; line-height:20px; border-right:solid 1px #283b67; text-shadow: 0px 1px 0px #8ca3d3;}
  .user_1 i{ width:18px; float:left; height:100%; font-size:12px; color:#13244a; text-shadow: 0px 1px 0px #8ca3d3; text-indent:4px;}
  .dropdown{ position:absolute; top:28px; right:150px; border:solid 1px #7087b3; border-radius:2px; z-index:1; } /*登录下拉*/
  .login{ width:110px;}  /*登录下拉*/
  .dropdown li{ background:#2a3a62; color:#7398de; text-indent:6px; line-height:24px; font-size:12px;}  /*登录下拉*/
  .dropdown li:hover{ background:#a7b8e9; color:#2a3a62; cursor:pointer;}  /*登录下拉*/
  .user_2,.user_3{ width:33px; margin-right:12px; }
  .user_2 span{ display:block; width:25px; height:17px;  background-position:-61px -62px; background-image:url(../../assets/images/photo.png);}
  .user_3 span{ display:block; width:25px; height:17px;  background-position:-88px -63px; background-image:url(../../assets/images/photo.png);}
  .user_4{ width:33px;}
  .user_4 span{ display:block; width:30px; height:22px; font-size:14px; text-align:center; line-height:18px; text-shadow:0px 1px 0px #3e4e70; }

  /*二级下拉菜单*/
  .user_menu{ float:left; }
  .menu_btn{ position:relative; float:left; width:90px;}
  .menu_btn_click a{ color:#ffc77d;} /*点击效果*/
  .menu_btn > a{ line-height:32px; text-shadow:0px 1px 0px #34405b}
  .menu_btn > a:hover{ color:#ffc77d; cursor:pointer;}
  .menu_btn > a > i{ margin-left:10px; font-size:12px;}
  .menu_btn > a > span{ font-family:Arial, Helvetica, sans-serif; margin-right:2px;}
  .menu_btn .room{ position:absolute; top:32px; left:0px; width:90px;}  /*菜单下拉*/
  /*二级下拉菜单*/

  /*头部第二行********************************************************************************/


  /*头部第三行********************************************************************************/
  .nav_2{ border-top:solid 1px #91a2d6;  border-bottom:solid 1px #49577e;
    background-color: #3e5080;
  } /*背景*/

  /*三级菜单*/
  .nav_2 ul{ float:left;}
  .nav2_btn{ position:relative; float:left; margin-right:50px;}
  .nav2_btn_click a{ color:#ffc77d; } /*点击效果*/
  .nav2_btn_click i{ color:#ffc77d; } /*点击效果*/
  .nav2_btn > a{ float:left; font-size:12px; line-height:32px; text-shadow:0px 1px 0px #34405b; letter-spacing:1px; text-indent:5px; }
  .nav2_btn > i{ float:left; line-height: 30px; text-shadow:0px 1px 0px #34405b; }
  .nav2_btn:hover a{ color:#ffc77d; cursor:pointer;}
  .nav2_btn:hover i{ color:#ffc77d; cursor:pointer;}
  /*三级菜单*/

  .current_page{ float:left; font-size:12px;  line-height: 32px; text-shadow: 0px 1px 0px #34405b; letter-spacing:1px; text-align:right; margin-left:20px;}
  /*头部第三行********************************************************************************/
  /*头部**************************************************************************************************************************************************************************************************************************/
</style>
