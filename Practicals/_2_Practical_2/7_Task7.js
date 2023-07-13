const fs = require('fs');
const path = require('path');

function createBackup(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const backupPath = filePath + '.bak';
  fs.writeFileSync(backupPath, fileContent, 'utf8');
  console.log(`Backup created: ${backupPath}`);
}

function restoreBackup(filePath) {
  const backupPath = filePath + '.bak';
  if (fs.existsSync(backupPath)) {
    const backupContent = fs.readFileSync(backupPath, 'utf8');
    fs.writeFileSync(filePath, backupContent, 'utf8');
    console.log(`File restored: ${filePath}`);
  } else {
    console.log('Backup file not found.');
  }
}

const fileToBackup = './7_example.txt';
createBackup(fileToBackup);
fs.appendFileSync(fileToBackup, '\nExtra line appended.');
restoreBackup(fileToBackup);
