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
