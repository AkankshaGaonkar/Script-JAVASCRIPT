var a = 1;
var b = "1";
typeof(a);//number
typeof(b);//string
if(a==b)
{
    console.log("yes");
}
else{
    console.log("No");
}//yes
if(a===b)
{
    console.log("yes");
}
else{
    console.log("No");
}//no bec it checks both data type and values