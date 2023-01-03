// function someFunction(input) {
//     let result = ''
//     for (let i = 0; i < input.length; i++) {
//
//         if (i % 2 == 0) {
//             result += input[i]
//             result += ' '
//         }
//
//     }
//     console.log(result);
// }
function someFunction(input) {
    let result = ''
    for (let i = 0; i < input.length; i += 2) {
        result += input[i] + ' '
    }
    console.log(result);
}

someFunction(['20', '30', '40', '50', '60'])