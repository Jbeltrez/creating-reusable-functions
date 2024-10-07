function sumArr(arr) {
    return arr.reduce((accumulator, element) => accumulator + element, 0)
}
// take an array of numbers and return the average
function avgArr(arr) {
    return arr.reduce((accumulator, element) => accumulator + element, 0) / arr.length;
}

// const avg = avgArr([1, 2, 3, 4, 5]);

// console.log(avg);
// take an array of strings and return the longest string
function findLongest(arr) {
    return arr.reduce((accumulator, element) => {
        if (element.length > accumulator.length) {
            // console.log(element)
            return element
            
        } else {
            // console.log(accumulator)
             return accumulator
        }
    }, "");
}


const strs = ['one', 'two', 'three', 'four'];
console.log(findLongest(strs)) 

// console.log(str)