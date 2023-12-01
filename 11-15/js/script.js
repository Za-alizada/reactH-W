//video 11 map function
let scores = [2, 5, 0, 9, 2, 10, 12]
let mapResult = scores.map((score, index) => {
    console.log(index, score);
    return score * 3;
})
console.log(mapResult);

//________________________video 12____________________
//this

function clickHandler (param) {
    param.style.background = 'red';
    console.log('Click', param);
}

let user = {
    id: 23,
    username: 'Zahra',
    age: 24,
    showAge: function () {
        console.log(this)
    }
}
user.showAge();

//______________________video 13_________________________
// bind
const users = {
    id: 2,
    username: 'Ali',
    age: 25,
    showAge: function () {
        console.log(this.age);
    }
}
users.showAge();
let showAgeFunc = users.showAge.bind(users);
showAgeFunc();
//______________
let user1 = {
    id: 1,
    username: 'amin',
    age: 23
}

let user2 = {
    id: 2,
    username: 'ahmad',
    age: 22
}

function showAGE () {
    console.log('Your age:', this.age);
}

let user1ShowAge = showAGE.bind(user1);
let user2ShowAge = showAGE.bind(user2);

user1ShowAge();
user2ShowAge();

//__________________________video 14 & 15______________________
//class & extends

class Car {

    constructor(color, name, tairCount) {
        this.color = color
        this.name = name
        this.tairCount = tairCount
    }
    speedRun () {
        console.log(this.name + 'شروع به حرکت کرد');
    }
}

class Truck extends Car {
    constructor (color, name, tairCount, maxBar) {
        super(color, name, tairCount)
        this.maxBar = maxBar
    }
    speedRun () {
        //console.log('Truck', this.name + 'شروع به حرکت کرد');
        super.speedRun();
    }
}
let peugeot405 = new Car('White', '405', 4);
let peugeotPars = new Car('Gray', 'Pars', 4);

let firstTruck = new Truck('White', 'FH', 18, 1000)

firstTruck.speedRun();
console.log(firstTruck);

console.log(peugeot405);
console.log(peugeotPars);