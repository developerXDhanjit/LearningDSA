/* Why to  learn Big O notation? 

To determine , which is the best way to solve a problem ? 

Numeric representaion 

Lowest Resource and highest performance ! 

Knowing what is slowing the performance of code down 

and Interviews

*/



/* Method 1  */

/* function SumUpto(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}
 */



/* Method 2  */

/* function SumUpto(n) {
    return (n * (n + 1)) / 2
} */

// console.log(SumUpto(n));

/* Which is better ? 

- Fast ?
- Less Memory-intensive ? 
{Important are the first 2 s }

- More readable ?

*/

/* Cheking the speed of two funcns */
/* 
let t1 = performance.now()

SumUpto(1000000000)

let t2 = performance.now()

console.log(`Time elapsed : ${(t2 - t1) / 1000} secs`);


Found actually 2nd method was better 

*/


/* The problem with time ? 

found different machines will record different times 
same machines also record different times 

speed measurements might not be precise 

then what ? to use to measure 
*/

/* Counting operations 

no of operations will be same 

In method 2 :- there were 3 operations 
whereas In method 1 :- there were tons of them , n operations .... 

Graph , wow

Focus on the big picture

*/


/* Officially about BigO notation

It talks about how the runtime of an algorithm grows as the inputs grows

def : We say that an algorithm O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n) , as n increases 




*/