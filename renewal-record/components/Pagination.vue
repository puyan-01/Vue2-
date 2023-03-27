<template>
  <div>
    <el-pagination :page-sizes="[10, 20, 30, 40]"
                   :page-size="10"
                   background
                   @current-change="handleCurrentChange"
                   @size-change="handleSizeChange"
                   :current-page.sync="currentPage.value"
                   :total="total.value"
                   layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </div>
</template>
<script>
import { total, currentPage } from '../use/data'
import { search } from '../use/request'
let _this
const dataReturn = { // dataReturn 用于返回 data 页面数据双向绑定
  total, // 总条数
  currentPage, // 当前页数
}

const method = (_this) => {

  // 修改每页条数
  _this.handleSizeChange = (val) => {

    total.value = 60
    console.log(`每页 ${val} 条`)
    currentPage.value = 1

  }

  // 点击页数
  _this.handleCurrentChange = () => {

    // 调用接口
    search()

  }

}

export default {
  name: 'Pagination',
  data () {

    _this = this
    method(_this)
    return dataReturn

  },
}
</script>
<style lang='' scoped>
</style>
