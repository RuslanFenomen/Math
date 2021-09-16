let a = Number(prompt('Введите число  "а"'))
let symbol = prompt('Введите математический символ: \n + ,  - ,  * ,  / ,  ^')
let b = Number(prompt('Введите число  "b"'))
let c

let plusIndx = symbol.indexOf("+")
let minusIndx = symbol.indexOf("-")
let multiplyIndx = symbol.indexOf("*")
let divideIndx = symbol.indexOf("/")
let exponentiationIndx = symbol.indexOf("^")


if (plusIndx >= 0) {
   c = a + b
   alert(`Решение: \n ${a} + ${b} = ${c}`)
} else {
   if (minusIndx >= 0) {
      c = a - b
      alert(`Решение: \n ${a} - ${b} = ${c}`)
   }
   else {
      if (multiplyIndx >= 0) {
         c = a * b
         alert(`Решение: \n ${a} * ${b} = ${c}`)
      }
      else {
         if (divideIndx >= 0) {
            c = a / b
            alert(`Решение: \n ${a} / ${b} = ${c}`)
         }
         else {
            if (exponentiationIndx >= 0) {
               c = Math.pow(a, b)
               alert(`Решение: \n ${a} / ${b} = ${c}`)
            }
            else {
               alert('Ошибка!')
            }
         }
      }
   }
}





