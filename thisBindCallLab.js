let cat = {};
cat = {
    sound:'meow',
    speak: function() {
        console.log(this.sound);
    }
};
speakFunction = cat.speak;
let speakFunctionBind = speakFunction.bind(cat);
speakFunctionBind();

// set 'this' to an object method and function
let person1 = {
    name: 'Alex'
};

let person2 = {
    name: 'Alexis'
};

function namer() {
    return this.name;
}
// use bind method to give 'this' the context of person1 & person2
console.log (namer.bind(person1)());
console.log (namer.bind(person2)());

// exercise 2, 'this' and bind methods
let number = {
    x: 24,
    y: 22
};
let count = function() {
    console.log(this.x + this.y);
}
// console.log (count.bind(number)());
let boundFunc = count.bind(number);
console.log (boundFunc());

// call() method
// function.call(thisContextObject, arg1, arg2...)
var obj1 = {name: 'John'};
var obj2 = {name: 'Jane'};
// array for call method to pass through
var languages = ['French', 'Chinese', 'Korean'];

var myLanguages = function(lang1, lang2, lang3) {
    console.log('my name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3);
}
// console.log (myLanguages());
// using strings
myLanguages.call(obj1, 'English', 'Spanish', 'Portuguese');
// using arrays
myLanguages.call(obj2, languages[0], languages[1], languages[2]);

