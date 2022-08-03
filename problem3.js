var num1 = 44;
var num2 = 99;
var num3 = 110;

if(num1 > num2){
    if(num1 > num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else{
    if(num2 > num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}
// if( num2 > num1 && num2 > num3){
//     console.log("Num2 is the largest number");
// }
// else{
//     console.log("Num2 is not the largest number");
// }


var side1 = 5;
var side2 = 4;
var side3 = 5;

if(side1 == side2 && side2 == side3 && side1 == side3){
    console.group("It is an Equilateral triange");
}
else if(side1 == side2 || side2 == side3 || side1 == side3){
    console.log("It is an isosceles triange");
}
else{
    console.log("Not an isosceles triange");
}