/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let count = 0;
        let curr = head;
        while (curr) {
            count++;
            curr = curr.next;
        }
        let target = count - n;
        if(target===0){
            return head.next;
        }
        curr = head;
        let N = 1;
        while (curr) {
            if (N == target) {
                curr.next = curr.next.next;
                break
            } else {
                curr = curr.next;
            }
            N++;
        }
        return head;
    }
}
