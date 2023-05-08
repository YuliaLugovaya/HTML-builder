const fs = require('fs').promises;
const path = require('path');
const styles = path.join(__dirname, './styles');
const file = path.join(__dirname, './project-dist/bundle.css');

async function joinStyles() {
  let files = [];
  files = await fs.readdir(styles, { withFileTypes: true }, (err) => {
    if (err) console.log(err)
  });
  for (let i = 0; i < files.length; i++) {
    let style = await fs.readFile(styles + '/' + files[i].name);
    if (path.extname(files[i].name) === '.css' && files[i].isFile() === true) {
      await fs.writeFile(file, style, { flag: "a+" });
    }
  }
}
joinStyles();