
import { format} from 'date-fns';
class game {
    #title;
    #developer;
    #description;
    #platform;
    #releaseDate;
    #genre;
    #rating;
    #size;
    #completeStatus;
    #subtasks;

    constructor(title="",developer="",description="",platform="",releaseDate=format(new Date(), 'dd-MM-yyyy'),genre="",rating=0,size="",completeStatus=false,subtasks=[]) {
        this.#title=title;
        this.#developer=developer;
        this.#description=description;
        this.#platform=platform;
        this.#releaseDate=releaseDate;
        this.#genre=genre;
        this.#rating=rating;
        this.#size=size;
        this.#completeStatus=completeStatus;
        this.#subtasks=subtasks;
    }
    // Title
    get title() {
        return this.#title;
    }

    set title(value) {
        if (!value.trim()) {
            throw new Error("Title cannot be empty.");
        }
        this.#title = value;
    }

    // Developer
    get developer() {
        return this.#developer;
    }

    set developer(value) {
        if (!value.trim()) {
            throw new Error("Developer cannot be empty.");
        }
        this.#developer = value;
    }

    // Description
    get description() {
        return this.#description;
    }

    set description(value) {
        this.#description = value;
    }

    // Platform
    get platform() {
        return this.#platform;
    }

    set platform(value) {
        if (!value.trim()) {
            throw new Error("Platform cannot be empty.");
        }
        this.#platform = value;
    }

    // Release Date
    get releaseDate() {
        return this.#releaseDate;
    }

    set releaseDate(value) {
        if (isNaN(new Date(value))) {
            throw new Error("Invalid date format.");
        }
        this.#releaseDate = value;
    }

    // Genre
    get genre() {
        return this.#genre;
    }

    set genre(value) {
        this.#genre = value;
    }

    // Rating
    get rating() {
        return this.#rating;
    }

    set rating(value) {
        if (value < 0 || value > 5) {
            throw new Error("Rating must be between 0 and 5.");
        }
        this.#rating = value;
    }

    // Size
    get size() {
        return this.#size;
    }

    set size(value) {
        this.#size = value;
    }

    // Complete Status
    get completeStatus() {
        return this.#completeStatus;
    }

    set completeStatus(value) {
        if (typeof value !== "boolean") {
            throw new Error("Complete status must be a boolean.");
        }
        this.#completeStatus = value;
    }

    // Subtasks
    get subtasks() {
        return this.#subtasks;
    }
    displayGame(){
        console.log("=== Game Details ===");
        console.log(`Title: ${this.#title}`);
        console.log(`Developer: ${this.#developer}`);
        console.log(`Description: ${this.#description}`);
        console.log(`Platform: ${this.#platform}`);
        console.log(`Release Date: ${this.#releaseDate}`);
        console.log(`Genre: ${this.#genre}`);
        console.log(`Rating: ${this.#rating}`);
        console.log(`Size: ${this.#size}`);
        console.log(`Complete Status: ${this.#completeStatus ? `All ${this.#title}'s tasks have been completed` : `All ${this.#title}'s tasks haven't been completed\n-tasks left: ${displayUnfinishedGameTask()}`}`);
    }
    addSubtasks(gameTask){
       this.#subtasks.push(gameTask); 
    }
    removeSubtasks(targetIndex){
        this.#subtasks.splice(targetIndex,0);
    }
    displaySubtasksList(){
        let counter =1;
        this.#subtasks.forEach(gameTask => {
            console.log(counter+". "+gameTask.title+" "+gameTask.completeStatus)
            counter++;
        });
    }
    displaySubtask(targetIndex){
        console.log(`task number ${targetIndex}: `);
        this.#subtasks[targetIndex-1].displayTask();
    }
    displayFinishedGametask(){
        let finishedTaskcounter=0;
        this.#subtasks.forEach(gameTask => {
            if(gameTask.completeStatus == true ){
                finishedTaskcounter++;
            }
        })
        return finishedTaskcounter;
    }
    displayUnfinishedGameTask(){
        let unfinishedTaskcounter=0;
        this.#subtasks.forEach(gameTask => {
            if(gameTask.completeStatus == false ){
                unfinishedTaskcounter++;
            }
        })
        return unfinishedTaskcounter;
    }
    updateSubtasks(){
        this.displaySubtasksList();

        const taskIndex=parseInt(prompt('Enter the index of the subtask you want to change: '),10)-1;
        if (taskIndex<0 || taskIndex>=this.#subtasks.length){
            console.log("Invalid input! Exiting....");
            return;
        }
        const attribute= prompt('Enter which attribute you want to change: \n- Name \n- Description \n- Complete Date').trim().replace(" ","").toLowerCase();
        if (attribute.includes("completedate")){
            attribute.replace("d","D");
        }
        else if(attribute.includes("datecreated")){
            attribute.replace("c","C");
        }

        if(!['name','description','completeDate'].includes(attribute)){
            console.log("Invalid attribute! Exiting...");
        }
        console.log(`Current value of ${this.#subtasks[taskIndex].title}'s ${attribute}: ${this.#subtasks[index][attribute]}`)
        const newVal = prompt(`Enter new value for ${this.#subtasks[taskIndex].title}'s ${attribute}`);
        this.#subtasks[index][attribute]=newVal;
        console.log("Subtask updated successfully!")
        const choice = prompt("Do you want to change more(y/n): ").trim().toLowerCase();
        if(choice.includes("y")){
            this.updateSubtasks();
        }
        else if(choice.includes("n")){
            console.log("Exiting....");
        }
        else{
            console.log("Invalid choice! Exiting....");
        }
    }
    completeSubtask(targetIndex){
        this.#subtasks[targetIndex-1][completeStatus]=true;
        console.log("Task Completed! Congrats");
    }
}
export {game};