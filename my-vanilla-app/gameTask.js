import { format} from 'date-fns';
class gameTask {
    constructor(name="",description="",dateCreated=format(new Date(), 'dd-MM-yyyy'),completeDate=format(new Date(), 'dd-MM-yyyy'),completeStatus =false) {
        this.name=name;
        this.description=description;
        this.dateCreated=dateCreated;
        this.completeDate=completeDate;
        this.completeStatus=completeStatus;        
    }
    displayTask(){
        console.log(`Task Name: ${this.name}`);
        console.log(`Description: ${this.description}`);
        console.log(`Date created: ${this.dateCreated}`)
        console.log(`Deadline: ${this.completeDate}`);
        console.log(`Status: ${this.completeStatus?"Task is completeted":"Task is not completed"}`);
    }

    
}
export{gameTask};