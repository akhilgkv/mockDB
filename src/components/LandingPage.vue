<template>
  <div class="container">
    <b-container fluid>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-row class="mt-2">
          <b-col sm="2">
            <label for="textarea-large">Enter Query:</label>
          </b-col>
          <b-col sm="10">
            <b-form-textarea
              id="textarea-large"
              rows="6"
              size="lg"
              placeholder="Please write query..."
            ></b-form-textarea>
          </b-col>
        </b-row>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-container>
    <query-table :table-data="tableData" v-if="hasData"></query-table>
  </div>
</template>

<script>
import QueryTable from '@/components/QueryTable'
import DatabaseServices from '@/services/DatabaseServices'
export default {
  name: 'LandingPage',
  components: {
    QueryTable,
  },
  data() {
    return {
      range: 0,
      tableData: [],
    }
  },
  mounted() {
    
  },
  computed: {
    hasData() {
      return this.tableData.length > 0
    },
  },
  methods: {
    async onSubmit(e) {
      this.tableData = []
      e.preventDefault()
      await this.buildTableData()
    },
    async buildTableData () {
      const response = await DatabaseServices.fetchQueryData('customers.csv')
      const lines = response.data.split('\n')
      const header = lines[0].split(',')
      const output = lines.slice(1).map((line) => {
        const fields = line.split(',')
        return Object.fromEntries(header.map((h, i) => [h, fields[i]]))
      })
      let count = 0
      let itemArray = []
      const queryData = []
      for (let i = 0; i < output.length; i++) {
        let item = output[i]
        itemArray.push(item)
        if (i === output.length - 1) {
          queryData.push(itemArray)
        }
        count++
        if (count % 15 === 0) {
          queryData.push(itemArray)
          itemArray = []
        }
      }
      let index = Math.floor(Math.random() * ((queryData.length - 1) - 0 + 1) + 0)
      this.tableData = [...queryData[index]]
    },
    onReset() {
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.btn {
  margin-top: 10px;
}
.btn-primary {
  margin-right: 5px;
}
a {
  color: #42b983;
}
</style>
