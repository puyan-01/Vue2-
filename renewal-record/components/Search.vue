<template>
  <div class="flex mb">
    <el-date-picker type="daterange"
                    range-separator="至"
                    :start-placeholder="'起始时间'"
                    :end-placeholder="'结束时间'" />
    <div class="ml">
      <el-input placeholder="关键字"
                v-model="keyWord.value"
                class="filter-item w200" />
      <el-button class="filter-item"
                 type="primary"
                 icon="el-icon-search">
        搜索
      </el-button>
      {{ keyWord.value }}
    </div>

  </div>
</template>

<script>
import { keyWord } from '../use/data'
let _this
const dataReturn = { // dataReturn 用于返回 data 页面数据双向绑定
  keyWord
}

const method = (_this) => {

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
