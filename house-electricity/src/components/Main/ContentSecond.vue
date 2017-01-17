<template>
    <div class="col_2">   <!--第二列-->
        <div class="widget">   <!--二列_1-->
            <h2 class="widget_title"> <p>{{msg}}</p> </h2>
            <div class="widget_content">
                <div class="drop_box drop_box_1">
                    <ul class="left_drop">
                        <li class="time_1">    <!--下拉城市-->
                            <i class="icon icon-chat_23"></i>
                            <select id="op2" class="select-xl" v-model='selected'>
                                <option v-for="item in items" :value="item.value" >
                                    {{item.text}}
                                </option>
                            </select>
                        </li>
                        <li class="time_1">
                            <i class="icon icon-chat_24"></i>
                            <select id="op3" class="select-xl" v-model='selected1'>
                                <option v-for="data in datas" :value="data.value" >
                                    {{data.text}}
                                </option>
                            </select>
                        </li>
                    </ul>
                    <ul class="right_btn">
                        <li class="djcx" @click="getSearch">确定</li>
                    </ul>
                </div>
                <a class="chars_dldf_top">
                    <ul class="switch_btn">
                        <li v-for="(tab, index) in tabs" :class="{'switch_btn_click':index===checked}" @click="toggleFinish(index)" >{{tab.name}}</li>
                    </ul>  <!--切换按钮-->
                    <p>{{msg1}}</p>
                </a>
                <div class="padd">
                    <div class="chars_ssgl">   <!--用电量、电费趋势图-->
                       <main-one></main-one>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainOne from './ChartContent/MainOne'

export default {
  name: 'ContentSecond',
  components: {
      MainOne
  },
  data: function () {
     return {
        msg: '电力供给图',
        msg1:'X：时间   Y：功率（单位：W）',
        selected: 'A',
        selected1: 'A',
        items:[
             { text: '武汉', value: 'A' },
             { text: '黄石', value: 'B' },
             { text: '十堰', value: 'C' },
             { text: '荆州', value: 'D' },
             { text: '宜昌', value: 'E' },
             { text: '襄阳', value: 'F' },
             { text: '鄂州', value: 'G' },
             { text: '荆门', value: 'H' },
             { text: '黄冈', value: 'I' },
             { text: '潜江', value: 'J' },
             { text: '天门', value: 'K' }
         ],
         datas:[
             { text: '工业用电', value: 'A' },
             { text: '商业用电', value: 'B' },
             { text: '居民用电', value: 'C' }
         ],
         checked:0,
         tabs:[
             {name:"本年",id:'0'},
             {name:"本月",id:'1'},
             {name:"本日",id:'2'}
         ]
        }
    },
    methods:{
        toggleFinish:function(index){
            this.checked=index;
        },
        getSearch:function(){
            const op = document.getElementById("op2").value;
            const op1 = document.getElementById("op3").value;
            console.log(op,op1);
            alert(op+" "+op1)
        }
    }
}
</script>

