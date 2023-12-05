// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let  rectangleArea= (a, b) => a*b;
console.log(rectangleArea(10,10));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleArea = (r) => Math.PI * r * r;
console.log(circleArea   (10));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderArea = (h, r) => 2 * Math.PI * r * h;
console.log(cylinderArea(10, 10))
// - створити функцію яка приймає масив та виводить кожен його елемент
let coursesTitleArray = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];
let resultArr = (array)=>{
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}
    resultArr(coursesTitleArray)
    // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let  makeParagraph = (text) => document.write(`<p>${text}</p>`)
makeParagraph("Lorem ipsum")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let funLI = (text) =>{
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)

    }
    document.write(`</ul>`)
}
funLI("lorem ipsum")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let funList = (text, num) =>{
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>`+`${text}`+`</li>`);
    }
    document.write(`</ul>`)
}
funList("lorem ipsum", 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let typeElement = (arreyTypeElement) =>{
    document.write(`<ul>`)
    for (let i = 0; i < arreyTypeElement.length; i++) {
        const arreyTypeElementElement = arreyTypeElement[i];
        document.write(`<li>${arreyTypeElementElement}</li>`)
    }
    document.write(`</ul>`)
}
typeElement([1, "lorem psum", false ])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const users = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Bob Johnson', age: 22 },
    { id: 4, name: 'Alice Williams', age: 28 },
    { id: 5, name: 'Charlie Brown', age: 35 },
    { id: 6, name: 'Eva Davis', age: 29 },
    { id: 7, name: 'Frank White', age: 31 },
    { id: 8, name: 'Grace Lee', age: 26 },
    { id: 9, name: 'Henry Harris', age: 33 },
    { id: 10, name: 'Ivy Robinson', age: 27 }
];
let usersArr = (array) =>{
    for (const arrayElement of array) {
        document.write(`<div>`+`ID: ${arrayElement.id}, ` + `Name: ${arrayElement.name}, ` + `Age: ${arrayElement.age}  `+`<div>`)
    }
}
usersArr(users)
// - створити функцію яка повертає найменьше число з масиву
let mixNumber = [4, 1, 3,2,5,6,7]
let minNumber = (numArr) =>{
    let minNum = numArr[0]
    for (const numArrElement of numArr) {
        if (numArrElement < minNum){
            minNum = numArrElement

        }
    }
    return minNum
}
console.log(minNumber(mixNumber));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (arr)=>{
    let zero  = 0;
    for (const arrElement of arr) {
        zero += arrElement;
    }
    return zero
};
console.log(sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
let swap = (arr, index1 , index2) =>{
    let num = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num;
    return arr
}
console.log(swap([11, 22, 33, 44], 0, 1));
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    for (const curr of currencyValues) {
        if (curr.currency === exchangeCurrency) {
             return  sumUAH / curr.value;

        }
    }
}
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));