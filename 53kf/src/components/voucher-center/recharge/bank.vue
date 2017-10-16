<template>
    <div class="bank">
        <div class="bank-top">
            <label for="">添加时间：</label>
            <DatePicker type="date" confirm placeholder="选择日期" style="width:120px"></DatePicker>&nbsp;-
            <DatePicker type="date" confirm placeholder="选择日期" style="width: 120px"></DatePicker>
            <label for="">审核状态：</label>
            <Select v-model="state" style="width:100px">
                <Option value="0">已提交</Option>
                <Option value="1">未通过</Option>
                <Option value="2">已确认</Option>
            </Select>
            <button class="bank-btn1">查询</button>
            <button class="bank-btn2">添加汇款信息</button>
        </div>
        <div class="bank-content">
            <Table height="500" :columns="columns1" :data="data2" style="border:none"></Table>
        </div>
        <div class="bank-bottom">
            <ul :style="{width:width1}">
                <li :style="{width:width1+'px'}">！网上银行充值实时到账；银行汇款凭汇款单于一个工作日内处理。</li>
                <li :style="{width:width1+'px'}">汇款注意事项</li>
                <li :style="{width:width1+'px'}">1、银行汇钱时必须汇个零头，数目越特别越好， 如本应汇1000元的，你可以汇1000.12元 （以区分别人的汇款），如金额相同而不能及时确认款项，将影响到贵方业务的办理时间。</li>
                <li :style="{width:width1+'px'}">2、选择公司转帐的用户，需要将汇款底单传真给我司，底单上请注明53快服帐号、汇款用途 等。传真号码：0579-82131253。</li>
                <li :style="{width:width1+'px'}">特别提醒：客户请在汇款金额小数点后加上两位数字以便核实汇款，并及时联系客服核对查询！</li>
            </ul>
            <div class="bank-bottom-right">
                <img src="./../../../assets/img/voucher-center/CCB.png" alt="">
                <li>开户银行：中国农业银行金华商城支行</li>
                <li>账号：19660301040011044</li>
                <li>户名：金华快服科技有限公司</li>
            </div>
            <div class="bank-bottom-right">
                <img src="./../../../assets/img/voucher-center/ABC.png" alt="">
                <li>开户银行：中国农业银行金华商城支行</li>
                <li>账号：19660301040011044</li>
                <li>户名：金华快服科技有限公司</li>
                <li>注：在网银转账时，账户性质请选择“支票户”
                </li>
            </div>
            <div class="bank-bottom-right">
                <img src="./../../../assets/img/voucher-center/ICBC.png" alt="">
                <li>开户银行：中国农业银行金华商城支行</li>
                <li>账号：19660301040011044</li>
                <li>户名：金华快服科技有限公司</li>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
            state: '',
            columns1: [
                {
                    type: 'index',
                    title: '序号',
                    align: 'center'
                },
                {
                    title: '账号',
                    key: 'account',
                },
                {
                    title: '汇款银行',
                    key: 'bank'
                },
                {
                    title: '汇款金额',
                    key: 'money'
                },
                {
                    title: '状态',
                    key: 'state'
                },
                {
                    title: '提交时间',
                    key: 'time'
                },
                {
                    title: '备注',
                    key: 'set'
                },
                {
                    title: '操作',
                    key: 'operation'
                }
            ],
            data2: [
                {
                    account: '王小明',
                    bank: '中国农业银行金华商城支行',
                    money: '￥10000',
                    state: '已通过',
                    time: '2017/09/10 13:10:10',
                    set: '无',
                    操作: 'wu'
                },
                {
                    account: '王小明',
                    bank: '中国农业银行金华商城支行',
                    money: '￥10000',
                    state: '已通过',
                    time: '2017/09/10 13:10:10',
                    set: '无',
                    操作: 'wu'
                },
                {
                    account: '王小明',
                    bank: '中国农业银行金华商城支行',
                    money: '￥10000',
                    state: '已通过',
                    time: '2017/09/10 13:10:10',
                    set: '无',
                    操作: 'wu'
                },
                {
                    account: '王小明',
                    bank: '中国农业银行金华商城支行',
                    money: '￥10000',
                    state: '已通过',
                    time: '2017/09/10 13:10:10',
                    set: '无',
                    操作: 'wu'
                },
                {
                    account: '王小明',
                    bank: '中国农业银行金华商城支行',
                    money: '￥10000',
                    state: '已通过',
                    time: '2017/09/10 13:10:10',
                    set: '无',
                    操作: 'wu'
                },
                {
                    account: '王小明',
                    bank: '中国农业银行金华商城支行',
                    money: '￥10000',
                    state: '已通过',
                    time: '2017/09/10 13:10:10',
                    set: '无',
                    操作: 'wu'
                },
                {
                    account: '王小明',
                    bank: '中国农业银行金华商城支行',
                    money: '￥10000',
                    state: '已通过',
                    time: '2017/09/10 13:10:10',
                    set: '无',
                    操作: 'wu'
                }

            ]
        }
    },
    computed:{
        ...mapState({
            width1:function(state){
                if (state.size.width < 1500){
                    console.log(state.size.width)
                    return 1500
                }
                return  state.size.width / 1920 * 506
            } 
        })
     
    },
    methods: {

    }
}
</script>
<style lang="less">
.bank {
    margin-top: 40px;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #2c2c2c;
    letter-spacing: 1px;
    .bank-top {
        margin-bottom: 40px;
        .ivu-input,
        .ivu-select-selection {
            border-radius: 1px;
        }
        label:nth-of-type(2) {
            margin-left: 40px;
        }
        .bank-btn1 {
            background: #f7f7f7;
            border: 1px solid #dddddd;
            width: 62px;
            height: 30px;
            color: #5a5a5a;
            margin: 0 20px 0 50px;
        }
        .bank-btn2 {
            background: #2c87ea;
            width: 128px;
            height: 32px;
            border: none;
            color: #fff;
        }
    }
    .ivu-table th {
        font-family: MicrosoftYaHei;
        font-size: 14px;
        color: #9f9f9f;
        background: #fff;
        letter-spacing: 1px;
    }
    .ivu-table:after,
    .ivu-table:before {
        width: 0;
        height: 0;
    }
    .bank-bottom {
        font-family: MicrosoftYaHei;
        letter-spacing: 1px;
        font-size: 14px;
        color: #6c6c6c;
        letter-spacing: 1px;
        min-width: 1146px;
        &>ul {
            display: inline-block;
            list-style-type: none;
            margin-right: 40px;
            li {
                width: 606px;
                line-height: 20px;
                margin-bottom: 4px;
                text-align: justify;
                min-width: 386px;
            }
            &>li:nth-child(1),
            &>li:nth-child(5) {
                font-size: 12px;
                color: #ff7b2b;
                letter-spacing: 0.86px;
                margin: 10px 0 15px;
            }
            &>li:nth-child(2) {
                color: #2c2c2c;
                margin-bottom: 5px;
            }
        }
        .bank-bottom-right {
            display: inline-block;
            background: #ffffff;
            border: 1px solid #cfcfcf;
            width: 298px;
            height: 58px;
            text-align: center;
            vertical-align: top;
                overflow: hidden;
                transition: 1s;
                margin-right: 38px;
                &:nth-child(4){
                    margin-right: 0;
                }
            img {
                margin-top: 3px;
                margin-bottom: 30px;
            }
            li {
                font-family: MicrosoftYaHei-Bold;
                font-size: 14px;
                color: #2c2c2c;
                letter-spacing: 1px;
                list-style-type: none;
                font-weight:900;
                margin-bottom: 15px;
                &:nth-of-type(4) {
                    font-size: 14px;
                    width: 240px;
                    color: #ff7b2b;
                    letter-spacing: 1px;
                    line-height: 25px;
                    margin-left: 30px;
                }
               
            }
             &:hover{
                    height: 240px;
                }
        }
    }
}
</style>


