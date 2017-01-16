<template>
    <div class="widget">   <!--智能查询-->
        <h2 class="widget_title"> <p>{{msg}}</p> </h2>
        <div class="widget_content">
            <div class="drop_box drop_box_2">
                <ul class="left_drop">
                    <li class="time_1">    <!--下拉时间_年-->
                        <i class="icon icon-chat_21"></i>
                        <dl class="select">
                            <dt><span>2016</span>年</dt>
                            <dd>
                                <ul class="dropdown_1" style="display:none;">
                                    <li> <a>全部</a> </li>
                                    <li> <a><span>2010</span>年 </a> </li>
                                    <li> <a><span>2011</span>年 </a> </li>
                                    <li> <a><span>2012</span>年 </a> </li>
                                    <li> <a><span>2013</span>年 </a> </li>
                                    <li> <a><span>2014</span>年 </a> </li>
                                    <li> <a><span>2015</span>年 </a> </li>
                                    <li> <a><span>2016</span>年 </a> </li>
                                </ul>
                            </dd>
                        </dl>
                    </li>
                    <li class="time_1">    <!--下拉时间_月-->
                        <i class="icon icon-chat_21"></i>
                        <dl class="select">
                            <dt><span>09</span>月</dt>
                            <dd>
                                <ul class="dropdown_1" style="display:none;">
                                    <li> <a>全部</a> </li>
                                    <li> <a><span>01</span>月</a> </li>    <li> <a><span>02</span>月</a> </li>
                                    <li> <a><span>03</span>月</a> </li>    <li> <a><span>04</span>月</a> </li>
                                    <li> <a><span>05</span>月</a> </li>    <li> <a><span>06</span>月</a> </li>
                                    <li> <a><span>07</span>月</a> </li>    <li> <a><span>08</span>月</a> </li>
                                    <li> <a><span>09</span>月</a> </li>    <li> <a><span>10</span>月</a> </li>
                                    <li> <a><span>11</span>月</a> </li>    <li> <a><span>12</span>月</a> </li>
                                </ul>
                            </dd>
                        </dl>
                    </li>
                    <li class="time_1">    <!--下拉时间_日-->
                        <i class="icon icon-chat_21"></i>
                        <dl class="select">
                            <dt><span>05</span>日</dt>
                            <dd>
                                <ul class="dropdown_1" style="display:none;">
                                    <li> <a>全部</a> </li>
                                    <li> <a><span>01</span>日</a> </li>   <li> <a><span>02</span>日</a> </li>   <li> <a><span>03</span>日</a> </li>
                                    <li> <a><span>04</span>日</a> </li>   <li> <a><span>05</span>日</a> </li>   <li> <a><span>06</span>日</a> </li>
                                    <li> <a><span>07</span>日</a> </li>   <li> <a><span>08</span>日</a> </li>   <li> <a><span>09</span>日</a> </li>
                                    <li> <a><span>10</span>日</a> </li>   <li> <a><span>11</span>日</a> </li>   <li> <a><span>12</span>日</a> </li>
                                    <li> <a><span>13</span>日</a> </li>   <li> <a><span>14</span>日</a> </li>   <li> <a><span>15</span>日</a> </li>
                                    <li> <a><span>16</span>日</a> </li>   <li> <a><span>17</span>日</a> </li>   <li> <a><span>18</span>日</a> </li>
                                    <li> <a><span>19</span>日</a> </li>   <li> <a><span>20</span>日</a> </li>   <li> <a><span>21</span>日</a> </li>
                                    <li> <a><span>22</span>日</a> </li>   <li> <a><span>23</span>日</a> </li>   <li> <a><span>24</span>日</a> </li>
                                    <li> <a><span>25</span>日</a> </li>   <li> <a><span>26</span>日</a> </li>   <li> <a><span>27</span>日</a> </li>
                                    <li> <a><span>28</span>日</a> </li>   <li> <a><span>29</span>日</a> </li>   <li> <a><span>30</span>日</a> </li>
                                </ul>
                            </dd>
                        </dl>
                    </li>
                    <li class="time_1">    <!--下拉城市-->
                        <i class="icon icon-chat_21"></i>
                        <dl class="select">
                            <select id="op" class="dropdown_sl area" v-model='selected'>
                                <option v-for="data in datas" v-bind:value="data.value" >
                                    {{data.text}}
                                </option>
                            </select>
                        </dl>
                    </li>
                    <li class="time_1">    <!--下拉时间_日-->
                        <i class="icon icon-chat_21"></i>
                        <select id="op1" class="dropdown_sl" v-model='selected1'>
                            <option v-for="item in items" v-bind:value="item.value" >
                                {{item.text}}
                            </option>
                        </select>
                    </li>
                </ul>
                <ul class="right_btn">
                    <li class="djcx djcx_close" @click="getSearch">点击查询</li>
                </ul>
            </div>
            <div class="padd">
                <p class="cxjg_title">{{msg1}}</p>
                <ul class="cxjg_box"> <!--查询结果-->
                    <li> <p>电量：</p> <a>100000</a> <span>kWh</span> </li>
                    <li> <p>电费：</p> <a>1000</a> <span>元</span> </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ContentSearch',
        data: function () {
            return{
                msg:'智能查询',
                msg1:'查询结果：',
                selected: 'A',
                selected1: 'A',
                items:[
                    { text: '工业用电', value: 'A' },
                    { text: '商业用电', value: 'B' },
                    { text: '居民用电', value: 'C' }
                ],
                datas:[
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
            }
        },
        methods:{
            getSearch:function(){
                const op = document.getElementById("op").value;
                const op1 = document.getElementById("op1").value;
               console.log(op);
               console.log(op1);
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
    .dropdown_sl{width: 74px;height: 22px;background: #3D4F7F;color: #97bbff;border-color:#3D4F7F;outline: none;}
    .dropdown_sl option{width: 95px;height: 34px;line-height: 34px;display: block;padding: 5px 8px;color: #798bbe;text-indent: 6px;font-size: 12px;}
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
    .select dd > ul > li { width:100%; height:24px; background:#2a3a62;}
    .select dd > ul > li > a{ width:100%; height:24px; line-height:24px; display:block; padding:0 8px; color:#798bbe;  text-indent:6px; font-size:12px;}
    .select dd > ul > li > a > span{ font-family:Arial, Helvetica, sans-serif !important;  margin-right:5px;}
    .select dd > ul > li > a:hover { background:#a7b8e9; cursor:pointer; color:#2a3a62;}
    /*下拉选择*/

    /*查询按钮*/
    .right_btn{ float:right; width:20%; padding-right:15px; padding-top:8px;}
    .right_btn li{ width:100%; height:24px; border-radius:3px;  border:solid 1px #283b67;  margin: 6px 0; color:#13244a; text-align:center; line-height:22px; font-size:12px; text-shadow: 0px 1px 0px #8ca3d3; cursor:pointer;}
    .right_btn li:hover{ border:solid 1px #B6C8F1;}
    .right_btn .djcx{ float:left; background:url(../../assets/images/bg_3.jpg) repeat !important; border:solid 1px #672844; color:#4a1331; text-shadow: 0px 1px 0px #d58fa7 !important;}
    /*查询按钮*/

    .cxjg_title{ height:20px; line-height:20px; margin-top:8px; margin-bottom:-5px; text-indent:15px;}
    /*三组数据*/
    .cxjg_box{ overflow:hidden; height:44px;background:#2a3a62; border:1px solid #6176a4; margin:10px 15px; padding:8px 10px;}
    .cxjg_box li{ float:left; width:50%; }
    .cxjg_box li p{ float:left; line-height:24px; font-size:12px;}
    .cxjg_box li a{ float:left; width:140px; height:24px; background:#3d4f7f; border:solid 1px #51618f; text-indent:10px; border-radius: 1px; font-family:Arial, Helvetica, sans-serif; line-height:22px;}
    .cxjg_box li span{ float:left; line-height:24px; margin-left:4px; font-size:12px;}

    /*三组数据*/
    /*智能查询********************************************************************************/
</style>
