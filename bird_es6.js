
class Bird {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.egss = 0;
    }

    fly () {
        console.log(`${this.color} ${this.type} is flying.`);
    }

    walk () {
        console.log(`${this.color} ${this.type} is walking.`);
    }
}

Bird.prototype.lay_egg = function() {
    this.eggs++;
    console.log(`${this.color} ${this.type} laid an egg.`);
}

class Parrot extends Bird{
    constructor(type, color) {
        super(type, color);
        this.type = type;
        this.color = color;
    }    

    talk() {
        console.log(`${this.color} ${this.type} is talking.`);
    }
}

class Raven extends Bird{
    constructor(type, color) {
        super(type, color);
    }    

    solve_puzzle () {
        console.log(`${this.color} ${this.type} is solving a puzzle.`);
    }
}

class Songbird extends Bird {
    constructor(type, color) {
        super(type, color);
        this.type = type;
        this.color = color;
    }    

    sing () {
        console.log(`${this.color} ${this.type} is singing.`);
    }
}

let sparrow = new Parrot("sparrow", "gray");
sparrow.fly();
sparrow.walk();
// sparrow.lay_egg();
sparrow.talk();