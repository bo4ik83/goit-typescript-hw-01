import "./style.css";
import { age, username, toggle, empty, callback } from "./basic/1";
import { person } from "./basic/2";
import { showMessage, calc, customError } from "./basic/4";
import { DayOfWeek, isWeekend } from "./basic/5";
import { mango, poly } from "./basic/6";
import { page1, page2 } from "./basic/7";

// 1.ts
console.log(age); // 50
console.log(username); // "Max"
console.log(toggle); // true
console.log(empty); // null
console.log(callback(10)); // 110

// 2.ts
console.log(person[0]); // "Max"
console.log(person[1]); // 21

// 3.ts
let value: string | number;
let status: "enable" | "disable";

// Присвоюємо допустимі значення
value = "Hello";
console.log(value); // "Hello"

value = 42;
console.log(value); // 42

status = "enable";
console.log(status); // "enable"

status = "disable";
console.log(status); // "disable"

// 4.ts
showMessage("Hello, TypeScript!");

console.log(calc(5, 10)); // 15

try {
  customError(); // Вызовет ошибку
} catch (error) {
  console.error("Caught error:", error); // Логирует ошибку
}

// 5.ts
console.log(isWeekend(DayOfWeek.Monday)); // false
console.log(isWeekend(DayOfWeek.Saturday)); // true
console.log(isWeekend(DayOfWeek.Sunday)); // true

// 6.ts
console.log(mango); // { name: "Mango", age: 30, email: "john@example.com", address: { city: "New York", country: "USA" }}
console.log(poly); // { name: "Poly", age: 25, email: "poly@example.com" }

// 7.ts
console.log(page1);
console.log(page2);
