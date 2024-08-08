function randomnumber() {
    let time = 3;
    const countdown = setInterval(function () {
        console.log(time, " seconds remaining : ")
        time--;

        if (time == 0) {
            clearInterval(countdown);
            var rannum = Math.round(Math.random() * 100);
            console.log("Random Number: ",rannum);
        }
    }, 1000)
}
console.log("Generating number after 3 seconds");
randomnumber()