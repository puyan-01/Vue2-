import { search } from './method'
import { ref } from './utils'

/* 
	table 表格 
*/
const loading = ref(false) // 表格加载状态
const tableData = ref([]) // 表格数据

/* 
	page 分页
*/
const total = ref(0) // 总条数
const rowId = ref() // id
const currentPage = ref(1, () => search(), 'search') // 当前页
const pageSize = ref(10) // 每页条数

/* 
	search 搜索
*/
const keyWord = ref('') // 搜索关键字
const searchTimeOptions = ref([], () => search(), 'search') // 搜索时间

const isPaid = ref('', () => search(), 'search') // 是否支付

/* 
	show 弹窗显示状态
*/

const checkShow = ref(false) // 查看弹窗状态
const formData = ref([]) // 表单数据

export {
  isPaid,
  pageSize,
  rowId,
  loading,
  tableData,
  currentPage,
  keyWord,
  total,
  searchTimeOptions,
  checkShow,
  formData,
}
