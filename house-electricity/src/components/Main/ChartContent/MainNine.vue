<template>
    <div id="main9"></div>
</template>
<script>
import echarts from 'echarts'
export default {
    name: 'MainNine',
    data () {
        return {
            chart: null,
            data:[]
        }
    },
    created () {
        const url = "static/data/dataMap.json";
        this.$http.get(url).then(function(data){
            const JsonArr=data.body.resultObj;
            this.$set(this, 'data', JsonArr);
            this.drawMain9('main9');
        },function(response){
            console.info(response);
        })
    },
    methods: {
        drawMain9 (id){
            this.chart = echarts.init(document.getElementById(id));
            this.chart.setOption({
                tooltip : {
                    trigger: 'item',
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
                }, //提示窗完
//色块
                legend: {
                    show: false,
                    orient: 'vertical',
                    left: 'left',
                    data:['用电量分布']
                },
//色块
                visualMap: {     //色块样式
                    y: '2',
                    x2: '2',
                    backgroundColor: 'rgba(19,35,75,0.7)', //提示窗背景色
                    borderColor: '#9eb4e4',
                    padding:15,
                    itemGap:13,      //色块间距
                    itemWidth:20,    //色块宽度
                    itemHeight:10,   //色块高度
                    borderWidth: 0.5,
                    splitNumber: 5,
                    pieces: [
                        //{min: 1500}, // 不指定 max，表示 max 为无限大（Infinity）。
                        {min: 1000, max: 2000, label: '1000 到 2000（自定义label）'},
                        {min: 600, max: 1000, label: '600 到 1000（自定义label）'},
                        {min: 300, max: 600, label: '300 到 600（自定义label）'},
                        {min: 0, max: 300, label: '0到 300（自定义label）'},
                        //{value: 123, label: '123（自定义特殊颜色）', color: 'grey'}, // 表示 value 等于 123 的情况。
                        //{max: 10}      // 不指定 min，表示 min 为无限大（-Infinity）。
                    ],
                    inRange: {
                        color: ['#7fc4d3', '#7faad3', '#7f97d3', '#7f7fd3']
                    },
                    textStyle: {
                        fontSize: '12',
                        fontFamily: '微软雅黑',
                        //fontWeight : 'bold'
                        color: '#cbddfd'
                    }
                },
                series: [{
                    name: '用电量分布',
                    type: 'map',
                    mapType: '湖北',
                    z: 2,
                    //center: [115.97, 29.71],     //当前视角的中心点，用经纬度表示
                    left: 'center',    //左侧外边距
                    top: 'center',
                    right: 'auto',
                    bottom: 'auto',
                    layoutCenter: null,    //['30%', '30%']
                    layoutSize: '',       //地图的大小
                    mapValueCalculation: 'sum',     //多个拥有相同地图类型的系列会使用同一个地图展现，如果多个系列都在同一个区域有值  'sum' 取和,'average' 取平均值,'max' 取最大值,'min' 取最小值。
                    // showLegendSymbol: '用电量分布',     //相应区域显示图例的颜色标识（系列标识的小圆点），存在 legend 组件时生效
                    scaleLimit: {     //滚轮缩放的极限控制，通过min, max最小和最大的缩放值，默认的缩放为1。
                        min: 0,
                        max: 1,
                    },
                    selectedMode: false,     //选中模式，表示是否支持多个选中，默认关闭
                    roam: true,    //鼠标缩放和平移。默认不开启。只开启缩放或平移，可以设置 'scale' 或者 'move'。设置 true 都开启
                    label: {       //地图上的文本标签
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontFamily: '微软雅黑',
                                fontSize: 12
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                color: '#c2ddfd',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontFamily: '微软雅黑',
                                fontSize: 12,
                            }
                        }
                    },
                    itemStyle: {       //地图样式
                        normal: {
                            areaColor: '#3e5080',    //区域的颜色
                            borderColor: '#3d4f7f', //模块边框颜色
                            borderWidth: 1,
                            color: '#ffddaf', //点的颜色
                            borderType: 'solid',
                            shadowBlur: '',
                            shadowColor: '',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            opacity: 0.9
                        },
                        emphasis: {
                            areaColor: '#3d4f7f',
                            color: 'rgba(255,255,255,0.3)',
                            borderColor: "#cbddfd", //模块边框变色
                            borderWidth: 2,
                            borderType: 'solid',
                            shadowBlur: '',
                            shadowColor: '',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            opacity: 1
                        }
                    },
                    data: this.data
                }]
            })
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.drawMain9('main9');
            var that = this;
            var resizeTimer = null;
            window.onresize = function() {
                if (resizeTimer) clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function() {
                    that.drawMain9('main9');
                }, 100);
            }
        });
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #main9{width:100%; height:578px;}
</style>
