<template>
    <div class="widget">   <!--湖北省用电排行榜-->
        <h2 class="widget_title"> <p>{{msg}}</p> </h2>
        <div class="widget_content">
            <div class="drop_box drop_box_2">
                <ul class="left_drop">
                    <li class="time_1 time_2">    <!--开始时间-->
                        <i class="icon icon-chat_21"></i>
                        <input value="2016-01-01" id="demo2">
                    </li>
                    <li class="time_line"></li>   <!--起始时间连接线-->
                    <li class="time_1 time_2">    <!--结束时间-->
                        <i class="icon icon-chat_21"></i>
                        <input  id="demo3" >
                    </li>
                    <li class="time_1">    <!--下拉时间_月-->
                        <i class="icon icon-chat_14"></i>
                        <select class="select-xl" v-model='selected'>
                            <option v-for="item in items" v-bind:value="item.value" >
                                {{item.text}}
                            </option>
                        </select>
                    </li>
                    <li class="time_1">    <!--下拉时间_月-->
                        <i class="icon icon-chat_24"></i>
                        <select class="select-xl" v-model='selected1'>
                            <option v-for="item in items" v-bind:value="item.value" >
                                {{item.text}}
                            </option>
                    </li>
                </ul>
                <ul class="right_btn">
                    <li class="djcx">点击查询</li>
                </ul>
            </div>
            <div class="padd">
                <div class="phb_chars">   <!--排行cahrs-->
                    <p class="chars_phb_top">{{msg1}}</p>
                    <main-ten></main-ten>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
    import MainTen from './ChartContent/Mainten'
    export default {
        name: 'ContentRange',
        components: {
            MainTen
        },
        data: function () {
            return {
                msg:'园区楼宇用电排行',
                msg1:'X：时间   Y：功率（单位：W）',
                selected: 'A',
                selected1: 'A',
                items:[
                    { text: '电费', value: 'A' },
                    { text: '电量', value: 'B' }
                ],
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .widget{ margin:6px 3px; background:#3d4f7f; border-radius:6px; border:solid 1px #7087b3;}
    .widget_title{ width:100%; height:29px; border-bottom:solid 1px #7087b3; }  /*标题*/
    .widget_title p{ line-height:27px; text-indent:20px; font-size:14px; letter-spacing:0.5px;}
    /*智能查询********************************************************************************/
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

    .cxjg_box li{ float:left; width:50%; }
    .cxjg_box li p{ float:left; line-height:24px; font-size:12px;}
    .cxjg_box li a{ float:left; width:140px; height:24px; background:#3d4f7f; border:solid 1px #51618f; text-indent:10px; border-radius: 1px; font-family:Arial, Helvetica, sans-serif; line-height:22px;}
    .cxjg_box li span{ float:left; line-height:24px; margin-left:4px; font-size:12px;}
    /*按钮*/
    .phb_chars{ height:490px;}
    .chars_phb_top{ display:block; overflow:hidden; padding:5px 15px; float:right;}  /*单位标注*/
</style>
