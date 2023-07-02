// *******************array.prototype.at()**********************


// const array1 = [5,12,8,130,44];

// let index= 2;

// console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`)

// console.log(`item ${array1.at(index)}`)


// ******************Array.prototype.concat()**************

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);

// ******************Array.prototype.copyWithin()******************


// const array1 = ['a','b','c','d','e'];

// console.log(array1.copyWithin(3,4));

// ****************Array.prototype.entries()*************


// const array1 = ['a','b','c'];

// const iterator1 = array1.entries();

// console.log(iterator1.next().value);

// console.log(iterator1.next().value);

// ******************Array.prototype.every()*****************


// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 80, 10, 13];

// console.log(array1.every(isBelowThreshold));

// **********************Array.prototype.fill()*************

// const array1 = [1,2,3,4];

// console.log(array1.fill(6))

// ***********************Array.prototype.filter()****************


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length < 6);

// console.log(result);

// ************Array.prototype.find()****************

// const array1 = [12, 9, 8, 130, 44];

// const found = array1.find(element => element > 10);

// console.log(found);

// ************Array.prototype.findIndex()**********


// const array1 = [5, 14, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));

// ***************Array.prototype.findLast()*************

// const array1 = [5, 12, 50, 130, 48];

// const found = array1.findLast((element) => element > 45);

// console.log(found);

// ********************Array.prototype.findLastIndex()********

// const array1 = [5, 12, 50, 130, 44];

// const isLargeNumber = (element) => element > 45;

// console.log(array1.findLastIndex(isLargeNumber));

// *****************Array.prototype.flat()***************


// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());

// const arr2 = [0, 1, 2, [[[3, 4]]]];

// console.log(arr2.flat(2));

// **************Array.prototype.flatMap()************

// const arr1 = [1, 2, 1];

// const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

// console.log(result);


// *******************Array.prototype.forEach()**********

// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));

// *****************Array.from()**************

// console.log(Array.from('foo'));

// console.log(Array.from([1, 2, 3], x => x + x));

// *****************Array.prototype.group()************


// const inventory = [
//     { name: "asparagus", type: "vegetables", quantity: 5 },
//     { name: "bananas", type: "fruit", quantity: 0 },
//     { name: "goat", type: "meat", quantity: 23 },
//     { name: "cherries", type: "fruit", quantity: 5 },
//     { name: "fish", type: "meat", quantity: 22 },
//   ];

//   const result = inventory.group(({ type }) => type);


// ********************Array.prototype.includes()************

// const array1 = [1, 2, 3];

// console.log(array1.includes(2));

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));

// console.log(pets.includes('do'));

// ***************Array.prototype.indexOf()***********

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));

// console.log(beasts.indexOf('bison', 2));

// ********************Array.isArray()***********************


// console.log(Array.isArray([1, 3, 5]));

// console.log(Array.isArray('[]'));

// ***************Array.prototype.join()**************************

// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// console.log(elements.join(''));


// ***************************Array.prototype.keys()**************************

// const array1 = ['a', 'b', 'c'];
// const iterator = array1.keys();

// for (const key of iterator) {
//   console.log(key);
// }

// *****************************Array.prototype.lastIndexOf()*********************


// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

// console.log(animals.lastIndexOf('Dodo'));

// console.log(animals.lastIndexOf('Tiger'));

// ************************Array.prototype.map()*********************

// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);

// *********************Array.of()*******************************

// console.log(Array.of('foo', 2, 'bar', true));


// console.log(Array.of());


// *******************************Array.prototype.pop()**************************

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// console.log(plants.pop());

// console.log(plants);

// ********************************Array.prototype.push()******************************

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('cows');
// console.log(count);

// console.log(animals);

// ****************************Array.prototype.reduce()***************************

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);

// ************************Array.prototype.reduceRight()*********************

// const array1 = [[0, 1], [2, 3], [4, 5]];

// const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

// console.log(result);

// ***************************Array.prototype.reverse()************************

// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);

// const reversed = array1.reverse();
// console.log('reversed:', reversed);

// **********************************Array.prototype.shift()**********************

// const array1 = [1, 2, 3];

// const firstElement = array1.shift();

// console.log(array1);

// ************************************Array.prototype.slice()******************************

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));

// *************************************Array.prototype.some()************************

// const array = [1, 2, 3, 4, 5];

// // Checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));

// *******************************Array.prototype.sort()************************

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);

// *******************************Array.prototype.splice()***********************

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);

// **********************************Array.prototype.toLocaleString()***************

// const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
// const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

// console.log(localeString);

// *******************************Array.prototype.toReversed()********************

// const items = [1, 2, 3];
// // console.log(items); // [1, 2, 3]

// const reversedItems = items.toReversed();
// console.log(reversedItems); // [3, 2, 1]
// console.log(items);

// *****************************Array.prototype.toSorted()*********************

// console.log(["a", "c", , "b"].toSorted());

// ******************************Array.prototype.toString()**************

// const array1 = [1, 2, 'a', '1a'];

// console.log(array1.toString());

// *************************Array.prototype.unshift()*********************

// const array1 = [1, 2, 3];

// console.log(array1.unshift(4, 5));
// // Expected output: 5

// console.log(array1);


// ****************************Array.prototype.values()*******************

// const array1 = ['a', 'b', 'c'];
// const iterator = array1.values();

// for (const value of iterator) {
//   console.log(value);
// }

// ***********************Array.prototype.with()******************



