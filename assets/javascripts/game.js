let teamOneShootButton = document.querySelector("#teamone-shoot-button"); 
let teamOneNumShots = document.querySelector("#teamone-numshots");
let teamOneGoals = document.querySelector("#teamone-numgoals"); 


let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button"); 
let teamTwoNumShots = document.querySelector("#teamtwo-numshots");
let teamTwoGoals = document.querySelector("#teamtwo-numgoals"); 

let resetButton = document.querySelector("#reset-button"); 
let resetNumPresses = document.querySelector("#num-resets");
let counter = document.querySelector("#counter"); 

let isReset = false;
//Keeps score of Team one points
teamOneShootButton.addEventListener("click", function() {
    // Any code you write in here, will run every time incrementButton
    // is clicked.
    // Run the console.log function to display some text in the console:
    isReset = false;
  let randomChance = Math.floor((Math.random() * 10) + 1);
    console.log("Team one button clicked.");
     // Calculate the new value for our counter:
  let newCounterValue = Number(teamOneNumShots.innerHTML) + 1;
  let luckyNumber = 1;
    // Calculate the new value for our counter:
    teamOneNumShots.innerHTML = newCounterValue;

    if(randomChance <= 5) 
    {         // WHAT IS THIS? Check out "IF Statements" in the Useful Resources section.
      let newGoalValue = Number(teamOneGoals.innerHTML) + 1;
      teamOneGoals.innerHTML = newGoalValue;
    }
})

//Keeps score of Team Two points
teamTwoShootButton.addEventListener("click", function() {
    // Any code you write in here, will run every time incrementButton
    // is clicked.

    isReset = false;
    let randomChance = Math.floor((Math.random() * 10) + 1);
    // Run the console.log function to display some text in the console:
    console.log("Team two button clicked.");
     // Calculate the new value for our counter:
  let newCounterValue = Number(teamTwoNumShots.innerHTML) + 1;
  let luckyNumber = 1;
    // Calculate the new value for our counter:
    teamTwoNumShots.innerHTML = newCounterValue;

    if(randomChance >= 6) 
    {        
    let newGoalValue = Number(teamTwoGoals.innerHTML) + 1;
    teamTwoGoals.innerHTML = newGoalValue;
    }
})

//Reset the scores
resetButton.addEventListener("click", function() {

    if(teamOneGoals.innerHTML > teamTwoGoals.innerHTML)
    {
        alert("Team One wins!")
    }

    if(teamTwoGoals.innerHTML > teamOneGoals.innerHTML)
    {
        alert("Team Two wins!")
    }
    teamOneNumShots.innerHTML = 0;
    teamOneGoals.innerHTML = 0;
    teamTwoNumShots.innerHTML = 0;
    teamTwoGoals.innerHTML = 0;

    let newCounterValue = Number(resetNumPresses.innerHTML) + 1;
    resetNumPresses.innerHTML = newCounterValue;
})