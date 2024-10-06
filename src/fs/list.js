import fs from 'node:fs';
import {dirname, join} from "path";
import {fileURLToPath} from "node:url";

/*
* implement function that prints all array of filenames from files
* folder into console (if files folder doesn't exists Error
* with message FS operation failed must be thrown)
 */

const list = async () => {
	const __dirname = dirname(fileURLToPath(import.meta.url));
	const folderToRead = join(__dirname, 'files');
	try {
		if (!fs.existsSync(folderToRead)) {
			throw Error('FS operation failed');
		}
		fs.readdirSync(folderToRead).forEach(file => {
			console.log(file);
		});
		console.log('File\'s names read successfully!');
	} catch (error) {
		console.log(error);
	}
};

await list();
