<template>
  <div class="mb">
    <el-table :data="tableData.value"
              border
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

          <!-- 删除 -->
          <el-button v-permission="['OperatorsPurchasesOrderCreate']"
                     class="operate-item"
                     type="danger"
                     icon="el-icon-delete"
                     @click="butDelete(scope)">
            删除
          </el-button>

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { tableData } from '../use/data'
let _this
const dataReturn = { // dataReturn 用于返回 data 页面数据双向绑定
  tableData
}

tableData.value = [
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄',
  },
  {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄',
  },
]

const method = (_this) => {

  // 删除按钮
  _this.butDelete = ({ row }) => {

    console.log(`row
		 ====>`, row
    )

    tableData.value.splice(0, 1)

  }

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
