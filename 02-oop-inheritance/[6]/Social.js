import Movie from "../[4]/Movie.js";

const Social = {

    share: function(friendName){
        console.log(`${friendName} likes ${this.title}`);
    },
    like: function(friendName){
        console.log(`${friendName} shares ${this.title}`);
    }
}

Object.assign(Movie.prototype, Social);

let ironMan = new Movie('ironMan', 1984, 90);
ironMan.share("Mike Blossom"); // output: Share Iron Man with Mike Blossom