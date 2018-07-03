
export default class Actor {
    constructor(fullName, age) {
        this.fullName = fullName;
        this.age = age;
    }
}

export default class EventEmmiter {
    constructor() {
        this.events = {}; //object of events
    }

    on(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
    }

    emit(eventName, ...rest) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(cb => {
                cb.apply(null, rest);
            });
        }
    }

    off(eventName, callback) {
        if (this.events.has(eventName)) {
            let listenerList = this.eventList.get(eventName);
            listenerList.delete(callback);
        }
    }
}

export default class Logger {
    constructor() {}

    log(info) {
        console.log(`The ${this.info} event has been emitted`);
    }
}
export default class Movie extends EventEmmiter {
    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = [];
    }

    play() {
        super.emit('play');
    }

    pause() {
        super.emit('pause');
    }

    resume() {
        super.emit('resume');
    }

    addCast(actor) {
        if (Array.isArray(actor)) {
            actor.forEach(auxCast => this.cast.push(auxCast));
        } else {
            this.cast.push(actor);
        }
    }
}

export const Social = {

    share: function (friendName) {
        console.log(`${friendName} likes ${this.title}`);
    },
    like: function (friendName) {
        console.log(`${friendName} shares ${this.title}`);
    }
};

Object.assign(Movie.prototype, Social);
