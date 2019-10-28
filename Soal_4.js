// -	Uang yang harus dibayar : 15000 
// -  Diskon : 15000
// -  Kembalian  : 15000

// DumbWaysAsik, potongan 50%, minimal uang belanja 20000, Maksimal diskon 20000
// DumbWaysMantap, potongan 30%, minimal uang belanja 50000, maksimal diskon 40000

let bayar = 0;
let diskon = 0;
let kembalian = 0;

let DumbWaysAsik = function() {
}

let DumbWaysMantap = function() {
}

function hitungVoucher(voucher, belanja) {
   if (voucher === DumbWaysAsik && belanja >= 20000) {
      diskon = belanja * 0.5 > 20000 ? 20000 : belanja * 0.5;
      bayar = belanja - diskon;
      kembalian = belanja - bayar;
   } 

   if (voucher === DumbWaysMantap && belanja >= 50000) {
      diskon = belanja * 0.3 > 40000 ? 40000 : belanja * 0.3;
      bayar = belanja - diskon;
      kembalian = belanja - bayar;
   }
   return `- Uang yang harus dibayar : ${bayar}\n- Diskon : ${diskon}\n- Kembalian : ${kembalian}`;
}

console.log(hitungVoucher(DumbWaysAsik, 30000));
console.log('======')
console.log(hitungVoucher(DumbWaysMantap, 90000));