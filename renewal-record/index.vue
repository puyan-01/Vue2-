<template>
  <div class="app-container order_manage">

    <Search />
    <Table />
    <Pagination />
  </div>
</template>

<script>
import Pagination from './components/Pagination.vue'
import Search from './components/Search.vue'
import Table from './components/Table.vue'

export default {
  components: { Search, Table, Pagination },
  data () {

    return {
      searchTimeOptions: {},
    }

  },
  created () { },
  methods: {},
}
</script>
<style lang="scss">
</style>
