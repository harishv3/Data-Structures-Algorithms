/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    let len = mountainArr.length(),l=0,r=len,peekIndex=0;
    let mid;
    while(l<r){
        mid=Math.floor((l+r)/2);
        if(mountainArr.get(mid)<mountainArr.get(mid+1)){
            l=mid+1;
            peekIndex=mid+1;
        } else {
            r=mid;
        }
    }
    l=0,r=peekIndex-1;
    while(l<=r){
        mid=Math.floor((l+r)/2);
        if(mountainArr.get(mid)==target){
            return mid;
        } else if(mountainArr.get(mid)<target){
            l=mid+1;
        } else {
            r=mid-1;
        }
    }
    l=peekIndex,r=len-1;
    while(l<=r){
        mid=Math.floor((l+r)/2);
        if(mountainArr.get(mid)==target){
            return mid;
        } else if(mountainArr.get(mid)>target){
            l=mid+1;
        } else {
            r=mid-1;
        }
    }
    return -1;
};