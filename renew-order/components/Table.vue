<template>
  <div class="mb">
    <el-table
      :data="tableData.value"
      border
      v-loading="loading.value"
      empty-text="暂无数据"
      style="width: 100%"
    >
      <el-table-column prop="orderNumber" label="订单编号" />
      <el-table-column prop="parentOrderNumber" label="子订单编号" />
      <el-table-column prop="deviceNo" label="设备编号" />
      <el-table-column prop="amount" label="金额" />
      <el-table-column prop="createdTime" label="创建时间" />
      <el-table-column prop="isPaid" label="支付状态">
        <template v-slot="{ row }">
          <span>
            {{ row.isPaid ? '已支付' : '未支付' }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="paidAmount" label="支付金额" />
      <el-table-column prop="paidTime" label="支付时间" />
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <!-- v-permission="['OperatorsPurchasesOrderCreate']" -->
          <el-button
            class="operate-item"
            type="primary"
            @click="checkData(scope)"
          >
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
const dataReturn = {
  // dataReturn 用于返回 data 页面数据双向绑定
  tableData,
  loading,
}

const method = (_this) => {
  // 查看按钮
  _this.checkData = ({ row }) => {
    rowId.value = row.id
    checkShow.value = true // 查看弹窗显示
  }
}

export default {
  name: 'Table',
  components: {},
  data() {
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
