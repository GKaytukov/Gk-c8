// let's create a multiplication table!

/* 
1   2   3   4   5   6   7   8   9  10
2   4   6 ....
.
.
.
10  20  30  40  50  60  70  80  90  100
*/

// Let's First Do One Row: 
for (let i = 1; i <=10; i++) {
    let row = '';
for(let j = 1; j <= 10; j++) {
    row += '  ' + (i * j)

}
console.log(row)
}

// // Step 1: loop i 1-10
// for(let i = 1; i <= 10; i++) {
//     // Step 2: loop j 1-10 inside i 
//     let wholeRow = ''; 
//     for (let j = 1; j <=10; j++) {
//         // Step 3: output i * j
//         console.log(i*j)
//     }
// // Step 4: put each row together
// console.log(wholeRow)
// }




 