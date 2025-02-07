import "./style.css";
import { age, username, toggle, empty, callback } from "./basic/1";
import { person } from "./basic/2";
import { showMessage, calc, customError } from "./basic/4";
import { DayOfWeek, isWeekend } from "./basic/5";
import { mango, poly } from "./basic/6";
import { page1, page2 } from "./basic/7";
import { fetchData } from "./generics/1";
import { compare } from "./generics/2";
import { merge } from "./generics/3";
import { createOrUpdateUser } from "./generics/4";
import { UserRole, RoleDescription } from "./generics/5";
import Params from "./generics/6";

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

// generics
// 1.ts
interface User {
  id: number;
  name: string;
  email: string;
}

async function loadUserData() {
  try {
    const user = await fetchData<User>(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    console.log(user);
  } catch (error) {
    console.error(error);
  }
}

loadUserData();

// 2.ts
const obj1 = { name: "Box", position: 1, color: "Red", weight: 5 };
const obj2 = { name: "Ball", position: 2, color: "Blue", weight: 10 };

const result = compare(obj1, obj2);
console.log(result);

// 3.ts
const objA = { name: "Alice", age: 25 };
const objB = { job: "Developer", country: "USA" };

const mergedObj = merge(objA, objB);
console.log(mergedObj);

// 4.ts
// Обновление только email и пароля
createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

// Обновление только имени
createOrUpdateUser({ name: "Alice" });

// Обновление всех данных пользователя
createOrUpdateUser({
  name: "Alice",
  surname: "Johnson",
  email: "alice@mail.com",
  password: "securePass",
});

// 5.ts
console.log(RoleDescription[UserRole.admin]); // "Admin User"
console.log(RoleDescription[UserRole.editor]); // "Editor User"
console.log(RoleDescription[UserRole.guest]); // "Guest User"

// 6.ts
const testParams: Params = {
  email: "user@example.com",
  firstName: "Alice",
  lastName: "Smith",
  phone: "9876543210",
};

console.log(testParams);
