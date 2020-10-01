// файл (анонімний метод main) почне роботу в CallStack
// Далі відбудеться декларація всіх функцій

//Перший вивід
console.log("the first");
//Вивід через 5 секунд, як стек звільниться
setTimeout(function () {
    console.log("fourth");
},5000);
//Вивід одразу як стек звільниться
setTimeout(function () {
    console.log("third");
}, 0);
//Другий вивід
console.log("another");

