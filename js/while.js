// 'use strict';
//
// var i = 2;
//
// while (i<=65536){
//     console.log(i);
//     i*=2;
// }
//
// var allCones = Math.floor(Math.random() * 50) + 50;
//
//
// do {
//     var purchased = Math.floor(Math.random() * 5) + 1;
//
//     if(purchased<allCones) {
//         console.log(purchased + " cones sold!");
//         // console.log(allCones + " Cones to go!")
//         allCones = allCones-purchased;
//     } else  if(purchased > allCones){
//         console.log("I cannot sell you "+ purchased + "Cones.  I only have "+ allCones);
//     } else  {
//         console.log("I sold them all!!");
//         break;
//     }
//
// } while (allCones > 0);
