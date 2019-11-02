let result = '';
let harga = 0;

function A() {
   harga = 3000;
   return harga;
};

function B() {
   harga = 3500;
   return harga;
};

function C() {
   harga = 5000;
   return harga;
};

function hitungBarang(kualitas, quantity) {
   if (kualitas === A) {
      if (quantity > 10) {
         result += `- Total Harga Barang : ${A() * quantity}\n- Potongan : ${500 * quantity} \n- Total yang harus dibayar : ${(A() * quantity) - (500 * quantity)}`
      } else {
         result += `- Total Harga Barang : ${A() * quantity}\n- Potongan : 0\n- Total yang harus dibayar : ${(A() * quantity) - 0}`
      }
   } else if (kualitas === B) {
      if (quantity > 5) {
         result += `- Total Harga Barang : ${B() * quantity}\n- Potongan : ${(B() * quantity) * 0.5} \n- Total yang harus dibayar : ${(B() * quantity) - ((B() * quantity) * 0.5)}`
      } else {
         result += `- Total Harga Barang : ${B() * quantity}\n- Potongan : 0\n- Total yang harus dibayar : ${(B() * quantity) - 0}`
      }
   } else if (kualitas === C) {
         result += `- Total Harga Barang : ${C() * quantity}\n- Potongan : 0\n- Total yang harus dibayar : ${(C() * quantity) - 0}`
      }
   return result;
}

console.log(hitungBarang(C, 10));