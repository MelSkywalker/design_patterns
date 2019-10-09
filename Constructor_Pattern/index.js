function Pokemon(name, type){
    this.name = name;
    this.type = type;
}

Pokemon.prototype.attack = function (){
    switch(this.type) {
        case 'fire':
            return this.name + " used ember!";
            break;
        case 'water':
            return this.name + " used hydro pump!";
            break;
        default:
            return this.name + " cannot attack!"
    }
}

const charmander = new Pokemon("Charmander", "fire");
const squirtle = new Pokemon("Squirtle", "water");
const bulbasaur = new Pokemon("Bulbasaur", "grass");

console.log(bulbasaur.attack());

module.exports = function(){
    Pokemon
}