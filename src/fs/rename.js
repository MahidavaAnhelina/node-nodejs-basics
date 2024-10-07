import fs from 'node:fs';
import {dirname, join} from "path";
import {fileURLToPath} from "node:url";

/*
* implement function that renames file wrongFilename.txt to properFilename with extension
* .md (if there's no file wrongFilename.txt or properFilename.txt already exists Error
* with message FS operation failed must be thrown)
 */

const rename = async () => {
	const __dirname = dirname(fileURLToPath(import.meta.url));
	const fileToRename = join(__dirname, 'files', 'wrongFilename.txt');
		const newFileName = join(__dirname, 'files', 'properFilename.md');
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
