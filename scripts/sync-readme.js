#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { formatReadmeBio } = require('../CV.js');

const readmePath = path.join(__dirname, '..', 'README.md');
const start = '<!-- cv:start -->';
const end = '<!-- cv:end -->';

const header = `<!-- This block is generated from CV.js. Run: node scripts/sync-readme.js -->

`;

const bio = formatReadmeBio();
const block = `${start}\n${bio}\n${end}`;

let readme = fs.readFileSync(readmePath, 'utf8');

if (readme.includes(start) && readme.includes(end)) {
  const pattern = new RegExp(`${start}[\\s\\S]*?${end}`);
  readme = readme.replace(pattern, block);
} else {
  readme = `${readme.trim()}\n\n${block}\n`;
}

fs.writeFileSync(readmePath, `${readme.trim()}\n`);
console.log('README.md profile section synced from CV.js');
