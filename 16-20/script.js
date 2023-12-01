//___________________video 16_________________________
//template-string
let user = {
    id: 1,
    name: 'Ali',
    age: 23
}
console.log('id: ' + user.id + '\n Name: ' + user.name + '\n Age ' + user.age );

console.log(`
id: ${user.id}
Name: ${user.name}
Age: ${user.age}
`);

let allPrice = 34000
let postCost = 6000

console.log(`your shopping cart price: ${allPrice + postCost}`);

//_______________________video 17__________________
//filter
let numbers = [3, 9, 0, 23, 41, 13, 7, 23]

let filteredNumbers = numbers.filter(function (number) {
    console.log(nunber);
    return number > 10
})
console.log(filteredNumbers);

let allProducts = [
    {id: 1, name: 'laptop', price: 300000},
    {id: 2, name: 'phone', price: 550000},
    {id: 3, name: 'water', price: 34000},
    {id: 4, name: 'pencil', price: 3000},
    {id: 5, name: 'milk', price: 367000},
]

let filteredProducts = allProducts.filter(function (product) {
    console.log(product);
    return product.price < 34000
})
console.log(filteredProducts);

//____________________________video 18_____________________________
//reduce

let numbers2 = [3, 9, 49, 23, 41, 13, 90, 23]

let sumNumber = numbers2.reduce(function (prev, current) {
    console.log(prev, current);
    return prev + current
})

let shoppingCart = [
    {id: 1, name: 'laptop', price: 300000},
    {id: 2, name: 'phone', price: 550000},
    {id: 3, name: 'water', price: 34000},
]

let totalPrice = shoppingCart.reduce(function (prev, current) {
    console.log(prev, current);
    if (prev.price) {
        return prev.price + current.price
    }
    return prev + current.price
})
console.log('Total Price:' + totalPrice);

//_____________________video 19_____________________________---
//falsy and truthy values

let isLogin = 0 
if(isLogin) {
    console.log('your are ligin :)');
} else {
    console.log('your are not ligin :(');
}

let users = []
if (users.length) {
    console.log('value darad');
} else {
    console.log('value nadarad')
}

//___________________video 20_______________________________
// and , or
let num1 = 4
let num2 = 9
let num3 = 3

if (num1 + num2 === 13 || num2 + num3 === 10) {
    console.log('OK');
} else {
    console.log('not OK');
}

let isLogin2 = true
isLogin2 && console.log('Login')