var groupAnagrams = function (strs) {
    let copyStrs = [...strs]
    let indexMap = new Map()
    let resultArray = []
    for (let i = 0; i < copyStrs.length; i++) {
        copyStrs[i] = [...copyStrs[i]].sort().join('')
        let resultIndex = indexMap.get(copyStrs[i]) || [];
        resultIndex.push(i)
        indexMap.set(copyStrs[i], resultIndex)
    }
    console.log(indexMap)
    for (let val of indexMap.values()) {
        console.log(val)
        let result = []
        for (let i = 0; i < val.length; i++) {
            result.push(strs[val[i]])
            console.log(result);
        }
        resultArray.push(result);
    }
    console.log(resultArray)
    return resultArray
};

var groupAnagrams = function (strs) {
    let map = new Map();

    for (let word of strs) {
        let key = word.split('').sort().join('');
        let group = map.get(key) || [];
        group.push(word);
        map.set(key, group);
    }

    return Array.from(map.values());
  };

console.log(["eat", "tea", "tan", "ate", "nat", "bat"])