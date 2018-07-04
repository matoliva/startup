
const Social = {

    share: function(friendName){
        console.log(`${friendName} likes ${this.title}`);
    },
    like: function(friendName){
        console.log(`${friendName} shares ${this.title}`);
    }
}

Object.assign(Movie.prototype, Social);
