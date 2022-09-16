// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде 
// «Ключ — Х, значение — Y».

let myMap = new Map()
myMap.set("child", "little");
myMap.set("age", 2);
myMap.set(true, 1354);
for (let name of myMap) {
  console.log(`Ключ - ${name[0]}, значение - ${name[1]}`)
}