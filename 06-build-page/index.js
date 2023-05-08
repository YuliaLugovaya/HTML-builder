const fs = require('fs').promises;
const path = require('path');
const template = path.join(__dirname, './template.html');
const components = path.join(__dirname, './components');
const styles = path.join(__dirname, './styles');
const folder = path.join(__dirname, './project-dist');
const file = path.join(__dirname, './project-dist/index.html');
const style = path.join(__dirname, './project-dist/style.css');
const assets = path.join(__dirname, './project-dist/assets');
const assetsOld = path.join(__dirname, './assets');

async function createHtml() {
  //new folder
  await fs.mkdir(folder, { recursive: true }, err => {
    if (err) throw err;
  });

  //components
  let filesComp = [];
  filesComp = await fs.readdir(components, (err) => {
    if (err) console.log(err)
  });
  let comp0 = await fs.readFile(components + '/' + filesComp[0]);
  let comp1 = await fs.readFile(components + '/' + filesComp[1]);
  let comp2 = await fs.readFile(components + '/' + filesComp[2]);

  //files
  let readTemplate = await fs.readFile(template, 'utf8', function (error, fileContent) {
    if (error) throw error;
  });
  let replace = readTemplate.replace(`{{header}}`, comp2).replace(`{{articles}}`, comp0).replace(`{{footer}}`, comp1);
  fs.writeFile(file, '');
  fs.appendFile(file, replace);

  //styles
  let files = [];
  files = await fs.readdir(styles, { withFileTypes: true }, (err) => {
    if (err) console.log(err)
  });
  await fs.writeFile(style, '');
  for (let i = 0; i < files.length; i++) {
    let styleNew = await fs.readFile(styles + '/' + files[i].name);
    if (path.extname(files[i].name) === '.css' && files[i].isFile() === true) {
      await fs.appendFile(style, styleNew);
    }
  }

  //assets
  await fs.mkdir(assets, { recursive: true }, err => {
    if (err) throw err;
  });
  let filesAssets = [];
  filesAssets = await fs.readdir(assetsOld);
  for (let i = 0; i < filesAssets.length; i++) {
    fs.copyFile(`${assetsOld}/${filesAssets[i]}`, `${assets}/${filesAssets[i]}`);
  }
}
createHtml();