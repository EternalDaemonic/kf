<template>
    <div>
        <Table :columns="columns" height='550' style="border:none" :data='data'></Table>
        <Page :total="dataCount" :page-size="pageSize" show-total @on-change="changepage" show-elevator v-show="flag" class="page"></Page>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pageSize: 10,
            dataCount:100,
            flag: false,
            data: []
        }
    },
    props: ['columns', 'data1'],
    methods: {
        handData() {
            this.dataCount = this.data1.length;
            if (this.dataCount < this.pageSize) {
                this.data = this.data1;
                this.flag = false;
            } else {
                this.data = this.data1.slice(0, this.pageSize);
                this.flag = true;
            }
        },
        changepage(index) {
            let _start = (index - 1) * this.pageSize;
            let _end = index * this.pageSize;
            this.data = this.data1.slice(_start, _end);
        }
    },
    mounted() {
        this.handData()
    }
}
</script>
<style lang="less">
.info-column {
  font-size: 14px;
  color: #ff7b2b;
  letter-spacing: 0;
}
</style>


