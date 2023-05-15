const userAdultAge = 18;
const costByKm = (0.21 )
const numberOfKm = prompt("Quanti Kilometri vorrebbe percorrere?");
const travelCost = (numberOfKm * (0.21 )) ;
const passengerAge = parseInt(prompt("Quanti Anni ha?"));
let result;

if(passengerAge < 18) {
    result = travelCost - ((20/100) * travelCost ).toFixed(2) ;
} else if(passengerAge > 65) {
    result = travelCost - ((40/100) * travelCost ) .toFixed(2) ;
} else {
    result = travelCost .toFixed(2);
}

console.log(result );
document.getElementById("TiketAmount"). innerHTML = result + " euro" ;



