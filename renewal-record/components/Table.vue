<template>
  <div class="mb">
    <el-table :data="tableData.value"
              border
              v-loading="loading.value"
              empty-text="暂无数据"
              style="width: 100%">
      <el-table-column prop="name"
                       label="订单编号" />
      <el-table-column prop="name"
                       label="总订单号" />
      <el-table-column prop="name"
                       label="子订单号" />
      <el-table-column prop="date"
                       label="设备类型" />
      <el-table-column prop="name"
                       label="金额" />
      <el-table-column prop="name"
                       label="支付时间" />
      <el-table-column prop="address"
                       label="创建时间" />
      <el-table-column fixed="right"
                       label="操作"
                       width="180">
        <template slot-scope="scope">

          <!-- v-permission="['OperatorsPurchasesOrderCreate']" -->
          <el-button class="operate-item"
                     type="primary"
                     @click="checkData(scope)">
            查看
          </el-button>
          <!-- <el-button class="operate-item"
                     type="primary"
                     @click="deleteData(scope)">
            删除
          </el-button> -->

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { tableData, rowId, loading, checkShow } from '../use/data'
let _this
const dataReturn = { // dataReturn 用于返回 data 页面数据双向绑定
  tableData,
  loading
}

const method = (_this) => {

  // 查看按钮
  _this.checkData = ({ row }) => {

    rowId.value = row.id
    checkShow.value = true // 查看弹窗显示

  }
  // _this.deleteData = ({ row }) => {

  //   console.log(`删除 ====>`, row)

  //   tableData.value = tableData.value.filter(item => item.id !== row.id)

  // }

}

export default {
  name: 'Table',
  components: {},
  data () {

    _this = this
    method(_this)
    return dataReturn

  },

}
</script>
<style lang="scss">
.order_manage .cell {
  text-align: center;
}
</style>
