/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var num = 60;
while(num>=0) {
    if(num===50) {
        console.log("Orbiter transfers from ground to internal power"); num-=1;
    }
    if(num===31) {
        console.log("Ground launch sequencer is go for auto sequence start"); num-=1;
    }
    if(num===16) {
        console.log("Activate launch pad sound suppression system"); num-=1;
    }
    if(num===10) {
        console.log("Activate main engine hydrogen burnoff system"); num-=1;
    }    
    if(num===6) {
        console.log("Main engine start"); num-=1;
    }
    if(num===0) {
        console.log("Solid rocket booster ignition and liftoff!"); num-=1;
    } 
    else { 
        console.log("T-" +num+ " seconds"); num-=1; 
    }
}
   