function isLeap(year) { 
    if(year%4==0)
    {
        console.log("Leap year.");
    }
    else if(year%100!=0 && year%400==0)
    {
        
        console.log("Leap year.");
    }
    else
    {
        
        console.log("Not leap year.")
    }
}
year(2400);