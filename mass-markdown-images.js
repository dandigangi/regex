// Photoshop batch script create file names; easy output here to copy/paste into blog post w/ template literal
const fs = require('fs');

const max = 73;
let strs = '';

for (let i = 42; i < max; i++) {
  strs += `![LeadDev West Coast Photos - ${i}](/static/images/blog/events/leaddev-west-oct-23/leaddev-west-oct-23-${i}.png)\n\n`;
}

console.log(strs);
// fs.writeFile('./imageMd.txt');
