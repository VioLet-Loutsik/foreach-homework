// ******************* 1 **********************

// >>> forEach()
// Метод forEach() выполняет функцию  один раз для каждого элемента, 
// находящегося в массиве.


// *****************************************


// sintaksis

// const words = ['a', 'b', 'c'];

// words.forEach((word) => {
//     console.log(word)
// });


// word = const words = ['a', 'b', 'c'];
// words.forEach((word) => {
//     console.log(word)
// });
// word - параметр через который виден каждый элемент массива

// *******************************************


// 1)
// const students = ['John', 'Sara', 'Jack'];
// используя forEach выведите элементы массива в console.log()
// но перед кждым добавьте 'hi'

// Результат:
// hi John
// hi Sara
// hi Jack

    const students = ['John', 'Sara', 'Jack'];
    students.forEach(element => {
        console.log('hi' + ' ' + element);
    });

 
// 2)
// Прочитай
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// используя forEach и метод push отправьте элементы из arrayItems  в copyItems 
const arrayItems = ['item1', 'item2', 'item3'];
const copyItems = [];
Array.prototype.push.apply(copyItems, arrayItems);
console.log(copyItems);

// 3)
//  a) Перебрать каждый элемент массива с помощью forEach и вывести его в консоль после умножения на 3.
    
//  b)Используйте метод includes, чтобы узнать, существует ли число 8 в массиве.
    const scores = [5, 8, 3, 10, 7];
    scores.forEach(function(num) {
            let result = num * 3 
                console.log(result);
            }
    )

    result = scores.includes(8)
    console.log(result);

// *********************************************************************

    let numbers = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
numbers.forEach(function(number, numberid){
    if(number % 2 == 0){  //выведет четные
        console.log(number);
    }
}
)
// *********************************************************************
// Теория:
// Второй параметр
// word = const words = ['a', 'b', 'c'];
// words.forEach((word, index) => {
//     console.log(word)
// });
// как уже увидели word выводит  каждый элемент массива
// index выводит порядковый номер каждого элемента массива
// **********************************************************************
// 4)
const courses = ['Biology', 'Mathematics', 'Chemistry', 'Physics'];
courses.forEach((x, index) => {
    console.log(index +':', x);
});


// Выведите в console.log() элементы массива и их порядковый номер
//  Результат:
// 0: Biology
// 1: Mathematics
// 2: Chemistry
// 3: Physics
// ======================================================================
// 5)
// const grade = [33, 90, 78, 94, 56, 88, 97]; 
// const grades = []; 

// используя forEach и метод push отправьте элементы из grades в grades. 
// Но только те кто больше 70

// 6)
// выведите массив на странице в браузереы
// (создайте в html div и там отобразите)
const actors = [
	{ firstName: 'Charles', lastName: 'Chaplin' },
	{ firstName: 'Gary', lastName: 'Cooper' },
	{ firstName: 'Cary', lastName: 'Grant' },
]

let showlist = document.querySelector('.showlist')
// не понимаю почему 3 раза повторяет див если селектор находится сне функции
actors.forEach(element => {
let actor = `
<div class="secondlist">
<p>${element.firstName} ${element.lastName}</p>
</div>
`
showlist.innerHTML += actor;
})   


// 7) Eсть массив [5, 6, 7, 8, 9]. 
//      Создайте новый массив, состоящий из квадратов этих чисел
    // [5, 6, 7, 8, 9]
//     дополнительная информация для решения 7-й задачи
//     -> https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    const numList = [5, 6, 7, 8, 9]
    numList.forEach(element => {
        let result = element * element 
        console.log(result);
        }
    )


