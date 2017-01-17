<template>
    <div id="main1" style=" width:100%; height:248px"></div>
</template>
<script>
import echarts from 'echarts'
export default {
    name: 'MainOne',
    data: function () {
        return {
            chart: null,
            fee:[],
            year:[],
            number:[]
        }
    },
    created: function() {
        const url = "static/data/data1.json";
        this.$http.get(url).then(function(data){
            const JsonD=data.body.resultObj.year;
            const Json1=data.body.resultObj.fee;
            const Json2=data.body.resultObj.number;
            this.$set(this, 'year', JsonD);
            this.$set(this, 'fee', Json1);
            this.$set(this, 'number', Json2);
            this.drawMain1('main1');
        },function(response){
            console.info(response);
        })
    },
    methods: {
        drawMain1 (id){
            this.chart = echarts.init(document.getElementById(id));
            this.chart.setOption({
                tooltip: {
                    trigger: 'axis',
                    transitionDuration: 0,
                    backgroundColor: 'rgba(255,255,255,0.6)', //提示窗背景色
                    borderColor: '#bbddff',
                    borderRadius: 2,
                    borderWidth: 1, //提示窗边框
                    padding: 8,
                    position: function(p) {
                        // 位置回调
                        // console.log && console.log(p);
                        return [p[0] + 10, p[1] - 10];
                    },
                    textStyle: { //提示窗文字
                        color: '#3d4f7f',
                        decoration: 'none',
                        fontFamily: '微软雅黑, sans-serif',
                        fontSize: 12,
                        //fontStyle: 'italic',
                        //fontWeight: 'bold'
                    },
                },
//提示窗完
//头部色块
                legend: {
                    orient: 'horizontal',    //色块横向 'horizontal' | 'vertical'
                    x : '45',    //色块位置居中
                    y : 'top',   //色块放顶部
                    padding:2,     //外边距
                    itemGap:10,      //色块间距
                    itemWidth:20,    //色块宽度
                    itemHeight:10,   //色块高度
                    backgroundColor: 'rgba(0,122,242,0)',
                    textStyle:{   //色块对应的文字样式
                        color:'#cbddfd',
                        fontSize : '12',
                        fontFamily : '微软雅黑'
                    },
                    data:['电量趋势','电费趋势']
                },
//头部色块完
//网格线外边框
                grid: {
                    borderWidth:1,//网格外框粗细//
                    backgroundColor: 'rgba(61,79,127,0.01)', //网格透明填充
                    borderColor:'rgba(255,255,255,0.05)', //网格外框颜色
                    x: 45, //图表左边边距
                    y: 20, //图表顶部边距
                    x2:50, //图表右边边距
                    y2:40 //图表底部边距
                    //width:220,
                    //height:116
                },
//网格线外边框完
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        splitArea: {show: false},  //网格线分割显示
                        axisLine:{      //x线轴
                            lineStyle:{
                                color:'#cbddfd'
                            }
                        },
                        data : this.year,
                        axisLabel : {    //Y轴数字
                            show : true,
                            textStyle : {
                                color : '#cbddfd',
                                fontFamily : '微软雅黑'
                                //align : 'left'
                            }
                        },
                    }
                ],
                yAxis : [
                    {       //左边y轴
                        //name:'电量趋势',
                        type : 'value',
                        splitArea: {show: false}, //网格线分割显示
                        axisLine:{      //x线轴
                            lineStyle:{
                                color:'#cbddfd'
                            }
                        },
                        axisLabel:{    //Y轴数字
                            show : true,
                            textStyle : {
                                color : '#cbddfd',
                                fontFamily : 'Arial'
                                //align : 'left'
                            }
                        },
                        splitLine:{      //x内部网格
                            lineStyle:{
                                color: 'rgba(112,135,179,0.5)',
                                width: 1,  //横网格线粗细
                                type: 'solid'
                            }
                        },
                    },
                    {       //右边y轴
                        // name:'电费趋势',
                        type : 'value',
                        splitArea: {show: false}, //网格线分割显示
                        axisLine:{      //x线轴
                            lineStyle:{
                                color:'#cbddfd'
                            }
                        },
                        axisLabel:{    //Y轴数字
                            show : true,
                            textStyle : {
                                color : '#cbddfd',
                                fontFamily : 'Arial'
                                //align : 'left'
                            }
                        },
                        splitLine:{      //x内部网格
                            lineStyle:{
                                color: 'rgba(112,135,179,0.5)',
                                width: 1,  //横网格线粗细
                                type: 'solid'
                            }
                        },
                    }
                ],
                series : [
                    {
                        name:'电量趋势',
                        type:'line',
                        smooth: true,     //是否转曲线
                        stack: '总量',
                        itemStyle: {   //标记点样式
                            normal: {
                                color: '#ffc77d',
                                borderWidth: 1
                            }
                        },
                        areaStyle: {   //区域填充样
                            normal: {
                                color: '#ffc77d'
                            }
                        },
                        lineStyle: {   //线条样式
                            normal: {
                                color: '#ffc77d'
                            }
                        },
                        data:this.number
                    },
                    {
                        name:'电费趋势',
                        type:'line',
                        smooth: true,     //是否转曲线
                        stack: '总量',
                        itemStyle: {   //标记点样式
                            normal: {
                                color: '#61ddc7',
                                borderWidth: 1
                            }
                        },
                        areaStyle: {   //区域填充样
                            normal: {
                                color: '#61ddc7'
                            }
                        },
                        lineStyle: {   //线条样式
                            normal: {
                                color: '#61ddc7'
                            }
                        },
                        data:this.fee
                    }
                ]
            })
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.drawMain1('main1');
            var that = this;
            var resizeTimer = null;
            window.onresize = function() {
                if (resizeTimer) clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function() {
                    that.drawMain1('main1');
                }, 100);
            }
        });
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
