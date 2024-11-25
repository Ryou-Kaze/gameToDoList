class gameList {
    #listTitle;
    #games;
    constructor(listTitle="",games= []) {
        this.#listTitle=listTitle;
        this.#games=games;
    }
    get listTitle(){
        return this.#listTitle;
    }
    set listTitle(newListTitle){
        this.#listTitle=newListTitle;
    }
    get games(){
        return this.#games;
    }
    set games(newListGames){
        this.#games=newListGames;
    }
    displayGameList(){
        let counter =1;
        this.#games.forEach(game => {
            console.log(`${counter}.${game.title}\n${game.displayGame()}`);
        });
    }
    addGame(newGame){
        this.#games.push(newGame);
    }
    removeGame(targetIndex){
        this.#games.splice(targetIndex,0);
    }
    updateGame(){
        this.displayGameList();
        const taskIndex=parseInt(prompt('Enter the index of the game you want to change: '),10)-1;
        if (taskIndex<0 || taskIndex>=this.#games.length){
            console.log("Invalid input! Exiting....");
            return;
        }
        const attribute= prompt('Enter which attribute you want to change: \n- Title \n- Developer \n- Description \n- Platform \n- Release Date \n- Genre \n- Rating \n- Size ').trim().replace(" ","").toLowerCase();
        switch (attribute) {
            case "title":
                console.log(
                    `Current value of Title: ${this.#games[taskIndex].title}`
                );
                this.#games[taskIndex].title = prompt(
                    `Enter new value for Title: `
                );
                break;
        
            case "developer":
                console.log(
                    `Current value of Developer: ${this.#games[taskIndex].developer}`
                );
                this.#games[taskIndex].developer = prompt(
                    `Enter new value for Developer: `
                );
                break;
        
            case "description":
                console.log(
                    `Current value of Description: ${this.#games[taskIndex].desc}`
                );
                this.#games[taskIndex].desc = prompt(
                    `Enter new value for Description: `
                );
                break;
        
            case "platform":
                console.log(
                    `Current value of Platform: ${this.#games[taskIndex].platform}`
                );
                this.#games[taskIndex].platform = prompt(
                    `Enter new value for Platform: `
                );
                break;
        
            case "releasedate":
                console.log(
                    `Current value of Release Date: ${this.#games[taskIndex].releaseDate}`
                );
                this.#games[taskIndex].releaseDate = prompt(
                    `Enter new value for Release Date: `
                );
                break;
        
            case "genre":
                console.log(
                    `Current value of Genre: ${this.#games[taskIndex].genre}`
                );
                this.#games[taskIndex].genre = prompt(
                    `Enter new value for Genre: `
                );
                break;
        
            case "rating":
                console.log(
                    `Current value of Rating: ${this.#games[taskIndex].rating}`
                );
                this.#games[taskIndex].rating = parseFloat(
                    prompt(`Enter new value for Rating (e.g., 4.5): `)
                );
                break;
        
            case "size":
                console.log(
                    `Current value of Size: ${this.#games[taskIndex].size}`
                );
                this.#games[taskIndex].size = prompt(
                    `Enter new value for Size (e.g., 20GB): `
                );
                break;
        
            default:
                console.log("Invalid attribute. Please try again.");
        }

    }
    completeGame(targetIndex){
        if(this.#games[targetIndex-1].displayUnfinishedGameTask()==0 ){
            this.#games[targetIndex-1].completeStatus=true;
            console.log(`${this.#games[targetIndex-1].title} completed! Congrats`);
        }
        else{
            console.log(`${this.#games[targetIndex-1].title}'s subtasks still unfinished!`)
        }
    }

}
export{gameList};