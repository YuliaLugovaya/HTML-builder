let fs = require('fs').promises;
const path = require('path');
const filesCopy = path.join(__dirname, 'files-copy');
const filesOriginal = path.join(__dirname, 'files');

async function copyFiles() {
  await fs.mkdir(filesCopy, { recursive: true }, err => {
    if (err) throw err;
  });
  let files = [];
    files = await fs.readdir(filesOriginal);
    for (let i = 0; i < files.length; i++) {
      fs.copyFile(`${filesOriginal}/${files[i]}`, `${filesCopy}/${files[i]}`);
    }
}
copyFiles();

