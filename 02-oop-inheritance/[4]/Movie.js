import EventEmmiter from "../[3]/EventEmmiter.js";


export default class Movie extends EventEmmiter{
    constructor(title, year, duration){
        super();
        this.title = title;
        this. year = year;
        this.duration = duration;
        this.cast = [];
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

    addCast(actor){
        if(Array.isArray(actor))
        {
            actor.forEach(auxCast => this.cast.push(auxCast));
        }
        else{
            this.cast.push(actor);
        }
    }
}

/*let harryPotter = new Movie("shrek", 2010, 120);

harryPotter.on('play', () => {console.log("playing " + this.title)});
harryPotter.on('pause', () => {console.log("pause " + this.title)});
harryPotter.on('resume', () => {console.log("resume " + this.title)});

harryPotter.play();*/
