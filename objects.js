//objects lab, build a person with object literal notation
//variable 'human' using boolean, number, and string
var humanBeing = {
    hungry: true,
    age: 25,
    height: '5\'10'
};
//console.log (humanBeing)
//variable 'pizza' using dot notation (object.property = value)
var pizza= {};
pizza.crust = 'sourdough';
pizza.sauce = 'marinara';
pizza.cheese = 'mozzarella';
pizza.toppings = 'pepperoni, mushrooms';
//console.log(pizza)
//variable 'cup' using bracket notation (object['property'] = value)
var cup = {};
cup['insulated'] = true;
cup['liquid'] = 'water';
cup['oz'] = 16;
//console.log(cup)

//object dot & bracket notation exercise
var snowman = {
    isSnow: true,
    color: 'white',
    madeOfSnowballs: 3,
    'first name': 'Frosty'
};
//access properties using dot notation
//console.log(snowman.isSnow)
//console.log(snowman.color)
//console.log(snowman.madeOfSnowballs)
//console.log(snowman.first name)
//change property values
snowman.isSnow = 'yes';
snowman.color = 'orange';
snowman.madeOfSnowballs = 8;
//console.log(snowman)
snowman['first name'] = 'Jack Frost';
//console.log(snowman)

//build a house with 4 property values with dot notation
var house = {};
house.bedrooms = 5;
house.color = 'pink';
house.pool = true;
house.address = '1800 Central Ave.';
//add 3 property values with bracket notation
house['garage size'] = 'one vehicle';
house['1stOwner'] = 'John Doe';
house['typeof'] = 'bungalow';

//console.log(house)


