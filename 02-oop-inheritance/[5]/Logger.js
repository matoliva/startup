
export default class Logger{
    constructor(){}

    log(info){
        console.log(`The ${this.info} event has been emitted`);
    }
}

/*let terminator = new Movie('Terminator', 1984, 90);
let logger = new Logger();
terminator.on('play', logger.log('play'));
terminator.play();*/