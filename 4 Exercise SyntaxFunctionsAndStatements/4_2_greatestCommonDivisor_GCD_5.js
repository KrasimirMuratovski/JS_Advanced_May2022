function greatestDevisor(a, b) {
    while (a !== b) {
        a > b ? a -= b : b -= a
    }
    console.log(a)
}

greatestDevisor(2154, 458)