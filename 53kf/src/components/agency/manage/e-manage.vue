<template>
    <div class="e-manage">
        <Row class="one">
            <Col span="5">序号</Col>
            <Col span="5">模板名称</Col>
            <Col span="5">修改时间</Col>
            <Col span="5">操作</Col>
            <Col span="4" style="text-align:right">
            <Tooltip content="您最多添加维护 5 个自定义邮件模板" placement="top-end" :transfer='true'>
                <button  @click="flag = true">添加模板</button>
            </Tooltip>
            </Col>
        </Row>
        <Row v-for="item in data" :key='item.set'>
            <Col v-for="col in item" :key='col' span="5">{{col}}</Col>
        </Row>
        <div class="e-up" v-if="flag">
            <h4>添加模板</h4>
            <Icon type="ios-close-empty" size='30'></Icon>
            <hr>
            <div>
                <label for="">模板名称：</label><input type="text">
                <span>模板名称字数小于50，正文内容字数小于15000</span>
            </div>
            <p>可用参数及格式：收件人邮箱：{$email}，代理商邮箱：{$account}，联系人姓名：{$contact}，联系人手机：{$mobile}
            </p>
            <vue-editor v-model="content" v-if="eModule"></vue-editor>
            <div>
                <button class="e-btn">添加</button>
                <button class="e-btn" @click="flag = false">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            clientHeight: state => state.size.height,
            clientWidth: state => state.size.width
        })
    },
    data() {
        return {
            isA: true,
            content: '<h1>Some initial content</h1>',
            data: data,
            eModule: true,
            disabled: false,
            flag:false
        }
    },
    methods: {
    },
    components: {
        VueEditor
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

.e-manage {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #9f9f9f;
    letter-spacing: 1px;
    line-height: 15px;
    margin-top: 30px;
    .ivu-row {
        text-align: center;
        min-width: 1200px;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        height: 50px;
        color: #4b4b4b;
        letter-spacing: 0;
        line-height: 50px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;
        button {
            background: #2c87ea;
            width: 96px;
            height: 32px;
            color: #fff;
            border: none;
            outline: none;
            line-height: 32px;
        }
        &:hover {
            background: #f0fbff;
        }
    }
    .e-up {
        background: #fff;
        width: 600px;
        height: 664px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-190px, -370px);
        z-index: 3;
        box-shadow: 0 4px 15px gray;
        font-size: 14px;
        color: #5a5a5a;
        filter: blur(0px);
        /* IE6~IE9 */
        h4 {
            margin: 17px 484px 18px 20px;
            display: inline-block;
        }
        hr {
            margin: 0;
        }
        &>div {
            height: 32px;
            line-height: 32px;
            margin: 15px 20px 10px 20px;
            input {
                background: #ffffff;
                border: 1px solid #bcbcbc;
                border-radius: 2px;
                width: 198px;
                height: 30px;
            }
            &>span {
                font-size: 12px;
                color: #ff6868;
                letter-spacing: 0.86px;
            }
        }
        p {
            font-size: 12px;
            color: #5a5a5a;
            letter-spacing: 0.86px;
            margin: 0 10px 10px 20px;
        }
        .quillWrapper {
            width: 560px;
            height: 400px;
            #quill-container {
                height: 318px;
            }
        }
        .e-btn {
            background: #2c87ea;
            width: 64px;
            height: 32px;
            color: #fff;
            margin-left: 415px;
            &:nth-child(2) {
                background: #f7f7f7;
                border: 1px solid #dddddd;
                color: #5a5a5a;
                margin-left: 10px;
            }
        }
    }
}

.ivu-tooltip-content .ivu-tooltip-inner {
    background: #fbfaf8;
    color: #4d4d4d;
}

.ivu-tooltip-popper[x-placement^=top] .ivu-tooltip-arrow {
    border-top-color: #fbfaf8;
}
</style>
