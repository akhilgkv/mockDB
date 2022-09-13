<template>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: 'QueryTable',
  props: {
    tableData: {
      required: false
    }
  },
  computed: {
    items () {
      return this.tableData
    }
  },
  data() {
    return {
    }
  }
}
</script>