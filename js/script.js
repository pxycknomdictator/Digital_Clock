const hours = document.querySelector("#hour")
const minutes = document.querySelector("#minute")
const seconds = document.querySelector("#second")


const startwatch = () => {

    setInterval(() => {
        // Getting Hours
        const datehours = new Date();;
        let hourData = datehours.getHours();
        hours.innerText = hourData;

        // Getting Minutes
        const dataminutes = new Date();;
        let minuteData = dataminutes.getMinutes();
        minutes.innerText = minuteData;

        // Getting Seconds
        const dateSecond = new Date();;
        let secondData = dateSecond.getSeconds();

        if (secondData < 10) {
            seconds.innerText = `0${secondData}`;
        } else {
            seconds.innerText = `${secondData}`;
        }

        
    }, 1000)

}


startwatch()