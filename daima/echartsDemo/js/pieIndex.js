/**
 * Created by Administrator on 2016/12/19 0019.
 */
var myChart;
// window.onresize=function(){
//     myChart.resize();
// }
$(function(){
    loadConfig();
});

function loadConfig(){
    require.config({
        paths : {
            echarts : 'js/echart/build/dist'
        }
    });
    require([ 'echarts', 'echarts/chart/line','echarts/chart/bar','echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载,常用的有line,bar,pie,radar
    ], function(ec) {
        myChart = ec.init(document.getElementById('main'));
        option = {
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
        myChart.setOption(option);// 使用刚指定的配置项和数据显示图表。
    })
}
