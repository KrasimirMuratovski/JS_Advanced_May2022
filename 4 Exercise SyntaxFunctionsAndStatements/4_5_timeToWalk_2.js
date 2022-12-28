function timeToWalk(steps, foot, speed){
    let distKm=steps*foot/1000 //in km 
    let timeToGo=distKm/speed*60+Math.floor(distKm/0.5)//in minutes
    let timehour=(Math.floor(timeToGo/60))

    let timemin=Math.floor(timeToGo-timehour*60)
    let timesec=Math.ceil((timeToGo-timemin-timehour*60)*60)

    console.log((timehour<10 ? "0":"")+timehour+ ":"+(timemin<10 ? "0":"")+timemin+":"+ (timesec<10 ? "0":"")+timesec);//00:32:48


}

timeToWalk(4000, 0.60, 5)