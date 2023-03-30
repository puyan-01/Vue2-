<template>
  <div class="app-container order_manage">

    <Search />
    <Table />
    <Pagination />
    <Check />
  </div>
</template>

<script>
import Check from './components/Check.vue'
import Pagination from './components/Pagination.vue'
import Search from './components/Search.vue'
import Table from './components/Table.vue'

export default {
  components: { Search, Table, Pagination, Check },
}
</script>
<style lang="scss">
</style>
