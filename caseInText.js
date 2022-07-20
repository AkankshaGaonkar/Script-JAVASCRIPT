var name = prompt("Type ur firstname");
var firstChar = (name.slice(0,1).toUpperCase());
var restChar = (name.slice(1,8).toLowerCase());
alert(firstChar+restChar);