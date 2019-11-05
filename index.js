#!/usr/bin/env node

const fs = require('fs');

const templatePath = './template/';
const CURRENT_DIRECTORY = process.cwd();

function createDirectoryFromTemplate (sourcePath, newProjectPath) {
    const filesToCreate = fs.readdirSync(sourcePath);

    filesToCreate.forEach(file => {
        const filePath = `${sourcePath}/${file}`;
        const stats = fs.statSync(filePath);
        
        if (stats.isFile()) {
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const newFilePath = `${CURRENT_DIRECTORY}/${newProjectPath}/${file}`;

            fs.writeFileSync(newFilePath, fileContent, 'utf8');
        } else if (stats.isDirectory()) {
            fs.mkdirSync(`${CURRENT_DIRECTORY}/${newProjectPath}/${file}`);
            
            createDirectoryFromTemplate(`${sourcePath}/${file}`, `${newProjectPath}/${file}`);
          }

    });
}

if (process.argv[2]) {
    fs.mkdirSync(`${CURRENT_DIRECTORY}/${process.argv[2]}`);
    createDirectoryFromTemplate(templatePath, process.argv[2]);
} else {
    console.log('Usage: cura project-name');
}
