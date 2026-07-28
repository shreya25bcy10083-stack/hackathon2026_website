console.log("JavaScript connected!");


//dark mode button

const darkBtn = document.getElementById("darkBtn");

if (darkBtn) {

    darkBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

    });

}


//countdown timer
const daysBox = document.getElementById("days");
const hoursBox = document.getElementById("hours");
const minutesBox = document.getElementById("minutes");
const secondsBox = document.getElementById("seconds");


if(daysBox && hoursBox && minutesBox && secondsBox){

    const countdownDate = new Date("December 31, 2026 09:00:00").getTime();


    const countdown = setInterval(function(){

        const now = new Date().getTime();

        const distance = countdownDate - now;


        if(distance < 0){

            clearInterval(countdown);

            daysBox.innerHTML = "00";
            hoursBox.innerHTML = "00";
            minutesBox.innerHTML = "00";
            secondsBox.innerHTML = "00";

            return;

        }


        const days = Math.floor(
            distance/(1000*60*60*24)
        );


        const hours = Math.floor(
            (distance%(1000*60*60*24))/
            (1000*60*60)
        );


        const minutes = Math.floor(
            (distance%(1000*60*60))/
            (1000*60)
        );


        const seconds = Math.floor(
            (distance%(1000*60))/
            1000
        );


        daysBox.innerHTML = String(days).padStart(2,'0');
        hoursBox.innerHTML = String(hours).padStart(2,'0');
        minutesBox.innerHTML = String(minutes).padStart(2,'0');
        secondsBox.innerHTML = String(seconds).padStart(2,'0');


    },1000);

}


//registration form

const form = document.getElementById("form");


if (form) {

    form.addEventListener("submit", function(event){

        event.preventDefault();


        alert("Registration Successful!");


        form.reset();

    });

}