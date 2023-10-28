/**
 * @param {number[]} cost
 * @return {number}
 */

let index=0;
var minCostClimbingStairs = function(cost) {
   const dp=[];
   dp[0]=cost[0];
   dp[1]=cost[1];
   for(let i=2;i<cost.length;i++){
       dp[i] = cost[i]+Math.min(dp[i-1],dp[i-2]);
   }
   let n=cost.length;
   return Math.min(dp[n-1],dp[n-2]);
};