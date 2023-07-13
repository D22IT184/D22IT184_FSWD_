const fs = require('fs');

function compareFiles(file1Path, file2Path) {
  try {
    const file1Content = fs.readFileSync(file1Path, 'utf8');
    const file2Content = fs.readFileSync(file2Path, 'utf8');

    const file1Size = fs.statSync(file1Path).size;
    const file2Size = fs.statSync(file2Path).size;

    
    if (file1Size > file2Size) {
      console.log(`\n ${file1Path} is larger than ${file2Path}`);
    } else if (file2Size > file1Size) {
      console.log(`${file2Path} is larger than ${file1Path}`);
    } else {
      console.log(`${file1Path} and ${file2Path} have the same size`);
    }

    const lines1 = file1Content.split('\n');
    const lines2 = file2Content.split('\n');

    const differingLines = [];
    lines1.forEach((line, index) => {
      if (line !== lines2[index]) {
        differingLines.push(index + 1);
      }
    });

    if (differingLines.length > 0) {
      console.log('\n Differing lines:');
      differingLines.forEach((lineNumber) => {
        console.log(`Line ${lineNumber}: ${lines1[lineNumber - 1]}`);
      });
    } else {
      console.log('The files have the same content');
    }
  } catch (err) {
    console.error('Error comparing files:', err);
  }
}

const file1Path = './6_file1.txt';
const file2Path = './6_file2.txt';

compareFiles(file1Path, file2Path);
