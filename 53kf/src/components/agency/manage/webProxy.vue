<template>
    <div class="web-proxy">
        <p>您可以选择适合您的代理网站模板，并设置模板主题颜色和您的代理网站信息，我们将为您自动搭建一个网址为
            <span>tuiguang.53kf.com/自定义目录</span>的代理网站，方便您进行推广。</p>
        <h4>模板样式</h4>
        <div class="web-figure">
            <figure>
                <img src="./../../../assets/img/agency/module.png" alt="">
                <img src="./../../../assets/img/agency/module.png" alt="">
            </figure>
            <RadioGroup v-model="type">
                <Radio label="模板样式1"></Radio>
                <Radio label="模板样式2"></Radio>
            </RadioGroup>
        </div>
        <h4>主题颜色</h4>
        <div>
            <button v-for="(item,index) in color" :key="item" @click="sub = index" :class='{white:index == sub}' :style="{'background':item}"></button>
        </div>
        <h4>其他设置</h4>
        <form action="">
            <ul>
                <li class="web-dir">
                    <label for="">网站目录：</label>
                    <span>tuiguang.53kf.com/</span>
                    <input type="text">
                    <button>马上访问</button>
                </li>
                <li>
                    <label for="">网站页签：</label>
                    <input type="text" placeholder="请设置网页显示的页签">
                </li>
                <li class="kfms">
                    <label for="">客服模式：</label>
                    <RadioGroup v-model="service">
                        <Radio label="自主模式"></Radio>
                        <Radio label="快服服务"></Radio>
                    </RadioGroup>
                    <span>自主服务模式代理商需要自行设置客服系统接待功能和提供客户服务； 快服服务模式使用快服客服图标和客服人员提供客户服务
                    </span>
                </li>
                <li>
                    <label for="">挂码风格：</label>
                    <input type="text" name="" id="">
                </li>
                <li>
                    <label for="">公司名称：</label>
                    <input type="text" placeholder="请填写公司名称">
                </li>
                <li class="logo">
                    <label for="">公司logo：</label>
                    <input type="text" placeholder="建议分辨率为152px*50px以内">
                    <div>上传图标</div>
                </li>
                <li>
                    <label for="">销售电话：</label>
                    <input type="text" placeholder="固话电话或400、800号码">
                </li>
                <li>
                    <label for="">公司地址：</label>
                    <input type="text">
                </li>
                <li>
                    <label for="">联系方式：</label>
                    <input type="text">
                </li>
                <li class="gsjj">
                    <label for="">公司简介：</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </li>
                <li class="web-submit">
                    <button>提交</button>
                    <div>预览</div>
                </li>
            </ul>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isA: true,
            type: '',
            color: ['#ff0000', '#ff5004', '#ffba01', '#058721', '#2cfdff', '#0864fd', '#a801ff', '#c6c6c6'],
            service: '',
            sub:0
        }
    },
    methods: {
    }
}
let data = [
    {
        '序号': 111111111111,
        '模板名称': '53快服',
        '修改时间': '2017-09-10 10:10:10',
        '操作': '修改',
    },
    {
        '序号': 111111111111,
        '模板名称': '53快服',
        '修改时间': '2017-09-10 10:10:10',
        '操作': '修改',
    },
    {
        '序号': 111111111111,
        '模板名称': '53快服',
        '修改时间': '2017-09-10 10:10:10',
        '操作': '修改',
    },
    {
        '序号': 111111111111,
        '模板名称': '53快服',
        '修改时间': '2017-09-10 10:10:10',
        '操作': '修改',
    },
    {
        '序号': 111111111111,
        '模板名称': '53快服',
        '修改时间': '2017-09-10 10:10:10',
        '操作': '修改',
    }

]
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.label() {
    vertical-align: top;
    display: inline-block;
    margin-top: 8px;
}
.button() {
    background: #2c87ea;
    width: 96px;
    height: 32px;
    color: #fff;
}

.web-proxy {
    color: #2c2c2c;
    margin-top: 30px;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    letter-spacing: 1px;
    p {
        span {
            color: #b4b4b4;
        }
    }
    h4 {
        background: #f6f6f6;
        height: 42px;
        line-height: 42px;
        padding-left: 15px;
        font-weight: normal;
        margin-top: 30px;
        margin-bottom: 20px;
    }
    .web-figure {
        margin-top: 15px;
        figure {
            min-width: 1080px;
            img {
                margin-right: 50px;
            }
        }
        .ivu-radio-group-item {
            margin-left: 160px;
            font-size: 14px;
            color: #2c2c2c;
            letter-spacing: 1px;
            margin-right: 205px;
        }
    }
    div {
        &>button {
            width: 42px;
            height: 42px;
            margin-right: 1px;
            position: relative;
        }
        .white{
               &::after{
                content: '';
                width:0;
                height: 0;
                border-right: 0 solid transparent;
                border-top:0 solid transparent;
                border-left:15px solid transparent; 
                border-bottom:15px solid #fff; 
                position: absolute;
                left: 27px;
                top: 27px;
            }
        }
    }
    form {
        color: #5a5a5a;
        line-height: 15px;
        li {
            height: 32px;
            margin-bottom: 15px;
            label {
                margin-right: 5px;
            }
            input {
                background: #ffffff;
                border: 1px solid #bcbcbc;
                border-radius: 2px;
                width: 282px;
                height: 30px;
                text-indent: 7px;
            }
             ::-webkit-input-placeholder {
                color: #c6c6c6;
            }
             :-moz-placeholder {
                color: #c6c6c6;
            }
             ::-moz-placeholder {
                color: #c6c6c6;
            }
             :-ms-input-placeholder {
                color: #c6c6c6;
            }
        }
        .web-dir {
            span {
                color: #2c87ea;
                letter-spacing: 0;
            }
            input {
                width: 148px;
                height: 30px;
            }
            button {
                .button;
            }
        }
        .kfms {
            line-height: 32px;
            label {
                vertical-align: top;
            }
            &>.ivu-radio-group {
                vertical-align: top;
            }
            .ivu-radio-group-item {
                font-size: 14px;
                margin-right: 30px;
            }
            &>span {
                display: inline-block;
                width: 465px;
                height: 32px;
                margin-left: 62px;
                color: #5a5a5a;
                letter-spacing: 1px;
                line-height: 20px;
            }
        }
        .logo {
            height: 64px;
            label {
                .label;
                margin-right: 0;
            }
            input {
                width: 282px;
                height: 62px;
            }
             ::-webkit-input-placeholder {}
            &>div {
                display: inline-block;
                line-height: 32px;
                text-align: center;
                .button;
            }
        }
        .gsjj {
            height: 96px;
            label {
                .label;
            }
            textarea {
                background: #ffffff;
                border: 1px solid #bcbcbc;
                border-radius: 2px;
                width: 282px;
                height: 94px;
            }
        }
        .web-submit {
            margin-top: 50px;
            button {
                .button;
                background: #ffa51e;
                margin: 0 15px 0 80px;
            }
            &>div {
                .button;
                display: inline-block;
                line-height: 32px;
                text-align: center;
            }
        }
    }
}
</style>
