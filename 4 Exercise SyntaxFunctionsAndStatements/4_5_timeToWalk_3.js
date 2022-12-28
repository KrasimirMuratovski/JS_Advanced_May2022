function print(steps, LengthMiter, kmPerHour) {
    let totalL = steps * LengthMiter;
    let admin = Math.floor(totalL/500);
    let timeHours = (totalL / 1000) / (kmPerHour);
    timeHours += admin / 60;
    let minutes = Math.floor(timeHours*60);
    let seconds = (timeHours*60%1*60).toFixed(0);
    console.log(`${String(Math.floor(timeHours)).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);

};

print(4000, 0.60, 5)