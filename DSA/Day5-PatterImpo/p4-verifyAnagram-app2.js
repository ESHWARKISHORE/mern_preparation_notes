var isAnagram = function (s, t) {
    if (s.length == t.length) {
        let map = new Map();
        for (let i = 0; i < s.length; i++) {
            map.set(s[i], (map.get(s[i]) || 0) + 1);
            map.set(t[i], (map.get(t[i]) || 0) - 1);
        }
        for (let val of map.values()) {
            if (val !== 0) return false;
        }
        return true;
    }
    else {
        return false;
    }
};


console.log(isAnagram("anagram", "nagaram"))