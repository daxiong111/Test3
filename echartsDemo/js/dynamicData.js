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
            title : {
                text: '动态数据',
                subtext: '纯属虚构'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['最新成交价', '预购队列']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            dataZoom : {
                show : false,
                start : 0,
                end : 100
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : true,
                    data : (function (){
                        var now = new Date();
                        var res = [];
                        var len = 10;
                        while (len--) {
                            res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                            now = new Date(now - 2000);
                        }
                        return res;
                    })()
                },
                {
                    type : 'category',
                    boundaryGap : true,
                    data : (function (){
                        var res = [];
                        var len = 10;
                        while (len--) {
                            res.push(len + 1);
                        }
                        return res;
                    })()
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    scale: true,
                    name : '价格',
                    boundaryGap: [0.2, 0.2]
                },
                {
                    type : 'value',
                    scale: true,
                    name : '预购量',
                    boundaryGap: [0.2, 0.2]
                }
            ],
            series : [
                {
                    name:'预购队列',
                    type:'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    itemStyle : {
                        normal : {
                            color:'#B6A2DE',
                            barBorderRadius:[5, 5, 0, 0]//设置柱状图圆角
                        },
                        emphasis: {
                            barBorderRadius: [5, 5, 0, 0]
                        }
                    },
                    data:(function (){
                        var res = [];
                        var len = 10;
                        while (len--) {
                            res.push(Math.round(Math.random() * 1000));
                        }
                        return res;
                    })()
                },
                {
                    name:'最新成交价',
                    type:'line',
                    symbol : 'emptyCircle',
                    symbolSize:3,
                    itemStyle : {
                        normal : {
                            color:'#2EC7C9',
                            lineStyle:{
                                color:'#2EC7C9'
                            }
                        }
                    },
                    data:(function (){
                        var res = [];
                        var len = 10;
                        while (len--) {
                            res.push((Math.random()*10 + 5).toFixed(1) - 0);
                        }
                        return res;
                    })()
                }
            ]
        };
        myChart.setOption(option);// 使用刚指定的配置项和数据显示图表。
    })
}
var lastData = 11;
var axisData;
// clearInterval(timeTicket);
setInterval(function (){
    lastData += Math.random() * ((Math.round(Math.random() * 10) % 2) == 0 ? 1 : -1);
    lastData = lastData.toFixed(1) - 0;
    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

    // 动态数据接口 addData
    myChart.addData([
        [
            0,        // 系列索引
            Math.round(Math.random() * 1000), // 新增数据
            true,     // 新增数据是否从队列头部插入
            false     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
        ],
        [
            1,        // 系列索引
            lastData, // 新增数据
            false,    // 新增数据是否从队列头部插入
            false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
            axisData  // 坐标轴标签
        ]
    ]);
}, 2100);
