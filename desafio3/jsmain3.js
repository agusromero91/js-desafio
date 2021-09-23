
let num1;
let num2;
let num3;
let num4;
let num5;

for(i=0; i<3; i++){
    num1 = Math.floor(Math.random() * (7-1)) +1;
    num2 = Math.floor(Math.random() * (7-1)) +1;
    num3 = Math.floor(Math.random() * (7-1)) +1;
    num4 = Math.floor(Math.random() * (7-1)) +1;
    num5 = Math.floor(Math.random() * (7-1)) +1;

    console.log(num1, num2, num3, num4, num5);
    if(num1===6 || num2===6 || num3===6 || num4===6 || num5===6){
        console.log("Sumaste: " + (num1+num2+num3+num4+num5) + " puntos");
    }else{
        console.log("En este intento no sumaste puntos");
    }

} 