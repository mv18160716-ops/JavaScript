//#yHAwJOyiC
// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log('Task 1');
let numbers = [34, 56, 32, 67, 12, 98, 23, 57, 48, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//#GamKju89ob
// – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
console.log('Task 2');
let fruits = ['apple', 'banana', 'orange', 'grape', 'lemon', 'peach', 'cherry', 'melon', 'kiwi', 'pear'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//#Bm76xmg
// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log('Task 3');
let arr = [56, 34, 'apple', true, 76, 'cherry', 87, false, 67, 'banana'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// #u3vmD0YJXh
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
console.log('Task 4');
let mixed = [10, "hello", true, 25, "world", false, 3.14, "JavaScript", true, 0];
for (let i = 0; i < mixed.length; i++) {
    if (typeof mixed[i] === 'boolean') {
        console.log(mixed[i]);
    }
}

// #9stMq2ou
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log('Task 5');
let mixed_2 = [10, "hello", true, 25, "world", false, 3.14, "JavaScript", true, 0];
for (let i = 0; i < mixed_2.length; i++) {
    if (typeof mixed_2[i] === 'number') {
        console.log(mixed_2[i]);
    }
}

// #mK4pmM4
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log('Task 6');
let mixed_3 = [10, "hello", true, 25, "world", false, 3.14, "JavaScript", true, 0];
for (let i = 0; i < mixed_3.length; i++) {
    if (typeof mixed_3[i] === 'string') {
        console.log(mixed_3[i]);
    }
}


