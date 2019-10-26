let dataKey = ['dumb','ways','the','best'];
let word = 'dumbways';
let result = ''

function check(data, word) {
   for (let i = 0; i < data.length; i++) {
      if (i === data.length - 1) {
         result += `${data[i]} => ${word.includes(data[i])}`;
      } else {
         result += `${data[i]} => ${word.includes(data[i])}\n`;
      }
   }
   // console.log(`${data.map(x => x + ' => ' + word.includes(x) + '\n')}`)
   return result;
}

console.log(check(dataKey, word));