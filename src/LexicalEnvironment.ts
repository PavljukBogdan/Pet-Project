//Лексичне оточення
//globalLE = {outerLE: null, message: "It is Lexical environment"; value: 5;}

const value = 5;
const message = "It is Lexical environment";

const logMessage = () => {
    //logLE = {outerLE: outerLE, value: 10;}
    const value = 10;

    const innerFn = () => {
        //innerLE = {outerLE: logLE}
        console.log(value);
    };
    innerFn();
    console.log(message);
}

logMessage();

