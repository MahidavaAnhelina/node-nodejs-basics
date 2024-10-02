import fs from 'node:fs';

/*
* implement function that renames file wrongFilename.txt to properFilename with extension
* .md (if there's no file wrongFilename.txt or properFilename.md already exists Error
* with message FS operation failed must be thrown)
 */

const rename = async () => {
	  const fileToRename = './files/wrongFilename.txt';
		const newFileName = './files/properFilename.md';
    try {
	    if (fs.existsSync(newFileName) || !fs.existsSync(fileToRename)) {
		    throw Error('FS operation failed');
	    }
	    fs.renameSync(fileToRename,newFileName);
	    console.log('File renamed successfully!');
    } catch (error) {
	    console.log(error);
    }
};

await rename();
