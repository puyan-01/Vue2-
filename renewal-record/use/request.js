import { tableData, currentPage, keyWord } from "./data"

// 调用接口获取数据
const search = () => {

	const data = {
		page: currentPage.value,
		keword: keyWord.value,
	}
	tableData.value = [
		{
			date: '2016-05-02',
			name: '张麻子',
			address: '上海市普陀区金沙江路 1518 弄',
		},
	]

}

export {
	search
}
