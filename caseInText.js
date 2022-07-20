var namee = prompt("Type ur firstname");
var firstChar = (namee.slice(0,1).toUpperCase());
var restChar = (namee.toLowerCase().slice(1,8));
alert(firstChar+restChar);