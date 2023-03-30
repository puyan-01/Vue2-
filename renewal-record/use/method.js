import {
	tableData,
	currentPage,
	keyWord,
	searchTimeOptions,
	loading,
	rowId,
} from "./data"

// 调用接口获取数据
const search = () => {

	loading.value = true

	const data = {
		page: currentPage.value,
		keword: keyWord.value,
		searchTimeOptions,
	}
	console.log(`调用接口 ====>`, data)
	// 模拟接口返回数据
	setTimeout(() => {

		tableData.value = [
			{
				id: 1,
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄',
			},
			{
				id: 2,
				date: '2016-05-04',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1517 弄',
			},
			{
				id: 3,
				date: '2016-05-01',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1519 弄',
			},
			{
				id: 4,
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1516 弄',
			},
		]
		loading.value = false

	}, 500)

}

// 获取单个数据
const getSingleData = () => {

	const data = {
		id: rowId.value,

	}

}

export {
	search,
	getSingleData,
}
