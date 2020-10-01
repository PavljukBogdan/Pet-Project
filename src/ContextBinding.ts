
const tony = {
    name: 'Tony',
    lastName: 'Stark',
    age: 40,

     logInfo: function () {
        //прив'язка контексту ключовим словом this до контексту перемінної tony
         console.group(`${this.name} info`);
         console.log(`Name is ${this.name}, last name is ${this.lastName}, age is ${this.age}`);
         console.groupEnd();
    }
}

tony.logInfo();

const joon = {
    name: 'Joon',

    logInfo: function (lastName, age) {
        //прив'язка контексту ключовим словом this до контексту перемінної joon
        console.group(`${this.name} info`);
        console.log(`Name is ${this.name}, last name is ${lastName}, age is ${age}`);
        console.groupEnd();
    }
}

//прив'язка контексту за допоиогою функції bind
joon.logInfo.bind(joon, "Snoy", 27)();
//прив'язка контексту за допоиогою функції apply
joon.logInfo.apply(joon, ["Snoy", 30]);
//прив'язка контексту за допоиогою функції call
joon.logInfo.call(joon, "Snoy", 35);

