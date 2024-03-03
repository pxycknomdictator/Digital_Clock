const hours = document.querySelector("#hour")
const minutes = document.querySelector("#minute")
const seconds = document.querySelector("#second")
const ampm = document.querySelector("#ampm")


const timingFunction = (data, display) => {
    (data < 10) ? display.innerText = `0${data}` : display.innerText = `${data}`
}

const hourtimingFunction = (data, display) => {
    if (data > 12) {
        display.innerText = `0${data - 12}`
    } else if (data < 10) {
        display.innerText = `0${data}`
    } else {
        display.innerText = `${data}`
    }

}

const checking = (data) => {
    (data < 12) ? ampm.innerText = "AM" : ampm.innerText = "PM"
}

const startwatch = () => {

    setInterval(() => {

        // Getting Hours
        const datehours = new Date();
        let hourData = datehours.getHours();
        hourtimingFunction(hourData, hours)

        // Getting Minutes
        const dataminutes = new Date();
        let minuteData = dataminutes.getMinutes();
        timingFunction(minuteData, minutes)

        // Getting Seconds
        const dateSecond = new Date();
        let secondData = dateSecond.getSeconds();
        timingFunction(secondData, seconds)

        checking(hourData)

    }, 1000)

}


startwatch()