let input = [1, 2, 3, 4, 5];
let resultArray = [];
let result = '';

function totalElement(arr) {
   for (let i = 0; i < arr.length; i++) {
      resultArray.push(arr.reduce((acc, cur) => acc + cur) - arr[i]);
      result += `angka ${arr[i]} = ${arr.reduce((acc, cur) => acc + cur) - arr[i]} \n`
   }
   result += `Maka angka terkecilnya dan terbesarnya adalah ${Math.min(...resultArray)} dan ${Math.max(...resultArray)}`
   return result;
}

console.log(totalElement(input));