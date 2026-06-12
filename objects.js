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

//object constructor function
function Home(rooms, apartment, color, swimmingPool, state, city) {
    this.rooms = rooms;
    this.apartment = apartment;
    this.color = color;
    this.swimmingPool = swimmingPool;
    this.state = state;
    this.city = city
};
var home1 = new Home(3, false, 'blue', true, 'Atlanta', 'GA');
//console.log(home1)
var home2 = new Home(5, true, 'yellow', false, 'Orlando', 'FL');
//console.log(home2)
var home3 = new Home(2, false, 'white', false, 'Denver', 'CO');
//console.log(home3)
var home4 = new Home(6, true, 'green', true, 'Los Angeles', 'CA')
//console.log(home4)
//create book with object literal notation, convert to constructor, place in library
function Book(fiction, style, genre, reference, pages) {
    this.fiction = fiction;
    this.style = style;
    this.genre = genre;
    this.reference = reference;
    this.pages = pages
};
var book1 = new Book(true, 'paperback', 'horror', false, 376);
var book2 = new Book(false, 'hardcover', 'history', true, 823);
var book3 = new Book(true, 'paperback', 'mystery', false, 289);
var book4 = new Book(false, 'hardcover', 'travel', true, 1226);
var book5 = new Book(true, 'paperback', 'adventure', false, 307);
console.log(book1, book3)





