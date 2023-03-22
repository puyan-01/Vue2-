const ref = (value) => {

	const proxy = new Proxy(
		{
			value,
		},
		{
			get (data, key) {

				return Reflect.get(...arguments)

			},
			set (data, key, val) {

				return Reflect.set(...arguments)

			},
		})
	return proxy

}

const tableData = ref([]) // 表格数据
const total = ref(50) // 总条数
const currentPage = ref(1) // 当前页

const keyWord = ref('默认值') // 搜索关键字

export {
	ref,
	tableData,
	currentPage,
	keyWord,
	total,
}
