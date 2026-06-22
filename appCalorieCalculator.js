//create function to input daily caloric intake and parameter of day.
//if... else statement version
function inputCaloriesByDay(day) {
    if (day === 'Monday') {
        return 3500;
    } else if (day === 'Tuesday') {
        return 2400;
    } else if (day === 'Wednesday') {
        return 1500;
    } else if (day === 'Thursday') {
        return 1800;
    } else if (day === 'Friday') {
        return 2100;
    } else if (day === 'Saturday') {
        return 3000;
    } else if (day === 'Sunday') {
        return 2600;
    } else {
        return 'Please choose valid day'
    }
}
console.log (inputCaloriesByDay('Wednesday'))

//create function to input daily caloric intake, switch case
// function inputCaloriesByDay(day) {
//     switch(day) {
//         case 'Monday':
//             return 3500;
//             break;
//         case 'Tuesday':
//             return 2400;
//             break;
//         case 'Wednesday':
//             return 1500;
//             break;
//         case 'Thursday':
//             return 1800;
//             break;
//         case 'Friday':
//             return 2100;
//             break;
//         case 'Saturday':
//             return 3000;
//             break;
//         case 'Sunday':
//             return 2600;
//             break;
//         default:
//             return 'Please choose a valid day'
//     }
// }
// console.log(inputCaloriesByDay('Wednesday'))

//create function to get total calories consumed
function getTotalCalories() {
    return inputCaloriesByDay('Monday') + 
    inputCaloriesByDay('Tuesday') + 
    inputCaloriesByDay('Wednesday') + 
    inputCaloriesByDay('Thursday') + 
    inputCaloriesByDay('Friday') + 
    inputCaloriesByDay('Saturday') + 
    inputCaloriesByDay('Sunday');
}
console.log (getTotalCalories())

//create function to show ideal caloric intake
function getIdealCalories() {
    var idealDailyCalories = 2500;
    return idealDailyCalories * 7;
}
// console.log (getIdealCalories())

//create function for health plan
function calculateHealthPlan() {
    var actualCalories = getTotalCalories();
    var idealCalories = getIdealCalories();
    if (actualCalories === idealCalories) {
        return 'You ate the right amount of Food.'
    } else if (actualCalories > idealCalories) {
        return 'Head to the gym fatty!'
    } else if (actualCalories < idealCalories) {
        return 'Get seconds and pig out!'
    }
}
console.log (calculateHealthPlan())