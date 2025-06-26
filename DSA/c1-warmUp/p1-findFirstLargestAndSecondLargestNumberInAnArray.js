function findLargest(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    if (arr.length < 2) {
        return ("Array dont have sufficient number to perform action")
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > firstLargest) {
                secondLargest = firstLargest
                firstLargest = arr[i];
            }
            else if (arr[i] > secondLargest && firstLargest != arr[i]) {
                secondLargest = arr[i];
            }
        }
        return (`${firstLargest} ${secondLargest}`)
    }
}

let arr = [700, 1 ,2, 33, 45, 222, 453, 675, 675, 675]
const result = findLargest(arr);
console.log(result);