const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, './../src');
const packageJsonPath = path.join(componentsDir, './../package.json');

// Read the directory contents and filter for TypeScript files
const filesToExport = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));

const exportsObject = filesToExport.reduce((acc, file) => {
  const fileNameWithoutExt = path.parse(file).name;
  const key = `./${fileNameWithoutExt}`;
  acc[key] = {
    types: `./src/${file}`,
    import: `./dist/${fileNameWithoutExt}.mjs`,
    require: `./dist/${fileNameWithoutExt}.js`
  };
  return acc;
}, {});

const packageJson = require(packageJsonPath);
packageJson.exports = exportsObject;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Exports object has been updated in package.json');