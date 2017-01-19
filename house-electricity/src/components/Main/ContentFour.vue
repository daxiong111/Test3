<template>
    <div class="col_4">   <!--湖北省用电情况-->
        <div class="widget widget_map">
            <h2 class="widget_title">  <p>湖北省用电情况</p>  </h2>
            <div class="widget_content">
                <div class="padd padd_ydqk">
                    <ul class="switch_btn switch_btn_map">  <!--切换按钮-->
                        <li v-for="(tab, index) in tabs" :class="{'switch_btn_click':index===checked}" @click="tabChange(index)" >{{tab.name}}</li>
                    </ul>
                    <div class="chars_ydqk">    <!--用电情况_地图-->
                        <main-nine></main-nine>
                    </div>
                    <div class="table_ydqk">   <!--用电情况_右边表格-->
                        <table width="100%" border="0" cellspacing="1" cellpadding="0">
                            <thead>
                            <tr class="table_title">
                                <td width="24%">城市</td>
                                <td width="45%">用电量&nbsp;(kWh)</td>
                                <td width="31%">电费&nbsp;(元)</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(item, index) in items">
                                <td>{{item.name}}</td>
                                <td>{{item.mount}}</td>
                                <td>{{item.fee}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import '../../assets/js/hubei';
    import MainNine from './ChartContent/MainNine'
    export default {
        name: 'ContentFour',
        components: {
            MainNine
        },
        data () {
            return {
                checked:0,
                tabs:[
                    {name: "全部", id: '0'},
                    {name: "本年", id: '1'},
                    {name: "本月", id: '1'},
                    {name: "本日", id: '1'}
                ],
                items:[]
            }
        },
        created () {
            const url = "static/data/mapTable.json";
            this.$http.get(url).then(function(data){
                const JsonArr=data.body.resultObj;
                this.$set(this, 'items',JsonArr);
//                console.log(this.items)
            },function(response){
                console.info(response);
            })
        },
        methods:{
            tabChange(index){
                this.checked = index;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .col_4{ width:66.666%; height:620px;  margin-top: -6px;float:left;}
    /*模块********************************************************************************/
    .widget{ margin:6px 3px; background:#3d4f7f; border-radius:6px; border:solid 1px #7087b3;}
    .widget_map{ overflow:hidden;}
    .widget_unique{ background:none; border:none !important;}  /*无边框无背景的*/
    .widget_title{ width:100%; height:29px; border-bottom:solid 1px #7087b3; }  /*标题*/
    .widget_title p{ line-height:27px; text-indent:20px; font-size:14px; letter-spacing:0.5px;}
    /*模块******/
    .padd_ydqk{ position:relative;}
    /*湖北省用电情况********************************************************************************/
    .padd_ydqk{ overflow:hidden;}
    .ydqk_top{ display:block; overflow:hidden; padding:12px 15px;  background:#556698; border-bottom:solid 1px #677ca8;}
    .ydqk_top ul{ float:left; }

    /*三组数据*/
    .ydqk_data{ overflow:hidden; float:right !important;}
    .ydqk_data li{ float:left; }
    .ydqk_data li p{ float:left; line-height:24px; font-size:12px;}
    .ydqk_data li a{ float:left; width:126px; height:24px; background:#3d4f7f; border:solid 1px #283b67; text-indent:10px; border-radius: 1px; font-family:Arial, Helvetica, sans-serif; line-height:22px;}
    .ydqk_data li span{ float:left; line-height:24px; margin-left:4px; font-size:12px;}
    .ydqk_data li i{ float:left; width:1px; height:24px; background:#7087b3; margin:0 15px;}
    /*三组数据*/
    /*地图*/
    .chars_ydqk{ float:left; width:80%; height:579px; background:url(../../assets/images/map_bg.jpg) no-repeat top;}
    /*地图*/
    /*地图右边表格*/
    /*表格*/
    table{ background:#6176a4; width:100%; border-collapse:collapse; border-spacing:0;  }
    table td{ height:30px; line-height:30px; background:#3d4f7f; border:1px solid #6176a4; font-size:12px; color:#cbddfd; padding-left:10px;}
    /*表格*/
    .table_ydqk{ float:left; width:20%;  height:526px; margin-top:3px;}
    .table_ydqk table td{ height:31px !important; line-height:20px !important;}
    .table_ydqk table .table_title td{ background: #51618f !important; height:44px !important;  line-height:18px !important;}
    /*地图右边表格*/
    /*湖北省用电情况********************************************************************************/
    .switch_btn_map{ position:absolute; top:15px; left:15px; z-index:10;}
    .switch_btn{ overflow:hidden; float:left; width:190px; height:22px; border:solid 1px #8192c6; border-radius:2px; background:#3d4f7f;}
    .switch_btn li{ float:left; width:25%; height:100%; line-height:20px; text-align:center; font-size:12px; border-left:solid 1px #8192c6; color:#91a2d7; cursor:pointer;}
    .switch_btn li:hover{ color:#cbddfd !important; text-shadow: 0px 1px 0px #34405b;} /*切换按钮经过*/
    .switch_all{ border-left:none !important;}
    .switch_btn .switch_btn_click{ color:#cbddfd !important; text-shadow: 0px 1px 0px #34405b;} /*切换按钮点击*/

</style>
