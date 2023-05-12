const userAdultAge = 18;
const costByKm = (0.21 )
const numberOfKm = prompt("Quanti  vorrebbe percorrere?");
const travelCost = (numberOfKm * (0.21 )) ;
const passengerAge = parseInt(prompt("Quanti Anni ha?"));
let result;

if(passengerAge < 18) {
    result = travelCost - ((20/100) * travelCost ) ;
} else if(passengerAge > 65) {
    result = travelCost - ((40/100) * travelCost ) ;
} else {
    result = travelCost ;
}

let rounded = Math.round((result + Number.EPSILON) * 100) / 100;
console.log(rounded);

document.getElementById("TiketAmount"). innerHTML = rounded;



