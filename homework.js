class Hamster {
    constructor(owner = "", name, price = 15) {
        this.owner = owner;
        this.name = name;
        this.price = price;
    }

    wheelRun() {
        console.log("squak squeak");
    }

    eatFood() {
        console.log("nibble nibble");
    }

    getPrice() {
        return this.price;
    }
}

class Person {
    constructor(name, age = 0, height = 0, weight = 0, mood = 0, hamsters = [], bankAccount = 0){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = hamsters;
        this.bankAccount = bankAccount;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getWeight() {
        return this.weight;
    }

    greet() {
        return `Hello ${this.name}`;
    }

    eat() {
        this.weight++;
        this.mood++;
    }

    exercise() {
        this.weight--;
    }

    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount++;
    }

    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= Hamster.getPrice();
    }
}