/**
 * Simeon Smith
 * 6/9/2015
 * Analyze Duel #2
 */

/*******VARIABLES*******/
var player1 = "Bug Face",           //Player 1's Name
    player2 = "Scar Fist",          //Player 2's Name
    p1Health = 100,                 //Player 1's Health
    p2Health = 100,                 //Player 2's Health
    p1MaxDmg = 20,                  //Player 1's Max Damage
    p2MaxDmg = p1MaxDmg,            //Player 2's Max Damage = Player 1's
    round = 1,                      //ROUND NUMBER SETUP
    gameOver = false;               //Game Over set to false

/*******FUNCTIONS*******/
/*Fight Function*/
function fight(max){                   //Fight calculations function
    var min,
        dmg;

    min = max * .5;
    dmg = Math.floor(Math.random() * (max - min)) + min;    //Calculate a random number with the max and min from the arguments
    return dmg;                                                 //Return the damage value.
}

/*Winner Check Function*/
function winnerCheck(p1Health, p2Health, round){    //Check winner function
    if(p1Health <=0 && p2Health <=0){                       //If both players health is 0 or below execute
        return "You Both Die!";                                 //Return "You Both Die!"
    }else if(p1Health <=0){                                 //If Player 1's health is 0 or below execute
        return player2 + " Wins!";                               //Return "P2Name Wins!"
    }else if(p2Health <=0) {                                //If Player 2's health is 0 or below execute
        return player1 + " Wins!";                               //Return "P1Name Wins!"
    }else if(round > 10){                                   //If round is greater than 10 execute
        if (p1Health > p2Health){                               //If Player 1's health is greater than Player 2's execute.
            return player1 + " Wins!";                               //Return "P1Name Wins!"
        }else if (p2Health > p1Health){                         //If Player 2's health is greater than Player 1's execute
            return player2 + " Wins!";                               //Return "P2Name Wins!"
        }else{                                                  //Else execute
            return "You Tied!";                                     //Return "You Tied!"
        }
    }else{                                                  //Else execute
        return false;                                       //Return false
    }
}

/*INITIAL SETUP BEFORE LOOKING AT EXAMPLE*/
function whileLoop() {
    alert(player1 + ' : ' + p1Health + ' *START* ' + player2 + ' : ' + p2Health);   //Starting Alert
    while (!gameOver) {          //While gameOver is false execute

        p1Health -= fight(p2MaxDmg);     //Subtract the number generated by the fight function from Player 1's health based on the Player 2's max damage
        p2Health -= fight(p1MaxDmg);     //Subtract the number generated by the fight function from Player 2's health based on the Player 1's max damage

        gameOver = winnerCheck(p1Health, p2Health, round);  //Set the value of the winnerCheck function to gameOver based on the arguments

        if (gameOver) {           //If gameOver is true execute
            alert(gameOver);        //Alert user with the results of the fight.
        } else {                  //Else execute.
            alert(player1 + ' : ' + p1Health + ' *ROUND ' + round + ' IS OVER* ' + player2 + ' : ' + p2Health);    //Alert user with the resultes of the round.
            round++;       //Add 1 to the round.
        }

    }
}

/*Using a for loop as specified*/
function forLoop() {
    alert(player1 + ' : ' + p1Health + ' *START* ' + player2 + ' : ' + p2Health);   //Starting Alert


    for (var i = 0; i < 10; i++) {   //Set counter to count to 10
        p1Health -= fight(p2MaxDmg); //Subtract the number generated by the fight function from Player 1's health based on the Player 2's max damage
        p2Health -= fight(p1MaxDmg); //Subtract the number generated by the fight function from Player 2's health based on the Player 1's max damage

        gameOver = winnerCheck(p1Health, p2Health, round);  //Set the value of the winnerCheck function to gameOver based on the arguments

        if (!gameOver) {      //If game over is false execute.
            alert(player1 + ' : ' + p1Health + ' *ROUND ' + round + ' IS OVER* ' + player2 + ' : ' + p2Health);    //Alert user with the results of the round
            round++;                //Add 1 to round.
        } else {              //Else execute
            alert(gameOver);        //Alert user with the results of the round.
            break;                  //Break the loop
        }
    }
}

/*******MAIN CODE*******/

forLoop();  //Run the forLoop function.