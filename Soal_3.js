let result = '';

function cetak_gambar(bilangan) {
   for (let i = 0; i < bilangan; i++) {
      for (let j = 0; j < bilangan; j++) {
         if (i % 2 !== 0) {
            if (j % 2 !== 0) {
               result += '=  ';
            } else if (j === bilangan - 1) {
               result += '*\n';
            } else {
               result += '*  ';
            }
         } else {
            if (j === Math.floor(bilangan / 2)) {
               result += '=  '
            } else if (j === bilangan - 1) {
               result += '*\n';
            } else {
               result += '*  ';
            }
         }      
      }
   }
   return result;
};

console.log(cetak_gambar(5));