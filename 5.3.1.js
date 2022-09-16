const anyValue = prompt ("Введите значение");
let anyRes = +anyValue;
let isRes = typeof(anyRes);
let res = anyRes % 2;
if (isNaN(anyRes)) {
  console.log("Упс, кажется, вы ошиблись");
} 
else if (anyRes == "0") {
  console.log("Введите значение");
} 
else {
  if (isRes = "number" && res === 0) {
    console.log("Введенное число четное")
  }
  else if (isRes = "number") {
    console.log("Введенное число нечетное")
  }
}