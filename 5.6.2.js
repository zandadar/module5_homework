// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов 
// в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только 
// числа, но и, например, знаки, null и так далее.

let arr = ["bye", null, 3, 5, 90, 12, 0, "hi", 23];
let evenNum = 0;
let oddNum = 0;
let zeroNum = 0;
let str = 0;
let nullNum = 0;
for (let i=0; i < arr.length; i++) 
{
  if (typeof arr[i] === "string") {
    str += 1;
  }
  
  else if (arr[i] === 0) {
    zeroNum += 1;
  }
  else if (arr[i] === null) {
    nullNum += 1;
  }
  else if (arr[i] % 2 === 0) {
    evenNum += 1;
  }
  else {
    oddNum += 1;
  }
}

console.log(`Количество четных элементов в массиве - ${evenNum}`)
console.log(`Количество нечетных элементов в массиве - ${oddNum}`)
console.log(`Количество нулевых элементов в массиве - ${zeroNum}`)
console.log(`Количество null элементов в массиве - ${nullNum}`)
console.log(`Количество строчных элементов в массиве - ${str}`)