let dataKey = ['dumb','ways','the','best'];
let word = 'dumbways';

function matching(data, word) {
   for (let i = 0; i < data.length; i++) {
      console.log(`${data[i]} => ${word.includes(data[i])}`);
   }
   // console.log(`${data.map(x => x + ' => ' + word.includes(x) + '\n')}`)
}

console.log(matching(dataKey, word));