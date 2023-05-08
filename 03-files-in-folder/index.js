const path = require('path');
const file = path.join(__dirname, './secret-folder');
const fs = require('fs').promises;

async function getFiles() {
  let files = [];
  files = await fs.readdir(file, {withFileTypes: true});
  for(let i = 0; i < files.length; i++) {
    if(files[i].isFile() === true) {
      let stats = await fs.stat('03-files-in-folder/secret-folder/' + files[i].name)
      console.log(`${path.basename(files[i].name, path.extname(files[i].name))} - ${path.extname(files[i].name).slice(1)} - ${stats.size} bytes`);
    }
  }
}
getFiles();