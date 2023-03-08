
let secondsLeft = 10

function minFunktion() {
    if (secondsLeft > 0) {
        secondsLeft--
        document.querySelector('h1').innerText = secondsLeft
        setTimeout(minFunktion, 1000)
    } else {
        document.querySelector('body').style.background = "red"
        document.querySelector('h1').innerText = "Hej på dig!"
    }
}

setTimeout(minFunktion, 1000);