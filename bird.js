
function Bird(type, color) {

    this.type = type;
    this.color = color;
    this.egss = 0;

    this.fly = function() {
        console.log(`${this.color} ${this.type} is flying.`);
    }

    this.walk = function() {
        console.log(`${this.color} ${this.type} is walking.`);
    }
}

Bird.prototype.lay_egg = function() {
    this.eggs++;
    console.log(`${this.color} ${this.type} laid an egg.`);
}

function Parrot(type, color) {
    Bird.call(this, type, color);

    this.talk = function() {
        console.log(`${this.color} ${this.type} is talking.`);
    }
}

function Raven(type, color) {
    Bird.call(this, type, color);

    this.solve_puzzle = function() {
        console.log(`${this.color} ${this.type} is solving a puzzle.`);
    }
}

function Songbird(type, color) {
    Bird.call(this, type, color);

    this.sing = function() {
        console.log(`${this.color} ${this.type} is singing.`);
    }
}

let sparrow = new Parrot("sparrow", "gray");
sparrow.fly();
sparrow.walk();
// sparrow.lay_egg();
sparrow.talk();