'use strict';
// В js/main.js визначте 2 змінні message1 зі значенням Hello та message2 зі значенням JavaScript. 
// Використовуючи ці змінні та alert, виконайте відображення рядка "Hello JavaScript!".

// let message1 = "Hello";
// let message2 = "JavaScript";

// alert(message1 + " " + message2 + "!");

// // Напишіть програму, що запитує у користувача значення двох змінних x, y, та виводить їх суму


// let x = prompt("Введіть число (x):");
// let y = prompt("Введіть число (y):");

// x = Number(x);
// y = Number(y);

// let sum = x + y;

// alert("Сума: " + sum);

// Напишіть програму, що пропонує користувачеві вгадати якесь число, наприклад 3. У разі успіху, потрібно вивести вітання користувачеві, 
// наприклад: 'Congratulations, You did it!'. Якщо число більше за 3, потрібно вивести повідомлення користувачеві,
//  наприклад: 'The number is too long'. Якщо число менше за 3, потрібно вивести повідомлення користувачеві, наприклад: 'The number is short'

// const targetNumber = 3;

// let guessNumber = prompt("Вгадайте число від 1 до 10:");

// guessNumber = Number(guessNumber);

// if (guessNumber === targetNumber) {
//     alert("Congratulations, You did it!");
// } else if (guessNumber > targetNumber) {
//     alert("The number is too long.");
// } else if (guessNumber < targetNumber) {
//     alert("The number is short.");
// } else {
//     alert("Введено некоректне значення.");
// }

// Напишіть програму, що пропонує користувачеві ввести назву дня неділі, наприклад - Понеділок. 
// Якщо користувач ввів Понеділок або Monday, вивести повідомлення "Start of the work week!". 
// Якщо користувач ввів П'ятниця або Friday, вивести повідомлення "End of the work week!". В інших випадках вивести повідомлення "A regular day".

// Напишіть версію програми, застосовуючи оператор if else


// let day = prompt("Введіть назву дня тижня:");

// day = day.toLowerCase();

// if (day === "понеділок" || day === "monday") {
//     alert("Start of the work week!");
// } else if (day === "п'ятниця" || day === "friday") {
//     alert("End of the work week!");
// } else {
//     alert("A regular day");
// }

// Напишіть версію програми, застосовуючи оператор switch

// let day = prompt("Введіть назву дня тижня:");

// day = day.toLowerCase();

// switch(day) {
//     case "понеділок":
//     case "monday":
//         alert("Start of the work week!");
//         break;
//     case "п'ятниця":
//     case "friday":
//         alert("End of the work week!");
//         break;
//     default:
//         alert("A regular day");
//         break;
// }

// За результатами іспиту студент набирає певну кількість балів,
//  що зберігається в змінній score. Напишіть програму, 
//  що аналізує значення score, та призначає студенту ступінь grade за таким алгоритмом:

// Якщо студент набрав менше 50 балів, призначити йому ступінь 'F'
// Якщо студент набрав менше 70 балів, призначити йому ступінь 'D'
// Якщо студент набрав менше 80 балів, призначити йому ступінь 'C'
// Якщо студент набрав менше 90 балів, призначити йому ступінь 'B'
// В іншому випадку призначити йому ступінь 'A'

let score = prompt("Введіть кількість набраних балів:");

score = Number(score);

let grade;

if (score < 50) {
    grade = 'F';
} else if (score < 70) {
    grade = 'D';
} else if (score < 80) {
    grade = 'C';
} else if (score < 90) {
    grade = 'B';
} else {
    grade = 'A';
}

// вивести рез-т
alert("Оцінка: " + grade);
