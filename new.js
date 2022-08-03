// var myMoney = 90000;
// if(myMoney > 80000){
//     console.log("Buy Mac");
// }
// else if(myMoney > 60000){
//     console.log("Buy Gamming Laptop")
// }
// else if(myMoney > 40000){
//     console.log("Buy Lenovo Yoga Computer")
// }
// else if(myMoney > 20000){
//     console.log("Buy old Laptop")
// }
// else{
//     console.log("Ki r korba!!")
// }

// for(i=1; i < 40; i++){
//     console.log("Ajke amar mon bhalo nei");
//     console.log(i);
// }

// var num = 58;
// while(num <= 94){
//     console.log(num);
//     num++
// }

// for(i = 812; i <= 856; i += 2){
//     console.log(i);
// }


// var num = 581;
// while(num <= 623){
//     console.log(num);
//     num += 2
// }

// var learnedToday =["index", "variable", "array", "data-type", "for-loop", "while-loop"];
// for(i=0; i < learnedToday.length; i++){
//     values = learnedToday[i];
//     console.log(values);
// }
// var num = 0;
// while(num < learnedToday.length){
//     values = learnedToday[num];
//     console.log(values);
//     num++
// }

// for(i = 30; i <= 86; i++){
//     if(i == 44){
//         break;
//     }
//     console.log(i);
// }

// var booksPrice = [100, 200, 300, 250, 180, 500, 120, 30, 45, 210, 10];
// for(i=0; i<booksPrice.length; i++){
//     var bookPrice = booksPrice[i];
//     if(bookPrice >= 200){
//         continue;
//     }
//     console.log(bookPrice);
// }

var friends = ["Rahim", "Karim", "Saqibb", "Yeeeeeee", "yuuuu"];
var temp = friends[0];

for(var i = 0; i < friends.length; i++){
    var element = friends[i];
    if (element.length > temp.length){
        temp = element;
    }
}
console.log(temp);