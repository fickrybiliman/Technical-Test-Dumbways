
let result = '';

function hitungKembalian (belanja, bayar) {
   let kembalian = (belanja > 200000) ? ((bayar - belanja) + (belanja * 0.1)) : (bayar - belanja);
   console.log(kembalian)
   while (kembalian > 0) {
      if (kembalian / 50000 >= 1) {
         result += `${Math.floor(kembalian / 50000)} x 50.000\n` ;
         kembalian %= 50000;
      } else if (kembalian / 20000 >= 1) {
         result += `${Math.floor(kembalian / 20000)} x 20.000\n` ;
         kembalian %= 20000;
      } else if (kembalian / 10000 >= 1) {
         result += `${Math.floor(kembalian / 10000)} x 10.000\n` ;
         kembalian %= 10000;
      } else if (kembalian / 5000 >= 1) {
         result += `${Math.floor(kembalian / 5000)} x 5.000\n` ;
         kembalian %= 5000;
      } else if (kembalian / 2000 >= 1) {
         result += `${Math.floor(kembalian / 2000)} x 2.000\n` ;
         kembalian %= 2000;
      } else if (kembalian / 1000 >= 1) {
         result += `${Math.floor(kembalian / 1000)} x 1.000\n` ;
         kembalian %= 1000;
      } else if (kembalian / 500 >= 1) {
         result += `${Math.floor(kembalian / 500)} x 500\n` ;
         kembalian %= 500;
      } else {
         result += `${kembalian} Disumbangkan karena tidak ada pecahan dibawah 500`;
         kembalian -= kembalian;
      }
   }

   return result;
}

console.log(hitungKembalian(110700, 200000));