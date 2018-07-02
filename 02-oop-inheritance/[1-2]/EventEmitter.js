class EventEmmiter{
    constructor(){
        this.events={}; //object of events
    }

    on(eventName, fn){
        if(!this.events[eventName]){
            this.events[eventName] = []; //If no one already registers the event
        }

        this.events[eventName].push(fn);
    }

    emit(){

    }

    off(){

    }
}