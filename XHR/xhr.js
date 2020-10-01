//xhr на запит

const requestURL = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url) {
    //повертаємо проміс
    return new Promise((resolve, reject)=> {
        //створюємо змінню через конструктор глобального класу XMLHttpRequest
        const xhr = new XMLHttpRequest();
//Відкриваємо нове з'єднання
        xhr.open(method,url);
//створюємо моніторинг
        xhr.onload = () => {
            if (xhr.status >= 400) {
                console.error(xhr.response)
            } else {
                console.log(JSON.parse(xhr.response))
            }
        }
//моніторимо помилки
        xhr.onerror = () => {
            console.log(xhr.response)
        }
//Відправляємо запит
        xhr.send();
    })
}
sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))

