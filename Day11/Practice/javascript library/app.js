// import _ from 'lodash';



const customers = ['max', 'Manuel', 'anna']

const activeCustomers = ['max', 'Manuel']

const inactiveCustomers = _.difference(customers,activeCustomers)

console.log(inactiveCustomers)

