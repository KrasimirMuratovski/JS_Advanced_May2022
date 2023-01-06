function someFunction(arr){
    arr.sort(((a, b) => a.localeCompare(b)))
    console.log((arr.sort((a, b) => a.length-b.length)).join('\n'))
}

someFunction(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']

)