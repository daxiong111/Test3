<template>
    <div id="main8"></div>
</template>
<script>
import echarts from 'echarts'
export default {
    name: 'MainEight',
    data () {
        return {
            chart: null
        }
    },
    methods: {
        drawMain8 (id){
            this.chart = echarts.init(document.getElementById(id));
            this.chart.setOption({
                //网格线外边框
                grid: {
                    show: false,
                    borderWidth: 0, //网格外框粗细//
                    x: 4, //图表左边边距
                    y: 4, //图表顶部边距
                    x2: 4, //图表右边边距
                    y2: 4 //图表底部边距
                    //width:220,
                    //height:116
                },
                //网格线外边框完
                calculable: false,
                //内部网格线
                xAxis: [ //竖线
                    {
                        show: false,
                        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
                    }
                ],
                yAxis: [ //横线
                    {
                        show: false,
                    }
                ],
                //内部网格线完
                series: [{
                    name: '电费趋势',
                    type: 'line', //决定引入“柱状图、曲线图还是雷达图等”
                    smooth: false, //“折线转曲线”
                    data: [110, 130, 122, 140, 130, 146, 126, 130, 113, 132, 103, 130],
                    itemStyle: {
                        //折线样式
                        normal: {
                            // color: '#13b9b7',   //放在此处“文字、柱子、点”等所有元素一起变色
                            lineStyle: { //线条（线段）样式
                                width: 1, //线的粗细、点的粗细
                                color: '#82e0e1', //线的颜色
                            },
                            color: '#82e0e1', //点的颜色
                            areaStyle: { //区域填充样式
                                color: 'rgba(97,221,199,0.8)', //填充背景的颜色
                            },
                            label: { //文字
                                show: false,
                            },
                        },
                        //折线样式
                    },
                }]
            })
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.drawMain8('main8');
            var that = this;
            var resizeTimer = null;
            window.onresize = function() {
                if (resizeTimer) clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function() {
                    that.drawMain8('main8');
                }, 100);
            }
        });
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #main8{width:100%; height:38px}
</style>
