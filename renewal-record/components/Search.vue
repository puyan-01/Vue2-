<template>
  <div class="flex mb">
    <el-date-picker type="daterange"
                    v-model="searchTimeOptions.value"
                    range-separator="至"
                    start-placeholder="起始日期"
                    end-placeholder="结束日期" />
    <div class="ml">
      <el-input placeholder="关键字"
                v-model="keyWord.value"
                class="filter-item w200" />
      <el-button class="filter-item"
                 type="primary"
                 @click="search"
                 icon="el-icon-search">
        搜索
      </el-button>
      {{ keyWord.value }}
    </div>

  </div>
</template>

<script>
import { keyWord, searchTimeOptions } from '../use/data'
import { search } from '../use/method'
let _this
const dataReturn = { // dataReturn 用于返回 data 页面数据双向绑定
  keyWord, // 关键字
  searchTimeOptions // 搜索时间
}

const method = (_this) => {

  _this.search = () => search()

}

export default {
  name: '',
  components: {},
  mixins: [],
  props: {},
  data () {

    _this = this
    method(_this)
    return dataReturn

  },
  computed: {},
}
</script>
<style lang="scss" scoped></style>
