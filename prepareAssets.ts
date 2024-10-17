const fs = require('fs-extra');
const path = require('path');

const sourceDir = 'assets/blogData';
const destinationDir1 = 'src/assets/blogData';
const destinationDir2 = 'public/assets/blogData';

const copyFiles = async () => {
  try {
    await fs.copy(sourceDir, destinationDir1);
    await fs.copy(sourceDir, destinationDir2);
    console.log('Files copied successfully');
  } catch (err) {
    console.error('Error copying files', err);
  }
};

copyFiles();
