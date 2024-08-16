var secondHand = document.getElementById("second-hand")
var minuteHand = document.getElementById("minute-hand")
var hourHand = document.getElementById("hour-hand")


function colockTick(){
    var date = new Date();
    var seconds = date.getSeconds() / 60 
    var minutes = (seconds + date.getMinutes()) / 60
    var hours = (minutes + date.getHours()) / 12
    rotateClockHand(secondHand, seconds)
    rotateClockHand(minuteHand, minutes)
    rotateClockHand(hourHand, hours)
}
function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360)
    
}
setInterval(colockTick, 1000)