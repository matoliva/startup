import EventEmmiter from "../[3]/EventEmmiter.js";


export default class Movie extends EventEmmiter{
    constructor(title, year, duration){
        super();
        this.title = title;
        this. year = year;
        this.duration = duration;
    }

    play(){
        super.emit('play');
    }

    pause(){
        super.emit('pause');
    }

    resume(){
        super.emit('resume');
    }
}

let harryPotter = new Movie("shrek", 2010, 120);

harryPotter.on('play', () => {console.log("playing " + this.title)});
harryPotter.on('pause', () => {console.log("pause " + this.title)});
harryPotter.on('resume', () => {console.log("resume " + this.title)});

harryPotter.play();
