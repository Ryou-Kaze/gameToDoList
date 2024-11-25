import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { gameTask } from './gameTask'
import { game } from './gameObj'
import { gameList } from './gameObjList'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
const gameListHolder = [];

function mainMenu() {
  while (true) {
      console.log("\n=== Game Lists Storage Menu ===");
      console.log("1. Add New List");
      console.log("2. Remove List");
      console.log("3.View Lists");
      console.log("4. Exit");
      const choice = prompt("Enter your choice: ").trim();

      switch (choice) {
          case "1":
              addNewList();
              break;
          case "2":
              removeList();
              break;
          case "3":
              viewLists();
              break;
          case "4":
              console.log("Goodbye!");
              return;
          default:
              console.log("Invalid choice. Please try again.");
      }
  }
}
function viewLists(){
    if(gameListHolder.length==0){
        console.log("No lists to view. Exiting...");
        return false;
    }
    else{
        let counter=1;
        gameListHolder.forEach(gameList => {
            console.log(`${counter++}. ${gameList.listTitle} | Number of games: ${gameList.games.length}` );  
            return true;       
        });
    }
}
function modifyList(){
    if(viewLists()){
        let targetIndex=parseInt(prompt('Choose which list to modify: '));
        const targetList = gameListHolder[targetIndex-1];
        targetList.displayGameList();
        while (true) {
            const choice = prompt(`
            Game List Manager
            -----------------
            1. Display Game List
            2. Add Game
            3. Remove Game
            4. Update Game  
            5. Ask task
            6. Remove task
            5. Exit
            Enter your choice:`);
    
            switch (choice) {
                case "1":
                    targetList.displayGameList();
                    break;
                case "2":
                    targetList.addGame(makeGame);
                    break;
                case "3":
                    let targetIndex = parseInt(prompt('Choose the target game index: '))-1;
                    if(targetIndex<0||targetIndex>targetList.length-1){
                        console.log("Wrong Number! Try again");
                        continue;
                    }
                    targetList.removeGame(targetIndex);
                    break;
                case "4":
                    targetList.updateGame();
                    break;
                case "5":
                    console.log("Exiting Game List Manager. Goodbye!");
                    return;
                default:
                    console.log("Invalid choice. Please try again.");
            }
        }
    }
    else{
        console.log("no List!");
        return;
    }

}

function makeGameTask() {
    while (true) {
        const taskName = prompt("Enter the name of the task (or Cancel to exit): ");
        if (taskName === null) {
            console.log("Task creation cancelled by the user.");
            return null; 
        }
        if (!taskName.trim()) {
            console.log("Not Valid Input! Try again.");
            continue;
        }

        const taskDescription = prompt("Enter the description of the task (or Cancel to exit): ");
        if (taskDescription === null) {
            console.log("Task creation cancelled by the user.");
            return null;
        }
        if (!taskDescription.trim()) {
            console.log("Not Valid Input! Try again.");
            continue;
        }

        const taskCreationDate = prompt("Enter the date for creating this task (or Cancel to exit): ");
        if (taskCreationDate === null) {
            console.log("Task creation cancelled by the user.");
            return null;
        }
        if (!taskCreationDate.trim()) {
            console.log("Not Valid Input! Try again.");
            continue;
        }

        const taskDeadline = prompt("Enter the deadline of the task (or Cancel to exit): ");
        if (taskDeadline === null) {
            console.log("Task creation cancelled by the user.");
            return null;
        }
        if (!taskDeadline.trim()) {
            console.log("Not Valid Input! Try again.");
            continue;
        }
        return new gameTask(taskName, taskDescription, taskCreationDate, taskDeadline);
    }
}

function makeGame(){
    while (true) {
        const gameTitle = prompt("Enter the title of the game (or Cancel to exit): ");
        if (gameTitle === null) {
            console.log("Game creation cancelled by the user.");
            return null; 
        }
        if (!gameTitle.trim()) {
            console.log("Not Valid Input! Try again.");
            continue;
        }

        const gameDeveloper = prompt("Enter the developer name of the game (or Cancel to exit): ");
        if (gameDeveloper === null) {
            console.log("Game creation cancelled by the user.");
            return null;
        }
        if (!gameDeveloper.trim()) {
            console.log("Not Valid Input! Try again.");
            continue;
        }

        const gameDescription = prompt("Enter the game's description (or Cancel to exit): ");
        if (gameDescription === null) {
            console.log("Game creation cancelled by the user.");
            return null;
        }
        if (!gameDescription.trim()) {
            console.log("Not Valid Input! Try again.");
            continue;
        }

        const gamePlatform = prompt("Enter the platform of the game (or Cancel to exit): ");
        if (gamePlatform === null) {
            console.log("Game creation cancelled by the user.");
            return null;
        }
        if (!gamePlatform.trim()) {
            console.log("Not Valid Input! Try again.");
            continue;
        }
        const gameReleasedDate = prompt("Enter the release date of the game (or Cancel to exit): ");
        if (gameReleasedDate === null) {
            console.log("Game creation cancelled by the user.");
            return null;
        }
        if (!gameReleasedDate.trim()) {
            console.log("Not Valid Input! Try again.");
            continue;
        }
        const gameGenre = prompt("Enter the genre of the game (or Cancel to exit): ");
        if (gameGenre === null) {
            console.log("Game creation cancelled by the user.");
            return null;
        }
        if (!gameGenre.trim()) {
            console.log("Not Valid Input! Try again.");
            continue;
        }
        const gameRating = prompt("Enter the rating of the game (or Cancel to exit): ");
        if (gameRating === null) {
            console.log("Game creation cancelled by the user.");
            return null;
        }
        if (!gameRating.trim()) {
            console.log("Not Valid Input! Try again.");
            continue;
        }
        const gameSize = prompt("Enter the size of the game(GB)(or Cancel to exit): ");
        if (gameSize === null) {
            console.log("Game creation cancelled by the user.");
            return null;
        }
        if (!gameSize.trim()) {
            console.log("Not Valid Input! Try again.");
            continue;
        }
        const taskArr =[];
        const taskNumber=parseInt(prompt('How many Tasks do you want to add: '));
        for (let index = 0; index < taskNumber; index++) {
            taskArr.push(makeGameTask());
            
        }
        return new game(gameTitle, gameDeveloper, gameDescription, gamePlatform,gameReleasedDate,gameGenre,gameRating,gameSize,false,taskArr);
    }
}
function makeList() {
    while (true) {
        const listTitle = prompt("Enter the title of the list (or Cancel to exit): ");
        if (listTitle === null) {
            console.log("list creation cancelled by the user.");
            return null; 
        }
        if (!listTitle.trim()) {
            console.log("Not Valid Input! Try again.");
            continue;
        }
        const gameList=[];
        const gameNumber=parseInt(prompt("How many games do you want to enter: "));
        for (let index = 0; index < gameNumber; index++) {
            gameList.push(makeGame());
        }
        return new gameList(listTitle,gameList);
    }
}   

function removeList() {
    if (gameListHolder.length === 0) {
      console.log("No lists available to remove.");
      return;
    }
    displayLists();
  const index = parseInt(prompt("Enter the number of the list to remove: ").trim(), 10) - 1;

  if (index >= 0 && index < toDoLists.length) {
      console.log(`List "${toDoLists[index].title}" removed.`);
      toDoLists.splice(index, 1);
  } else {
      console.log("Invalid index. Please try again.");
  }
}

