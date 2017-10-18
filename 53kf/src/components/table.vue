<template>
    <div>
        <Table :columns="columns" height='550' style="border:none" :data='data1'></Table>
        <Page :total="dataCount" :page-size="pageSize" show-total @on-change="changepage" show-elevator v-show="flag" class="page"></Page>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pageSize: 10,
            dataCount: 0,
            ajaxData: [],
            flag: false,
            data1: []
        }
    },
    props: ['columns', 'data'],
    methods: {
        handData() {
            this.ajaxData = data;
            this.dataCount = this.ajaxData.length;
            if (this.dataCount < this.pageSize) {
                this.data1 = this.ajaxData;
                this.flag = false;
            } else {
                this.data1 = this.ajaxData.slice(0, this.pageSize);
                this.flag = true;
            }
        },
        changepage(index) {
            let _start = (index - 1) * this.pageSize;
            let _end = index * this.pageSize;
            this.data1 = this.ajaxData.slice(_start, _end);
        }
    },
    created() {
        this.handData()
    }
}
</script>
<style lang="less" scoped>

</style>


