import axios from 'axios'

// const BASE_URI = 'https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv'
const BASE_URI = 'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/'
export default  {

async fetchQueryData (url) {
  return axios.get(`${BASE_URI}/${url}`)
}

}