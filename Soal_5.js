const chars = [..."abcdefghijklmnopqrstuvwxyzZ0123456789"];
let result = '';

function generate(times) {
   // return [...Array(16)].map(i => chars[Math.random() * chars.length | 0]).join('');
   for (let i = 0; i < times; i++) {
      for (let j = 0; j < 20; j++) {
         if (j === 4 || j === 9 || j === 14) {
            result += '-'
         } else if (j === 19) {
            result += '\n';
         } else {
            result += chars[Math.random() * chars.length | 0]
         }
      }
   }
   return result.trim();
}

console.log(generate(3));

