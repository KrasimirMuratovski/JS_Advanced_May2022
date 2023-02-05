function solve(input, condition) {
    let employees = JSON.parse(input)
    // let result = ''
    let [key, value] = condition.split('-')
    let counter = 0
    // console.log(criteria)
    if (key === 'all') {
        for (let empl of employees) {
            console.log(`${counter}. ${empl['first_name']} ${empl['last_name']} - ${empl['email']}`)
            counter++
        }
    } else {
        for (let empl of employees) {
            if (empl[key] === value) {
                console.log(`${counter}. ${empl['first_name']} ${empl['last_name']} - ${empl['email']}`)
                counter++
            }
        }
    }
}

solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'

)
