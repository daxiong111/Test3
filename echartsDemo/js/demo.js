/**
 * Created by Administrator on 2016/12/19 0019.
 */
var myChart;
window.onresize=function(){
    myChart.resize();
}
$(function(){
    loadCharts();
})
function loadCharts(){
    // 基于准备好的dom，初始化echarts实例
    myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据
    var option = {
        backgroundColor: '#2c343c',
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                data:[
                    {value:235, name:'视频广告'},
                    {value:274, name:'联盟广告'},
                    {value:310, name:'邮件营销'},
                    {value:335, name:'直接访问'},
                    {value:400, name:'搜索引擎'}
                ],
                roseType: 'angle',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
