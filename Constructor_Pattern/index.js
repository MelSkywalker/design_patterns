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
        case 'grass':
            return this.name + " used energy ball!";
            break;
        case 'bug':
            return this.name + " used silver wind!";
            break;
        case 'dark':
            return this.name + " used bite!";
            break;
        case 'dragon':
            return this.name + " used dragon dance!";
            break;
        case 'electric':
            return this.name + " used electro ball!";
            break;
        case 'fairy':
            return this.name + " used charm!";
            break;
        case 'fighting':
            return this.name + " used jump kick!";
            break;
        case 'flying':
            return this.name + " used gust!";
            break;
        case 'ghost':
            return this.name + " used curse!";
            break;
        case 'ground':
            return this.name + " used dig!";
            break;
        case 'ice':
            return this.name + " used avalanche!";
            break;
        case 'normal':
            return this.name + " used growl!";
            break;
        case 'poison':
            return this.name + " used acid!";
            break;
        case 'psychic':
            return this.name + " used hypnosis!";
            break;
        case 'rock':
            return this.name + " used sandstorm!";
            break;
        case 'steel':
            return this.name + " used gyro ball!";
            break;
        default:
            return this.name + " cannot attack!"
    }
}

const charmander = new Pokemon("Charmander", "fire");
const squirtle = new Pokemon("Squirtle", "water");
const bulbasaur = new Pokemon("Bulbasaur", "grass");
const unknown = new Pokemon("Unknown", "notype");

console.log(bulbasaur.attack());

module.exports = function(){
    Pokemon
}