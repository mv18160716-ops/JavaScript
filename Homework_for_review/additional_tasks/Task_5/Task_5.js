//#0pm3EyTKy9
// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
console.log('Task 1');
let arr = [];
arr[0] = 45;
arr[1] = "hello";
arr[2] = true;
arr[3] = 25;
arr[4] = "JavaScript";
arr[5] = false;
arr[6] = 3.14;
arr[7] = "world";
arr[8] = 100;
arr[9] = null;
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// #mDMWMW5a
// – Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
document.write('Task 2' + '<br>')
console.log('Task 2');
for (let i = 1; i <= 10; i++) {
    console.log(i);
    document.write(i + ' ')
}

document.write('<br>')

// #4sXhaa5YMM
// – Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
document.write('Task 3' + '<br>')
console.log('Task 3');
for (let i = 1; i <= 100; i++) {
    console.log(i);
    document.write(i + ' ')
}

document.write('<br>')

// #s24slNyz7
// – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
document.write('Task 4' + '<br>')
console.log('Task 4');
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
    document.write(i + ' ')
}

document.write('<br>')

// #zananT5FR1
// – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
document.write('Task 5' + '<br>')
console.log('Task 5');
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(i + ' ')
    }
}

document.write('<br>')

// #Tfrwls7FM
// – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
document.write('Task 6' + '<br>')
console.log('Task 6');
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(i + ' ')
    }
}





















