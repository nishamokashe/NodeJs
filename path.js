//path- path module provides utilities for working with file and directory paths.

const path = require('path')

const path1 = 'myDir';
const path2 ='file.txt';

const fullpath = path.join(__dirname,path1,path2)
console.log("joined path:",fullpath);

//Gatting the file extention

const filename = "example.html"

const extention = path.extname(filename);
console.log("File extention:"+extention);

const filepath ="/home/user/document/report.pdf"
const basename = path.basename(filepath)
console.log("BaseName:",basename);

const dirname = path.dirname(filepath)
console.log("Directory Name:",dirname);