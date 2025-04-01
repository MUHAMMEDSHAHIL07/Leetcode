/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0
    accounts.map(customer=>{
    let cstmr = customer.reduce((sum,money)=>sum+money,0)
    maxWealth=Math.max(maxWealth,cstmr)
})
   return maxWealth
};