class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pref = [];
        let suff = [];
        let res = [];
        let n = nums.length;
        pref[0] = 1;
        suff[n - 1] = 1;
        for (let i = 1; i < n; i++) {
            pref[i] = pref[i - 1] * nums[i - 1];
        }
        for (let i = n - 2; i >= 0; i--) {
            suff[i] = suff[i + 1] * nums[i + 1]
        }
        for (let i = 0; i < n; i++) {
            res[i] = pref[i] * suff[i];
        }
        console.log(pref);
        console.log(suff)
        console.log(res)
        return res;

    }
}
