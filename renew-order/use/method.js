import {
  tableData,
  currentPage,
  keyWord,
  searchTimeOptions,
  loading,
  rowId,
  total,
  pageSize,
  isPaid,
} from './data'
import { getRenewalRecordApi } from '@/api/operator/renewOrder.js'

// 调用接口获取数据
const search = async () => {
  loading.value = true

  const skipCount = pageSize.value * (currentPage.value - 1)
  const maxResultCount = pageSize.value

  const params = {
    maxResultCount, // 每页条数
    skipCount: skipCount, // 跳过条数

    keyWord: keyWord.value, // 搜索关键字
    isPaid: isPaid.value, // 是否支付
  }

  const { items, totalCount } = await getRenewalRecordApi(params)

  console.log(`调用接口 ====>`, items)

  tableData.value = items // 表格数据
  total.value = totalCount // 总条数

  loading.value = false
}

// 获取单个数据
const getSingleData = () => {
  const data = {
    id: rowId.value,
  }
}

export { search, getSingleData }
