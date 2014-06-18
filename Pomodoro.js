
/* Author: Luigi Vincent AKA Javaliant
Simple timer application (pomodoro style)
Inspired by my friend Kyle AKA ScarySpriteNiceMonster
*/ 
var name = prompt("What is your name?");

var theDate = new Date();
var theHour = theDate.getHours();

function greet(name){ return theHour < 12 ? "Good Morning, " : (theHour < 18 ? "Good Afternoon, ": "Good Evening, ") + name + "."; }

console.log(greet(name) +"\nThis is a timer application simply leave the tab open before productivity.");

var minute = 1;
var pomodoroCount = 0;
function timer(min){
    return 60000 * min;
}

function print() {
    if (minute === 25 && pomodoroCount % 3 === 0){
        alert("Great job! " + name + ".\nEnjoy a well deserved 15 minute break.");
        minute = -15;
    }
    if (minute == 25) {
        pomodoroCount++;
        alert("Take 5 " + name + "!\nCurrrent Pomodoro count is " + pomodoroCount + "."); 
        minute = -5;
    }
    if (minute === 0){ alert("Break over!"); }
    if (minute < -1){ console.log(Math.abs(minute) + " minutes left of break...");}
    else if (minute === -1){ console.log(Math.abs(minute) + " minute left of break..."); }
    else if (minute === 1){ console.log(minute + " minute has passed"); }
    else console.log( minute + " minutes have passed...");
    // increments the minute variable by 5 each time the function is called
    minute ++;
}

// Calls the print method every minute 
window.setInterval(print, timer(1));
