<template>
    <div class="col_3">   <!--第三列-->
        <div class="widget">   <!--最大负荷排名、最小负荷排名-->
            <h2 class="widget_title">
                <ul class="fh_tab" >  <!--负荷切换按钮-->
                    <li v-for="(tab, index) in tabs" :class="{'fh_tab_click':index===checked}" @click="tabChange(index)" >{{tab.name}}</li>
                </ul>
            </h2>
            <div class="widget_content">
                <div class="padd">
                    <div class="fh_table">
                        <table width="100%" border="0" cellspacing="1" cellpadding="0">
                            <thead>
                                <tr class="table_title">
                                    <td class="table_location">{{msg}}</td>
                                    <td class="ydl_color">
                                        <a>{{msg1}}</a> <p>{{msg2}}</p>
                                    </td>
                                    <td class="table_location">{{msg}}</td>
                                    <td class="ydl_color">
                                        <a>{{msg1}}</a> <p>{{msg2}}</p>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>武汉</td><td>800</td><td>武汉</td><td>800</td>
                                </tr>
                                <tr>
                                    <td>黄石</td><td>800</td><td>黄石</td><td>800</td>
                                </tr>
                                <tr>
                                    <td>十堰</td><td>800</td><td>十堰</td><td>800</td>
                                </tr>
                                <tr>
                                    <td>荆州</td><td>800</td><td>荆州</td><td>800</td>
                                </tr>
                                <tr>
                                    <td>宜昌</td><td>800</td><td>宜昌</td><td>800</td>
                                </tr>
                                <tr>
                                    <td>襄阳</td><td>800</td><td>襄阳</td><td>800</td>
                                </tr>
                                <tr>
                                    <td>鄂州</td><td>800</td><td>鄂州</td><td>800</td>
                                </tr>
                                <tr>
                                    <td>荆门</td><td>800</td><td>荆门</td><td>800</td>
                                </tr>
                                <tr>
                                    <td>黄冈</td><td>800</td><td>黄冈</td><td>800</td>
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
    export default {
        name: 'ContentThird',
        data: function () {
            return {
                checked: 0,
                msg:"地区",
                msg1:"用电量",
                msg2:"单位：kWh",
                tabs: [
                    {name: "最大负荷排名", id: '0'},
                    {name: "最小负荷排名", id: '1'}
                ]
            }
        },
        methods: {
            tabChange: function (index) {
                this.checked = index;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .col_3{ width:20%;float:left;}
    .widget{ margin:6px 3px; background:#3d4f7f; border-radius:6px; border:solid 1px #7087b3;}
    .widget_title{ width:100%; height:29px; border-bottom:solid 1px #7087b3; }  /*标题*/
    .widget_title p{ line-height:27px; text-indent:20px; font-size:14px; letter-spacing:0.5px;}
    /*最大负荷排名、最小负荷排名********************************************************************************/
    /*选项卡按钮*/
    .fh_tab{ margin-left:4px;}
    .fh_tab li{ display:inline-block; border:solid 1px #8192c6;  border-top-left-radius:3px; border-top-right-radius:3px; margin-top:3px;  padding:0 14px; line-height:24px;color: #91a2d7; cursor: pointer;}
    .fh_tab li:hover{ color:#cbddfd !important; text-shadow:0px 1px 0px #34405b; }
    .fh_tab_click{ color:#cbddfd !important; text-shadow:0px 1px 0px #34405b;  }
    /*选项卡按钮*/
    /*表格*/
    .fh_table{ height:342px;}
    /*.fh_table tbody{ width:50%; float:left;}*/
    .fh_table td{ height:32px;}
    .fh_table .table_title td{ background:#556698 !important; height:53px !important;}
    .table_location{width:30%;}
    .ydl_color{width:20%;}
    .ydl_color a{ display:block; white-space:normal; line-height:20px; font-size:12px;}
    .ydl_color p{ float:left; width:80px; line-height:20px; font-size:12px; }
    /*表格*/
    /*最大负荷排名、最小负荷排名********************************************************************************/
    /*表格*/
    table{ background:#6176a4; width:100%; border-collapse:collapse; border-spacing:0;  }
    table td{ height:30px; line-height:30px; background:#3d4f7f; border:1px solid #6176a4; font-size:12px; color:#cbddfd; padding-left:10px;}
    /*表格*/
</style>
