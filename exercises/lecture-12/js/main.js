'use strict';

// 1) Напишіть функцію checkAge(age), що приймає параметр age та повертає true, якщо параметр age перевищує 18, в іншому випадку запитує підтвердження 'Did parents allow you?' 
// та повертає результат. Реалізуйте функцію checkAge(age) двома способами - використовуючи оператор if () { } else { } та - використовуючи тернарний оператор ?.

// export function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
//   let age = prompt("Enter your age:");
//   checkAge(age);


// export function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
//   }
  
 
//   let age = prompt("Enter your age:");
//   checkAge(age);
  // ---------------------------------------------------------------
  
// 2)Напишіть функцію min(a,b), яка повертає найменше з двох чисел a і b. У випадку рівності a == b немає значення, що повертати. Наприклад: 

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// function min(a, b) {
//   return (a < b) ? a : b;
// }

// ---------------------------------------------------------------
// 3) Напишіть функцію pow(x,n), яка повертає x у ступені n. Або, іншими словами, множить x на себе n разів і повертає результат.
//  У цьому завданні функція повинна підтримувати лише натуральні значення n: цілі числа від 1.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

// Створіть сценарій, де спочатку користувачу пропонують ввести x і n, а потім показують результат pow(x,n), або повідомлення про неправильне значення параметра n.


// function pow(x, n) {
//   if (n < 1 || !Number.isInteger(n)) {
//     return null; // Повертаємо null, якщо n не натуральне
//   }
  
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
  
//   return result;
// }

// // ввести значееня x/n
// let x = prompt("Введіть число x:");
// let n = prompt("Введіть натуральне число n:");

// // Перетворити значення в числа
// x = Number(x);
// n = Number(n);

// // Перевіра, чи  n натуральне числом
// if (n < 1 || !Number.isInteger(n)) {
//   alert("Невірне значення n. Воно повинно бути натуральним числом (цілим та більше 0).");
// } else {
//   // Виводимо результат 
//   let result = pow(x, n);
//   alert(`${x} в степені ${n} дорівнює ${result}`);
// }
// ---------------------------------------------------------------
// 4) Переписати функцію ask, використовуючи функцію стрілок:
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };\

// ---------------------------------------------------------------
// 5) Переписати функцію ask, використовуючи функціональний вираз


// const ask = function(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// };

// ---------------------------------------------------------------

// 6)

// function A() { console.log('A was called'); return undefined;}
// function B() { console.log('B was called'); return false;}
// function C() { console.log('C was called'); return "foo";}

// A() || C();

// // B() || C();

// ---------------------------------------------------------------

// 7)Створити об'єкт person, що має властивості name з типом рядка та age з типом цілого числа. Надати значення цим властивостям. 
// Вивести значення властивостей об'єкту на консоль. Змінити тип властивості name з рядка на об'єкт, 
// з ключами firstName та lastName. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль.


// // Сб'єкт person
// let person = {
//   name: "Albus Dumbledore",
//   age: 116
// };

// console.log("Name:", person.name);
// console.log("Age:", person.age);

// 8) ---------------------------------------------------

// const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];


// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// let i = 0;
// while (i < fruits.length) {
//   console.log(fruits[i]);
//   i++;
// }

// 9)--------------------------------------------------------

// const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < Numbs.length; i++) {
//   if (Numbs[i] % 2 === 0) {
//     console.log(Numbs[i]);
//   }
// }

// 10)--------------------------------------------------------

const names = ['Batman'];

names.push('Joker');

names.unshift('Bane');

if (!names.includes('Alfred')) {
  names.push('Alfred');
}


const batmanIndex = names.indexOf('Batman');
if (batmanIndex !== -1) {
  names.splice(batmanIndex, 1);
}

console.log(names);

