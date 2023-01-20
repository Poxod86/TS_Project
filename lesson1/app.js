"use strict";
// Number
// let a = 1;
// let b = -10;
// let c = 3.5;
// let d = 10_000;
// Сложение
let revenue = 1000;
let bonus = 500;
let res = revenue + bonus;
console.log(res);
// Типы в функциях
function getFullName(firstname, surname) {
    return `${firstname} ${surname}`;
}
// для стрелочной функции
const getFullNameArrow = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
console.log(getFullName('Сергей', 'Сергеевич'));
// Объекты
function getFullNameObj(userEntitty) {
    return `${userEntitty.firstname} ${userEntitty.surname}`;
}
const user = {
    firstname: 'Sergey',
    surname: 'Sergeevich',
    city: 'Saratov',
    age: 39,
    skills: {
        dev: true,
        soft: false
    }
};
console.log(getFullNameObj(user));
// Массивы
const skills = ['Dev', 'DevOps'];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
// Tuples (Кортежи)
const sk = [1, 'Dev'];
const idSk = sk[0];
const nameSk = sk[1];
//или
const [id, skillname] = sk; //Деструктаризация
// использование спредоператоров на типах
const arr = [1, 'Dev', true, true, false];
for (const item of arr) {
    console.log(item);
}
;
// Readonly
// предотвращает изменять массив (только чтение)
const array = [1, 'aaa'];
const arrays = ['a', 'b']; // Альтернативная запись 
// Enums
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FALLED"] = 3] = "FALLED";
})(StatusCode || (StatusCode = {}));
const result = {
    messege: 'Платеж успешен',
    statusCode: StatusCode.SUCCESS
};
// 1- успех
// 2- в процессе
// 3 - отклонен
if (result.statusCode === StatusCode.SUCCESS) {
    console.log(result.messege);
}
