<template>
  <el-drawer
    title="我是标题"
    :visible.sync="checkShow.value"
    direction="rtl"
    :before-close="drawerClose"
  >
    <el-form label-position="right" label-width="80px" :model="formData.value">
      <el-form-item label="名称">
        <el-input v-model="formData.value.name" />
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formData.value.region" />
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="formData.value.type" />
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script>
import { checkShow } from '../use/data'
import { ref } from '../use/utils'
let _this

// 表单数据
const formData = ref({
  name: '',
  region: '',
  type: '',
})

const method = (_this) => {
  // 抽屉关闭
  _this.drawerClose = () => {
    checkShow.value = false // 查看弹窗隐藏

    console.log(`formData ====>`, formData.value)
  }
}

// dataReturn 用于返回 data 页面数据双向绑定
const dataReturn = {
  checkShow, // 查看弹窗状态
  formData,
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
<style lang="" scoped></style>
