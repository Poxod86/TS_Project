// Number

// let a = 1;
// let b = -10;
// let c = 3.5;
// let d = 10_000;

// Сложение
let revenue: number = 1000;
let bonus: number = 500;

let res: number = revenue + bonus;
console.log(res);

// Типы в функциях

function getFullName(firstname:string , surname:string): string {
	return `${firstname} ${surname}`;
}
// для стрелочной функции
const getFullNameArrow = (firstname:string , surname:string): string => {
	return `${firstname} ${surname}`;
}

console.log(getFullName('Сергей', 'Сергеевич'));

// Объекты

function getFullNameObj(userEntitty: {firstname:string, surname:string}): string {
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
 const skills: string[] = ['Dev', 'DevOps'];

 for (const skill of skills) {
	console.log(skill.toLowerCase());
 }

 // Tuples (Кортежи)

 const sk: [number, string] = [1, 'Dev'];
 const idSk = sk[0];
 const nameSk = sk[1];
 //или
 const [id, skillname] = sk; //Деструктаризация

// использование спредоператоров на типах
const arr: [number, string, ...boolean[]] = [1, 'Dev', true, true, false];
for (const item of arr) {
	console.log(item);
};

// Readonly
// предотвращает изменять массив (только чтение)

const array: readonly [number, string] = [1, 'aaa'];
const arrays: ReadonlyArray<string> = ['a','b']; // Альтернативная запись 

// Enums

enum StatusCode {
	SUCCESS = 1,
	IN_PROCESS,
	FALLED
}

const result = {
	messege: 'Платеж успешен',
	statusCode: StatusCode.SUCCESS
};

// 1- успех
// 2- в процессе
// 3 - отклонен

if (result.statusCode === StatusCode.SUCCESS) {
	console.log(result.messege)
}



