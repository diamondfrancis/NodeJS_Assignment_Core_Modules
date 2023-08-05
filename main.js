//1. Write a program to do the following using, path, os and process modules.
console.log({dir: __dirname, filename: __filename});
const os = require("os")

//1: Print out the current working directory.
const path = require('path');
const currentWorkingDirectory = process.cwd();
const normalizedPath = path.normalize(currentWorkingDirectory);
console.log('Current Working Directory:', normalizedPath);

//2: Print out the separator of a given file path.
const fileSeparator = path.sep;
console.log('File Separator:', fileSeparator);

//3: Print out the extension name of a file path.
const filePath = '\Users\diamo\Desktop\Work\AltSchool\Backend_Engineering\NodeJS_Assignment';
const extension = path.extname(filePath);
console.log('Extension:', extension);

//4: Print out the process id of the current running process.
const processId = process.pid;
console.log('Process ID:', processId);

//5: Print out the user information of the os.
const userInfo = os.userInfo();
console.log('User Information:', userInfo);

//6: Print out the platform of an operating system.
const platform = os.platform();
console.log('Platform:', platform);