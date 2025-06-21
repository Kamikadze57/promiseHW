// Напиши функцію delay(ms), яка повертає проміс, що переходить в стан "resolved"
// через ms мілісекунд. Значенням промісу, яке виповнилося має бути та кількість мілісекунд,
// яку передали під час виклику функції delay.

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

const logger = (time) => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

// Перепиши функцію toggleUserState() так, щоб вона не використовувала callback-функцію callback,
// а приймала всього два параметри allUsers і userName і повертала проміс.

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve) => {
    const updatedUsers = allUsers.map((user) => (user.name === userName ? { ...user, active: !user.active } : user));
    resolve(updatedUsers);
  });
};

console.log("--- Початковий стан ---");
console.table(users);

console.log("\n--- Зміна стану Mango ---");
toggleUserState(users, "Mango").then((updatedUsersAfterMango) => {
  console.table(updatedUsersAfterMango);
});

console.log("\n--- Зміна стану Lux ---");
toggleUserState(users, "Lux").then((updatedUsersAfterLux) => {
  console.table(updatedUsersAfterLux);
});
