const userAdultAge = 18;
const costByKm = (0.21 )
const numberOfKm = prompt("Quanti Kilometri vorrebbe percorrere?");
const travelCost = numberOfKm * costByKm ;
const passengerAge = parseInt(prompt("Quanti Anni ha?"));
let result;


if(passengerAge < 18) {
    result = travelCost - ((20/100) * travelCost ) ;
} else if(passengerAge > 65) {
    result = travelCost - ((40/100) * travelCost ) ;
} else {
    result = travelCost ;
}

console.log(result .toFixed(2) );
document.getElementById("TiketAmount"). innerHTML = (result) . toFixed(2)+ " euro" ;



