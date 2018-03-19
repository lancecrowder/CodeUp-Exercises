"use strict";

var itemCount = prompt("How many items do you have?");
var offerExpired = confirm("Has offer expired?");
var premiumMember = confirm("Are you a Premium Member?");

var offered = (premiumMember && !offerExpired) || (!offerExpired && itemCount >= 2);


alert(offered);