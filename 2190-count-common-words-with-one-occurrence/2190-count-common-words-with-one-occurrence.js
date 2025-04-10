/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let count=0
    let word1 = words1.filter((num)=>words1.indexOf(num)==words1.lastIndexOf(num))
    let word2 = words2.filter((num)=>words2.indexOf(num)==words2.lastIndexOf(num))
    for(let i=0;i<word1.length;i++){
        if(word2.includes(word1[i])){
            count++
        }
    }
    return count
};