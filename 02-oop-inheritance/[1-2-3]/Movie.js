class Movie {
    constructor(title, year, duration){
        this.title = title;
        this. year = year;
        this.duration = duration;

        super();
    }
    

    play(){
        return "playing " + this.title;
    }

    pause(){
        return "pause " + this.title;
    }

    resume(){
        return "resume " + this.title;
    }
}


/*let shrek = new Movie("shrek", 2015, 110);
let swordFish = new Movie("swordFish", 2015, 110);
let americanPie = new Movie("americanPie", 2015, 110);

shrek.play();
shrek.pause();
swordFish.play();
swordFish.pause();
americanPie.play();*/
