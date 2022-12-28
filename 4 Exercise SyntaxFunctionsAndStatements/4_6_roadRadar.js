function roadRadar(speed, place) {
    let motorway = 130
    let interstate = 90
    let city = 50
    let residential = 20
    let speed_limit
    let over_speed
    let status

    switch(place) {
            case 'motorway':speed_limit = 130; break;
            case 'interstate':speed_limit = 90; break;
            case 'city':speed_limit = 50; break;
            case 'residential':speed_limit = 20; break;

        }

    //
    // if (place === 'motorway') {
    //     speed_limit = 130
    // } else if (place === 'interstate') {
    //     speed_limit = 90
    // } else if (place === 'city') {
    //     speed_limit = 50
    // } else if (place === 'residential') {
    //     speed_limit = 20
    // }

    if (speed <= speed_limit) {
        console.log(`Driving ${speed} km/h in a ${speed_limit} zone`);

    } else {
        over_speed = speed - speed_limit
        if (over_speed <= 20) {
            status = 'speeding'
        } else if (over_speed <= 40) {
            status = 'excessive speeding'
        } else {
            status = 'reckless driving'
        }

        console.log(`The speed is ${over_speed} km/h faster than the allowed speed of ${speed_limit} - ${status}`);

    }

}

roadRadar(100, 'interstate')