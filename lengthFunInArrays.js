function whosPaying(names) 
{
    var person = names.length;
    var randomperson = Math.floor(Math.random()*person);
    var answer = names[randomperson];
    return(answer+" is going to buy lunch today!");
}