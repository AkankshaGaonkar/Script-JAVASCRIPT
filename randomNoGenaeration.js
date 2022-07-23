var n = Math.random();
n = n*6;
n = Math.floor(n)+1;
console.log(n);


prompt("Type the 1st person name");
prompt("Type the 2nd person name");
var lovescore = Math.random()*100;
lovescore = Math.floor(lovescore)+1;
if(lovescore>70)
{
    alert("Congragulations u bond is strong and the % is  "+lovescore)
}
else{
    alert("Your love % is "+lovescore);
}

