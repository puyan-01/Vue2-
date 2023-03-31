<template>
  <div class="flex mb">
    <el-select
      v-model="isPaid.value"
      placeholder="请选择支付状态"
      class="filter-item w120"
    >
      <el-option
        v-for="item in isPaidEnum"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-date-picker
      ml
      type="daterange"
      v-model="searchTimeOptions.value"
      range-separator="至"
      start-placeholder="起始日期"
      end-placeholder="结束日期"
    />
    <div class="ml">
      <el-input
        placeholder="关键字"
        v-model="keyWord.value"
        class="filter-item w200"
      />
      <el-button
        class="filter-item"
        type="primary"
        @click="search"
        icon="el-icon-search"
      >
        搜索
      </el-button>
    </div>
  </div>
</template>

<script>
import { keyWord, searchTimeOptions, currentPage, isPaid } from '../use/data'
import { search } from '../use/method'
import { isPaidEnum } from '../use/enums'
let _this

const dataReturn = {
  // dataReturn 用于返回 data 页面数据双向绑定
  keyWord, // 关键字
  searchTimeOptions, // 搜索时间
  isPaid, // 支付状态
  isPaidEnum, // 支付状态枚举
}

const method = (_this) => {
  // 点击搜索
  _this.search = () => (currentPage.value = 1)
}

export default {
  name: '',
  components: {},
  mixins: [],
  props: {},
  data() {
    _this = this
    method(_this)

    return dataReturn
  },
  computed: {},
}
</script>
<style lang="scss" scoped></style>
