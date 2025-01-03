const fs = require('fs');
const path = require('path');

const configDir = path.join(__dirname, './../configs');
const packageJsonPath = path.join(configDir, './../package.json');

// Read the directory contents and filter for JSON files
const filesToExport = fs.readdirSync(configDir).filter(file => file.endsWith('.json'));

const exportsObject = filesToExport.reduce((acc, file) => {
  const key = `./${path.basename(file, '.json')}`;
  acc[key] = {
    types: `./configs/${file}`,
    import: `./configs/${file}`,
    require: `./configs/${file}`
  };
  return acc;
}, {});

const packageJson = require(packageJsonPath);
packageJson.exports = exportsObject;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Exports object has been updated in package.json');