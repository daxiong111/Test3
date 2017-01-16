<template>
    <div id="main10" style=" width:100%; height:460px"></div>
</template>
<script>
import echarts from 'echarts';
export default {
    name: 'MainTen',
    data: function () {
        return {
            chart: null,
            floor:[],
            number:[]
        }
    },
    created: function() {
        var url="static/data/data.json";
        this.$http.get(url).then(function(data){
            var json=data.body.resultObj.floor;
            var jsonD=data.body.resultObj.number;
            this.$set(this, 'floor', json);
            this.$set(this, 'number', jsonD);
            this.drawMain10('main10');
        },function(response){
            console.info(response);
        })
    },
    methods: {
        drawMain10: function(id){
            this.chart = echarts.init(document.getElementById(id));
            this.chart.setOption({
                tooltip : {
                    trigger: 'axis',
                    //show: true,   //default true
                    showDelay: 0,
                    hideDelay: 50,
                    transitionDuration: 0,
                    backgroundColor: 'rgba(255,255,255,0.6)',   //提示窗背景色
                    borderColor: '#bbddff',
                    borderRadius: 2,
                    borderWidth: 1,   //提示窗边框
                    padding: 8,
                    position: function (p) {
                        // 位置回调
                        // console.log && console.log(p);
                        return [p[0] + 10, p[1] - 10];
                    },
                    textStyle: {   //提示窗文字
                        color: '#3d4f7f',
                        decoration: 'none',
                        fontFamily: '微软雅黑, sans-serif',
                        fontSize: 12,
                        //fontStyle: 'italic',
                        //fontWeight: 'bold'
                    },
                },
                //提示窗完
                //网格线外边框
                grid: {
                    borderWidth:1,//网格外框粗细//
                    backgroundColor: 'rgba(61,79,127,0.01)', //网格透明填充
                    borderColor:'rgba(255,255,255,0.05)', //网格外框颜色
                    x: 50, //图表左边边距
                    y: -2, //图表顶部边距
                    x2:22, //图表右边边距
                    y2:38 //图表底部边距
                },
//网格线外边框完
                calculable : true,
                yAxis : [
                    {
                        type : 'category',
                        boundaryGap :true, //X轴忽略首尾/
                        splitArea: {show: false},  //网格线分割显示
                        axisLine:{      //x线轴
                            lineStyle:{
                                color:'#cbddfd'
                            }
                        },
                        data : this.floor,
                        axisLabel : {    //Y轴数字
                            show : true,
                            interval: '0',
                            inside: false,
                            textStyle : {
                                color : '#cbddfd',
                                fontFamily : '微软雅黑'
                            }
                        },
                        splitLine:{    //Y轴线
                            lineStyle:{
                                color: 'rgba(112,135,179,1)',
                                width: 1,  //横网格线粗细
                                type: 'solid'
                            }
                        },
                    }
                ],
                xAxis : [
                    {
                        type : 'value',
                        splitArea: {show: false}, //网格线分割显示
                        axisLine:{      //x线轴
                            lineStyle:{
                                color:'#cbddfd'
                            }
                        },
                        splitLine:{      //x内部网格
                            lineStyle:{
                                interval: '0',
                                color: 'rgba(112,135,179,0.5)',
                                width: 1,  //横网格线粗细
                                type: 'solid'
                            }
                        },
                        axisLabel : {    //Y轴数字
                            show : true,
                            textStyle : {
                                color : '#cbddfd',
                                fontFamily :'Arial'
                            }
                        },
                    }
                ],
                series : [
                    {
                        name:'商业用电',
                        type:'bar',
                        stack: '总量',
                        barWidth:16,  //柱子宽度//
                        itemStyle: {        //柱子样式
                            normal: {
                                color:'#69a9d1',
                                barBorderRadius: 2,
                                borderWidth: 0
                            },
                        },
                        data:this.number
                    },
                ]
            })
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.drawMain10('main10');
            var that = this;
            var resizeTimer = null;
            window.onresize = function() {
                if (resizeTimer) clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function() {
                    that.drawMain10('main10');
                }, 100);
            }
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
