/**
 * Simeon Smith
 * 6/16/2015
 * Analyze Duel #3
 */

/*******VARIABLES*******/
var players = [
        {             //Player 1 Object
            name:'Bug Face',                                //Player 1 Name
            health: 100,                                    //Player 1 Health
            damage: 20,                                     //Player 1 Damage
            healthDis: document.querySelector('#kabal p')   //Player 1 Health Display
        },
        {             //Player 2 Object
            name:'Scar Fist',                               //Player 2 Name
            health: 100,                                    //Player 2 Health
            damage: 20,                                     //Player 2 Damage
            healthDis: document.querySelector('#kratos p')  //Player 2 Health Display
        }
    ],
    round = 1,                                                      //ROUND NUMBER SETUP
    gameOver = false,                                               //Game Over set to false
    fightBtn = document.querySelector('#fight_btn a.buttonblue');   //Fight Button

/*******FUNCTIONS*******/
/*Fight Function*/
function fight(max){                   //Fight calculations function
    var min,                                                //Setup local minimum var
        dmg;                                                //Setup local damage var.

    min = max * .5;                                         //Calculates  the minimum damage.
    dmg = Math.floor(Math.random() * (max - min)) + min;    //Calculate a random number with the max and min from the arguments
    return dmg;                                             //Return the damage value.
}

/*Winner Check Function*/
function winnerCheck(p1Health, p2Health, round){       //Check winner function
    if(p1Health <=0 && p2Health <=0){                       //If both players health is 0 or below execute
        return "You Both Die!";                                 //Return "You Both Die!"
    }else if(p1Health <=0){                                 //If Player 1's health is 0 or below execute
        return players[1].name + " Wins!";                               //Return "P2Name Wins!"
    }else if(p2Health <=0) {                                //If Player 2's health is 0 or below execute
        return players[0].name + " Wins!";                               //Return "P1Name Wins!"
    }else if(round === 10){                                   //If round is greater than 10 execute
        if (p1Health > p2Health){                               //If Player 1's health is greater than Player 2's execute.
            return players[0].name + " Wins!";                               //Return "P1Name Wins!"
        }else if (p2Health > p1Health){                         //If Player 2's health is greater than Player 1's execute
            return players[1].name + " Wins!";                               //Return "P2Name Wins!"
        }else{                                                  //Else execute
            return "You Tied!";                                     //Return "You Tied!"
        }
    }else{                                                  //Else execute
        return false;                                       //Return false
    }
}

/*Display Current Health Function*/
function currentHealth(){
    for (i = 0, j = players.length; i < j; i++) {           //For each item in players array execute the following.
        players[i].healthDis.innerHTML = players[i].name + ': ' + players[i].health;     //Set the innerHTML of the score p element to the players health.
    }
    return false;
}

/*Fight Button Clicked Function*/
function fightClicked(e){           //Setup Function Name
    var roundDis = document.getElementById('round'),    //Local var for round display object
        scoresDis = document.getElementById('scores');  //Local var for scores div

    players[0].health -= fight(players[1].damage); //Subtract the number generated by the fight function from Player 1's health based on the Player 2's max damage
    players[1].health -= fight(players[0].damage); //Subtract the number generated by the fight function from Player 2's health based on the Player 1's max damage

    gameOver = winnerCheck(players[0].health, players[1].health, round);  //Set the value of the winnerCheck function to gameOver based on the arguments

    if (!gameOver) {      //If game over is false execute.
        currentHealth();    //Run current health function to udpate the health

        roundDis.innerHTML = 'ROUND ' + round + ' Complete';    //Change the round display area to display the round completed.

        round++;                //Add 1 to round.
    } else {              //Else execute

        roundDis.innerHTML = 'ROUND ' + round + ' Complete';    //Change the round display area to display the round completed.
        scoresDis.innerHTML = '<p>'+ gameOver + '</p>' + '<div class="clear"></div>';   //Display the game over message from the winnerCheck function.

        fightBtn.removeEventListener('click', fightClicked);    //Remove the event listener from the fight clicked button to prevent erroneous feedback.
    }

    e.preventDefault();     //Prevent standard click function.
    return false;           //Return functtion as false.
}




/*******MAIN CODE*******/

currentHealth();    //Run currentHealth function to setup health.

fightBtn.addEventListener('click', fightClicked);   //Add event listener so that when the fight button is clicked the fightClicked function runs.