<style scoped>
    .col_2{ width:46.67%;float:left;}
    /*模块********************************************************************************/
    .widget{ margin:6px 3px; background:#3d4f7f; border-radius:6px; border:solid 1px #7087b3;}
    .widget_title{ width:100%; height:29px; border-bottom:solid 1px #7087b3; }  /*标题*/
    .widget_title p{ line-height:27px; text-indent:20px; font-size:14px; letter-spacing:0.5px;}
    /*模块********************************************************************************/
    /*数据总览********************************************************************************/
    .drop_box_2{ width:100%; height:89px;  background:#556698; border-bottom:solid 1px #677ca8;}

    /*下拉选择*/
    .left_drop{ padding-top:8px; padding-bottom:8px; float:left; padding-left:8px; width:80%;}
    .left_drop .time_1{ float:left; width:110px; height:24px; background:#3d4f7f; border:solid 1px #283b67;  border-radius:1px; margin:6px 8px;}
    .left_drop .time_1:hover{ border:solid 1px #8aa4e0;}
    .left_drop .time_1 i{ float:left; width:24px; height:22px; padding-top:2px; font-size:16px; text-align:center;   border-right: solid 1px #283b67;  color:#97bbff;} /*左边时间图标*/
    .left_drop .time_1 dt p{ height:23px; line-height:22px; text-indent:8px;  color:#97bbff;}
    .left_drop .time_2 input{ float:left; width:84px; line-height:21px; text-indent:5px; color:#97bbff; font-family:Arial, Helvetica, sans-serif; cursor:pointer;}
    .select i{ float:right; font-size:12px; width:22px; height:23px; line-height:20px; border-left: solid 1px #283b67;  color:#97bbff; cursor:pointer;} /*右边下拉三角图标*/
    .select{ position:relative; float:left; }
    .select dt{ width:84px; height:23px; line-height:22px; font-size:12px; background:url(../../assets/images/time.png) no-repeat 58px center; cursor:pointer; white-space:nowrap; text-overflow: ellipsis; overflow:hidden; position:relative; text-indent:6px;color: #97bbff;}
    .select dt span{ font-family:Arial, Helvetica, sans-serif !important; margin-right:5px; }
    .select dd{ position:absolute; left:-25px; top:24px; z-index:1;}
    .select dd { width:110px; max-height:194px; overflow:auto; border:solid 1px #7087b3; border-radius:2px; z-index:1;}
    .select dd > ul > li { width:100%; height:24px; background:#2a3a62;}
    .select dd > ul > li > a{ width:100%; height:24px; line-height:24px; display:block; padding:0 8px; color:#798bbe;  text-indent:6px; font-size:12px;}
    .select dd > ul > li > a > span{ font-family:Arial, Helvetica, sans-serif !important;  margin-right:5px;}
    .select dd > ul > li > a:hover { background:#a7b8e9; cursor:pointer; color:#2a3a62;}
    option:hover { background:#a7b8e9; cursor:pointer; color:#2a3a62;}
    .select-xl{width: 74px;height: 22px;background: #3D4F7F;color: #97bbff;border-color:#3D4F7F;outline: none}
    .select-xl option{width: 95px;height: 34px;line-height: 34px;display: block;padding: 0 8px;color: #798bbe;text-indent: 6px;font-size: 12px;}
    /*下拉选择*/

    /*查询按钮*/
    .right_btn{ float:right; width:20%; padding-right:15px; padding-top:8px;}
    .right_btn li{ width:100%; height:24px; border-radius:3px;  border:solid 1px #283b67;  margin: 6px 0; color:#13244a; text-align:center; line-height:22px; font-size:12px; text-shadow: 0px 1px 0px #8ca3d3; cursor:pointer;}
    .right_btn li:hover{ border:solid 1px #B6C8F1;}
    .right_btn .djcx{ float:left; background:url(../../assets/images/bg_3.jpg) repeat !important; border:solid 1px #672844; color:#4a1331; text-shadow: 0px 1px 0px #d58fa7 !important;}
    /*查询按钮*/
    .padd_ydqk{ position:relative;}
    .switch_btn_map{ position:absolute; top:15px; left:15px; z-index:10;}
    .switch_btn{ overflow:hidden; float:left; width:180px; height:22px; border:solid 1px #8192c6; border-radius:2px; background:#3d4f7f;}
    .switch_btn li{ float:left; width:33.333%; height:100%; line-height:20px; text-align:center; font-size:12px; border-left:solid 1px #8192c6; color:#91a2d7; cursor:pointer;}
    .switch_btn li:hover{ color:#cbddfd !important; text-shadow: 0px 1px 0px #34405b; } /*切换按钮经过*/
    .switch_all{ border-left:none !important;}
    .switch_btn .switch_btn_click{ color:#cbddfd !important; text-shadow: 0px 1px 0px #34405b; } /*切换按钮点击*/
    /*切换按钮*/
    .drop_box_1{ height:52px !important; }
    .chars_dldf_top{ display:block; overflow:hidden; padding:10px 15px;}
    /*切换按钮*/
    .chars_dldf_top p{ float:right;}
</style>
