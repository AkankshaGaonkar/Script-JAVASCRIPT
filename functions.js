function main(){
    //your code here
    movement();
    
 }
 
 function movement()
 {
    move();
    move();
    move();
    move();
    turnLeft();
    move();
    move();
    move();
    move();
 }

 //for digonal movement of karel
 function main(){
    //your code here
    putBeeper();
    movement();
    movement();
    movement();
    movement();
 }
 
 function movement()
 {
    
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
 }
 
 