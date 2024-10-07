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

function longestStringArr(arr) {

}


const strs = ['one', 'two', 'three', 'four'];
console.log(findLongest(strs)) 

// console.log(str)
// take an array of strings, and a number and return an array of the strings that are 
// longer than the given number

function stringsLongerThan(arr, num) {
    return arr.filter((element => element.length> num))
}

// const strs = ['say', 'herllo', 'in', 'the', 'morning'];

// console.log(stringsLongerThan(strs, 3));
// console.log and variable assignment above is to test the function which performs exactly as intended

// Take a number, n, and print every number between 1 and n without using loops. use recursion 

function printAllNums(n) {
    function comparison(n2) {
        if (n2 > n) {
            return; 
        }
        console.log(n2)
        comparison(n2 ++)
    }

    comparison(1)
}

function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age)
 }

 function filterAgesOlderThan50(arr) {
    return arr.filter((element.age > 50))
}

function changeJonAndIncrAge(arr) {
    return arr.map(element) => 
        return {
        id: element.age
        name: element.name
        job: element.occupation
        age: element.age += 1
    };
    
}