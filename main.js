function sumArr(arr) {
    return arr.reduce((accumulator, element) => accumulator + element, 0)
}
// take an array of numbers and return the average
function avgArr(arr) {
    return arr.reduce((accumulator, element) => accumulator + element, 0) / arr.length;
}

// const avg = avgArr([1, 2, 3, 4, 5]);

// console.log(avg);

// 