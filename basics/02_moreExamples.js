/* Count Up and down  */

function countUpDown(n) {
  console.log("Going up now !");
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  console.log("At the top , going down now ...");

  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Came back down");
}

// countUpDown(7)

/* Print all pairs  */

/* function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
} */

// O(f(n^2)) , quatratic Parabolic graph , exponential runtime
// printAllPairs(10);

/*
 logAtLeast(5n)
 */

function logAtLeast5(n ) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

function logAtMax5(n) {
  for(let i = 1 ; i <= Math.min(5,n) ; i++){
    console.log(i);
  }
  
}

// logAtLeast5(3)
// logAtLeast5(9)

/* if n grows with time , complexity increases  */

/* logAtMax5(3)
logAtMax5(9)
 */
/* same complexity O(1) */



/* Examples to understand space complexity  */

function sumArr(arr){
  let total = 0  ;
  for (let i = 0 ; i < arr.length ; i++) {
   total += arr[i]
  }
  return total
}
let arr = ["Movies" , "Animes" , "Web Series"]
console.log(sumArr(arr));

/* space complexity here is O(1) */


/* double array  */

function dblArr(arr) {
  let newArr = []

  for(let i = 0 ; i<= arr.length -1 ; i++){
    newArr.push( 2 * arr[i])
  }

  return newArr
  
}

let someArr = [1,2,4,6]

console.log(dblArr(someArr))

/* space complexity is O(n) here */