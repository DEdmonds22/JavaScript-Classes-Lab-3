// CLASSES METHODS AND PROPERTIES
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
        this.bankAccount += 10;
    }

    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}

const timmy = new Person("Timmy", 5);
console.log(timmy);

timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
console.log(timmy);

timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
console.log(timmy);

timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
console.log(timmy);

const gus = new Hamster("Timmy", "Gus");
timmy.buyHamster(gus);
console.log(timmy)

timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
console.log(timmy);

timmy.eat();
timmy.eat();
console.log(timmy);

timmy.exercise();
timmy.exercise();
console.log(timmy);



// CHEF MAKE DINNER
class Dinner {
    constructor(appetizer = "", entree = "", dessert = "") {
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}

class FactoryChef {
    dinner(item1, item2, item3) {
        let newDinner = new Dinner(item1, item2, item3);
        return newDinner;
    }
}

const guyFieri = new FactoryChef();
console.log(guyFieri.dinner("Strawberry", "Bread", "Coconut Milk"));
console.log(guyFieri.dinner("Hamburger", "Bun", "Pickle"));
console.log(guyFieri.dinner("Cheese", "Elbow Noodles", "Sour Cream"));
