<template>
    <div class="widget">   <!--数据总览-->
        <h2 class="widget_title">  <p>{{msg}}</p>  </h2>
        <div class="widget_content">
            <div class="padd">
                <ul class="sjzl">    <!--数据总览-->
                    <li class="sjzl_time">  <!--数据总览_时间-->
                        <div class="sjzl_year"><span>{{nowYear}}</span>年</div>
                        <div class="sjzl_month"> <i></i> <p>{{nowDate}}</p> </div>
                        <div class="zdl_time">{{nowTime}}</div>
                    </li>
                    <li class="sjzl_zdl"><!--数据总览_总电量-->
                        <div class="zdl_data"> <span>100000</span>w </div>
                        <div class="zdl_title"> <i></i> <p>{{msg1}}</p> </div>
                        <div class="zdl_chars">
                            <main-seven></main-seven>
                        </div>
                    </li>
                    <li class="sjzl_zdf">  <!--数据总览_总电费-->
                        <div class="zdf_data"> <span>100000</span>w </div>   <a class="tip">335666</a>
                        <div class="zdf_title"> <i></i> <p>{{msg2}}</p> </div>
                        <div class="zdf_chars">
                            <main-eight></main-eight>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import MainSeven from './ChartContent/MainSeven'
import MainEight from './ChartContent/MainEight'
export default {
    name: 'ContentData',
    components: {
        MainSeven,MainEight
    },
    data () {
        return {
            msg: '数据总览',
            msg1:'总电量',
            msg2:'总电费',
            nowYear: '',
            nowDate: '',
            nowTime: ''
        }
    },
    methods: {
        getTime (){
            const now = new Date();
            this.nowYear = now.getFullYear();
            this.nowDate = ((now.getMonth() + 1)<10?"0":"")+(now.getMonth()+1) + "月" + (now.getDate()<10?"0":"")+now.getDate() + "日";
            this.nowTime = (now.getHours()<10?"0":"")+now.getHours() + ":" + (now.getMinutes()<10?"0":"")+now.getMinutes() + ":" + (now.getSeconds()<10?"0":"")+now.getSeconds();
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.getTime();
            var that = this;
            setInterval(function(){
                that.getTime()
            },1000)
        })
    }
}
</script>

<style scoped>
    /*模块********************************************************************************/
    .widget{ margin:6px 3px; background:#3d4f7f; border-radius:6px; border:solid 1px #7087b3;}
    .widget_title{ width:100%; height:29px; border-bottom:solid 1px #7087b3; }  /*标题*/
    .widget_title p{ line-height:27px; text-indent:20px; font-size:14px; letter-spacing:0.5px;}
    /*模块********************************************************************************/
    /*数据总览********************************************************************************/
    .sjzl{ overflow:hidden; height:129px;}  /*数据总览*/
    .sjzl_time{width:28%;}
    .sjzl_zdl,.sjzl_zdf{ width:36%;}
    .sjzl li{ float:left; height:100%; border-right:solid 1px #6176a4; }

    .zdl_title,.zdf_title,.sjzl_month{ overflow:hidden; width:100%; height:36px;  padding-left:20px; border-bottom:solid 1px #6176a4;}
    .zdl_title i,.zdf_title i,.sjzl_month i{ float:left; width:26px; height:20px; background-position:-30px -63px; background-image: url(../../assets/images/photo.png); margin-top:1px}
    .sjzl_month i{ background-position:0px -64px; }
    .zdf_title i{ background-position:0px -84px; }
    .zdl_title p,.zdf_title p,.sjzl_month p{ float:left; font-size:14px; line-height:18px; letter-spacing:1px; text-align:left; text-indent:2px; }
    .zdl_data,.zdf_data,.sjzl_year{ width:100%; height:44px; font-size:13px; letter-spacing:1px; margin-top:10px; text-align:left; padding-left:17px;  }
    .zdl_data span,.zdf_data span,.sjzl_year span{ font-size:33px; line-height:44px; font-family:Arial, Helvetica, sans-serif !important;}
    .zdl_chars,.zdf_chars{ width:100%; height:38px; }  /*底部chars*/
    .sjzl_zdf{ border-right:none !important;} /*时间盒子*/
    .time_weather i{ float:left; width: 26px;  height: 16px; background-position: -30px -63px; background-image: url(../../assets/images/photo.png); margin-top: 1px;}
    .time_weather p{ float:left; padding-left:6px; }
    .sjzl_zdl,.sjzl_zdf{ position:relative;}
    .tip{ display:block; position:absolute; top:5px; right:5px; padding:4px; border:solid 1px #bbddff; background:rgba(255,255,255,0.7); border-radius:2px; font-family:Arial, Helvetica, sans-serif; color:#3d4f7f;}  /*提示*/
    /*时间*/
    .zdl_time{ width:70px; height:38px; line-height:38px; padding-left:17px; font-size:18px; font-family:Arial, Helvetica, sans-serif; letter-spacing:1px; }

    /*数据总览********************************************************************************/

</style>
