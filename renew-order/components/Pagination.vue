<template>
  <div class="bottom-pagination">
    <div>
      <el-pagination
        background
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize.value"
        :hide-on-single-page="false"
        @size-change="handleSizeChange"
        :current-page.sync="currentPage.value"
        :total="total.value"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
  </div>
</template>
<script>
import { total, currentPage, pageSize, clearAllList } from '../use/data'
let _this

// dataReturn 用于返回 data 页面数据双向绑定
const dataReturn = {
  total, // 总条数
  currentPage, // 当前页数
  pageSize, // 每页条数
}

const method = (_this) => {
  // 修改每页条数
  _this.handleSizeChange = (val) => {
    currentPage.value = 1
    pageSize.value = val
    console.log(`每页 ${pageSize.value} 条`)
  }
}

export default {
  name: 'Pagination',
  data() {
    _this = this
    method(_this)

    return dataReturn
  },
}
</script>
<style lang="scss" scoped>
.bottom-pagination {
  position: fixed;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-left: 150px;
  padding-right: 150px;

  background-color: #ffffff;
  box-shadow: 0px 0px 20px 1px #e4e6eb;
  z-index: 9;
  border-radius: 50px 50px;

  transition: width 1s, all 1s;
}
.bottom-pagination:hover {
  box-shadow: 0px 0px 10px 0px #6f757b9d;
}
</style>
