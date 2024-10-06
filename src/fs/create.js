import fs from 'fs';
import {dirname, join} from "path";
import {fileURLToPath} from "node:url";

/*
* implement function that creates new file fileToRemove.txt with content I am fresh and young
* inside of the files folder (if file already exists Error with message FS operation
* failed must be thrown)
 */

const create = async () => {
	try {
		const __dirname = dirname(fileURLToPath(import.meta.url));
		const destinationName = join(__dirname, 'files', 'fileToRemove.txt');
		if (fs.existsSync(destinationName)) {
			throw Error('FS operation failed');
		}
		const content = 'I am fresh and young';
		fs.writeFile(destinationName, content, err => {
			if (err) {
				console.error(err.message);
			} else {
				console.log('File written successfully');
			}
		});
	} catch (error){
		console.error(error.message);
	}
};

await create();
