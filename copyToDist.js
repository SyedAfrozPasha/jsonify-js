const fs = require('fs');

function copyFile(src_path, dest_path) {
  if (fs.existsSync(src_path)) {
    fs.copyFileSync(src_path, dest_path);
  }
}

copyFile('./package.json', './dist/package.json');
copyFile('./README.md', './dist/README.md');
copyFile('./LICENSE', './dist/LICENSE');
copyFile('./.gitignore', './dist/.gitignore');
copyFile('./.npmignore', './dist/.npmignore');