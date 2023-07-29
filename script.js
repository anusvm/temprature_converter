const celciusEl = document.getElementById("Celcius");
const fahrenheitEl = document.getElementById("Fahrenheit");
const kelvinEl = document.getElementById("Kelvin");

function computeTemp(event) {
    const currentValue = event.target.value;

    switch (event.target.name) {
        case "Celcius":
            fahrenheitEl.value = (currentValue * 9 / 5) + 32;
            kelvinEl.value = parseFloat(currentValue) + 273.15;
            document.getElementById("bd").style.backgroundImage="url(bgimg1.jpeg)"
            break;

        case "Fahrenheit":
            celciusEl.value = (currentValue - 32) * 5 / 9;
            kelvinEl.value = (currentValue - 32) * 5 / 9 + 273.15;
            document.getElementById("bd").style.backgroundImage="url(bgimg2.jpeg)"
            break;

        case "Kelvin":
            celciusEl.value = currentValue - 273.15;
            fahrenheitEl.value = (currentValue - 273.15) * 9 / 5 + 32;
            document.getElementById("bd").style.backgroundImage="url(bgimg3.jpeg)"
            break;

        default:
            break;
    }
}


// const celciusF1 = document.getElementById("Celcius1");
// const fahrenheitF1 = document.getElementById("Fahrenheit1");
// const kelvinF1 = document.getElementById("Kelvin1");

// function computeTemp(event1) {
//     const currentValue = event1.target.value;

//     switch (event1.target.name) {
//         case "Celcius":
//             document.getElementById("bd").style.backgroundImage="url(bgimg1.jpeg)"
//             break;

//         case "Fahrenheit":
//             document.getElementById("bd").style.backgroundImage="url(bgimg2.jpeg)"
//             break;

//         case "Kelvin":
//             document.getElementById("bd").style.backgroundImage="url(bgimg3.jpeg)"
//             break;

//         default:
//             break;
//     }
// }





            
        