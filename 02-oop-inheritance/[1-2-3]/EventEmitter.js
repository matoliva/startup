
class EventEmmiter{
    constructor(){
        this.events={}; //object of events
    }

    on(eventName, callback){
        if(this.events[eventName]){
            this.events[eventName].push(callback);
        }else{
            this.events[eventName] = [callback];
        }
    }

    emit(eventName, ...rest){
        if(this.events[eventName]) {
            this.events[eventName].forEach(cb => {cb.apply(null, rest);}
        );}
    }

    off(eventName, callback){
        if(this.events.has(eventName)) {
            let listenerList = this.eventList.get(eventName);
            listenerList.delete(callback);
        }
    }
}