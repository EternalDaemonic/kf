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
            <button v-for="item in color" :key="item" :style="{'background':item}"></button>
        </div>
        <h4>其他设置</h4>
        <form action="">
            <ul>
                <li>
                    <label for="">网站目录</label>
                    <span>tuiguang.53kf.com/</span>
                    <input type="text">
                    <button>马上访问</button>
                </li>
                <li>
                    <label for="">网站页签：</label>
                    <input type="text" placeholder="请设置网页显示的页签">
                </li>
                <li>
                    <label for="">客服模式：</label>
                    <RadioGroup v-model="service">
                        <Radio label="自主模式"></Radio>
                        <Radio label="快服服务"></Radio>
                    </RadioGroup>
                </li>
                <li>
                    <label for="">挂码风格：</label>
                    <input type="text" name="" id="">
                </li>
                <li>
                    <label for="">公司名称：</label>
                    <input type="text" placeholder="请填写公司名称">
                </li>
                <li>
                    <label for="">公司logo：</label>
                    <input type="text" placeholder="建立分辨率为152px*50px以内">
                    <button>上传图标</button>
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
                <li>
                    <label for="">公司简介：</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
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
            service: ''
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
button {
    border: none;
    outline: none;
}

.web-proxy {
    color: #2c2c2c;
    margin-top: 30px;
    p{
        span{
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
    div{
        &>button {
        width: 42px;
        height: 42px;
        margin-right: 1px;
         }
    }
}
</style>
