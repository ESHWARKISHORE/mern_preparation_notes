function flattenArray(arr) {
    let result = [];
    arr.forEach(element => {
        if(Array.isArray(element)){
            result = result.concat(flattenArray(element))
        }
        else{
            result.push(element)
        }
    })
    return result
}

console.log(flattenArray([1,2,3,[4,{data:[1,2,3,4]},[6,7,8],[9,10],{}],12,'abcd',14]))