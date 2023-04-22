const lodash = require('lodash')
//import lodash from "lodash";
const { get } = require('lodash') //old synthax
//import { get } from "lodash";	//new synthax

const a = 3,
  b = 4

const obj = {
  name: 'Joe',
}

const result = lodash.get(obj, 'lastName', 'This user doesn`t have a name')

console.log('Hello,', result)
