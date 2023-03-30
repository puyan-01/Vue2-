import { search } from "./method"
const ref = (value = null, method = () => { }) => {

	const proxy = new Proxy(
		{ value },
		{
			get (data, key) {

				return Reflect.get(data, key)

			},
			set (data, key, val) {

				data[key] = val
				method()

				return Reflect.set(data, key, val)

			},
		})
	return proxy

}
/* 
	table 表格 
*/
const loading = ref(false) // 表格加载状态
const tableData = ref([]) // 表格数据

/* 
	page 分页
*/
const total = ref(50) // 总条数
const rowId = ref() // 总条数
const currentPage = ref(1, () => search()) // 当前页

/* 
	search 搜索
*/
const keyWord = ref('默认值') // 搜索关键字
const searchTimeOptions = ref([], () => search()) // 搜索时间

/* 
	show 弹窗显示状态
*/

const checkShow = ref(false) // 查看弹窗状态
const formData = ref([]) // 表单数据

export {
	ref,
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
