function array_multisort(array) {  
   let temp2 = '';
   for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
         for (let k = 0; k < array[i].length; k++) {
            if (array[i][j] < array[i][k]) {
               temp2 = array[i][j];
               array[i][j] = array[i][k];
               array[i][k] = temp2;
            }
         }
      }
   }
   console.log(array)

   let temp;
   for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
         if (array[i].length < array[j].length) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
         }
      }
   }
   console.log(array)
}


let data1 = [
   ['a','c','b','e','d'],
   ['g','e','f']
];

let data2 = [
   ['g','h','i','j'],
   ['a','c','b','e','d'],
   ['g','e','f']   
];

console.log(array_multisort(data1));
console.log(array_multisort(data2));