//Task 1
// Моделирование Задержки Выполнения:
// Напишите функцию, которая принимает число в качестве входных данных и
// возвращает промис, который разрешается после указанного количества миллисекунд.
// Используйте эту функцию, чтобы создать задержку в 2 секунды, а затем
// зарегистрировать сообщение в консоли после разрешения промиса.

const myFunction = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Результат консоли ${seconds / 1000} секунды`)
        }, seconds)
    })
}
myFunction(3000).then((value) => {
    console.log(value)
}).catch((error) => {
    console.log('error', error)
})

//Task 2
const firstTask = (sec) => {
    return new Promise((resolve) => {
        resolve("Первая задача");
    }, sec);
}


const secondTask = (sec) => {
    return new Promise((resolve) => {
        resolve("Вторая задача");
    }, sec);
}
firstTask(2000).then((value) => {
    console.log(value)
    return secondTask(3000)
}).then((value) => {
    console.log(value)
})

///Task 3
// Использование Promise.all():
// Создайте три отдельные функции, каждая из которых возвращает промис, который
// разрешается строковым сообщением после указанной задержки. Используйте
// `Promise.all()` для выполнения всех трех функций параллельно и зарегистрируйте
// массив разрешенных сообщений после разрешения всех промисов

const firstFunc = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Первая функция");
        }, seconds);
    });
};
const secondFunc = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Вторая функция");
        }, seconds);
    });

}

const thirdFunc = (seconds) => {
    return new Promise((resolve) => {
        resolve("Третья функция");
    }, seconds);
};
Promise.all([firstFunc(2000), secondFunc(3000), thirdFunc(4000)]).then((value) => {
    console.log('value', value)
})

//Task 4
// Напишите две функции, `fastTask` и `slowTask`, каждая из которых возвращает
// промис, который разрешается строковым сообщением после различных временных
// задержек (один быстрый, другой медленный). Используйте `Promise.race()` для
// выполнения обеих функций и зарегистрируйте результат промиса, который
// разрешается первым.
const fastTask = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Быстрая функция')
        }, seconds)
    })

}
const slowTask = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Медленная функция')
        }, seconds)
    })

}
Promise.race([fastTask(2000),slowTask(4000)]).then((value)=>{
    console.log(value)
    return slowTask(4000)
}).then((value)=>{
    console.log(value)
})


