const fs = require('fs');
const path = require('path');

// Create a new file
fs.writeFileSync('9_newfile.txt', 'This is a new file.', 'utf8');
console.log('File created: newfile.txt');

// Read file content
const fileContent = fs.readFileSync('9_newfile.txt', 'utf8');
console.log('File content:', fileContent);

// Append content to an existing file
fs.appendFileSync('9_newfile.txt', '\nAdditional content appended.');
console.log('Content appended to file.');

// Rename a file
fs.renameSync('9_newfile.txt', '9_renamedfile.txt');
console.log('File renamed: 9_renamedfile.txt');

// List files and directories in a folder
const folderPath = './';
const filesAndDirs = fs.readdirSync(folderPath);
console.log('Files and directories in', folderPath + ':');
filesAndDirs.forEach((item) => {
  const itemPath = path.join(folderPath, item);
  const isDirectory = fs.lstatSync(itemPath).isDirectory() ? '[DIR]' : '[FILE]';
  console.log(`${isDirectory} ${item}`);
});

// Delete a file
fs.unlinkSync('9_renamedfile.txt');
console.log('File deleted: renamedfile.txt');
