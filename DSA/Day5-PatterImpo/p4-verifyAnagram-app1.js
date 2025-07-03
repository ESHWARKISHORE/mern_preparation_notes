var isAnagram = function (s, t) {
    if (s.length === t.length) {
        const sMap = new Map()
        const tMap = new Map()
        for (let i = 0; i < s.length; i++) {
            if (sMap.has(s[i])) {
                sMap.set(s[i], sMap.get(s[i]) + 1);
            }
            else {
                sMap.set(s[i], 1)
            }
            if (tMap.has(t[i])) {
                tMap.set(t[i], tMap.get(t[i]) + 1);
            }
            else {
                tMap.set(t[i], 1)
            }
        }
        for (let [key, val] of sMap) {
            if (tMap.get(key) !== val) return false;
        }
        return true;
    }
    else return false
};

console.log(isAnagram("anagram","nagaram"))