const fs = require('fs');
const path = require('path');

function createFileFolderStructure(rootPath, structure) {
  for (const item of structure) {
    const itemPath = path.join(rootPath, item.name);

    if (item.type === 'file') {
      fs.writeFileSync(itemPath, item.content || '', 'utf8');
      console.log(`Created file: ${itemPath}`);
    } else if (item.type === 'folder') {
      fs.mkdirSync(itemPath);
      console.log(`Created folder: ${itemPath}`);

      if (item.children) {
        createFileFolderStructure(itemPath, item.children);
      }
    }
  }
}

// Example usage
const rootPath = './8_my-project';
const structure = [
  {
    name: 'index.html',
    type: 'file',
    content: '<html><head><title>My Project</title></head><body></body></html>'
  },
  {
    name: 'css',
    type: 'folder',
    children: [
      {
        name: 'styles.css',
        type: 'file',
        content: 'body { color: red; }'
      }
    ]
  },
  {
    name: 'js',
    type: 'folder',
    children: [
      {
        name: 'main.js',
        type: 'file',
        content: '// JavaScript code goes here'
      }
    ]
  }
];

createFileFolderStructure(rootPath, structure);
