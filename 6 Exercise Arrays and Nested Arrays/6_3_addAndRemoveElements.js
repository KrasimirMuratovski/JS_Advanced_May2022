function someFunction(commands) {
    let newarr = []
    let num = 0
    for (const command of commands) {
        num++
        if (command === 'add') {
            newarr.push(num)
        } else if (command === 'remove') {
            newarr.pop()
        }

    }

    if (newarr.length === 0) {
        console.log('Empty')
    } else {
        console.log(newarr.join('\n'))
    }
}

someFunction(['add',
    'add',
    'add',
    'add']
)
// someFunction(['add',
//     'add',
//     'remove',
//     'add',
//     'add']
// )