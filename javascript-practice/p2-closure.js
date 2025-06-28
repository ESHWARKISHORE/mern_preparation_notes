function counter() {
    let count = 0; // This variable belongs to the outer function 'counter'

    return function innerFunction() {
        // Here we are returning an inner function (closure)
        count++; // The inner function accesses its parent's variable 'count'
        console.log(count);
    };
}

// Here, getCounter gets assigned the inner function returned by 'counter'
const getCounter = counter();

// Each time we call getCounter(), it increments 'count' which is still remembered
getCounter(); // 1 — Closure: 'count' is remembered even though 'counter' has finished
getCounter(); // 2 — Same 'count' is incremented again