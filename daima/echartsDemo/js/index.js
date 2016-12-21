/**
 * Created by Administrator on 2016/12/19 0019.
 */
var myChart;
window.onresize=function(){
    myChart.resize();
}
$(function(){
    loadConfig();
});

function loadConfig(){//资源路径配置
    require.config({
        paths : {
            echarts : 'js/echart/build/dist'
        }
    });
    // 指定图表的配置项和数据/*加载图表*/
    require([ 'echarts', 'echarts/chart/pie','echarts/chart/line','echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载,常用的有line,bar,pie,radar
    ], function(ec) {
        // 基于准备好的dom，初始化echarts实例
        myChart = ec.init(document.getElementById('main'));
        option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value}'
                    }
                }
            ],
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
        myChart.setOption(option);// 使用刚指定的配置项和数据显示图表。
    })
}
