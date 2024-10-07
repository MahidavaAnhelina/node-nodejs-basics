/*
* implement function that deletes file fileToRemove.txt
* (if there's no file fileToRemove.txt Error with message
* FS operation failed must be thrown)
 */

import fs from "node:fs";
import {dirname, join} from "path";
import {fileURLToPath} from "node:url";

const remove = async () => {
	try {
		const __dirname = dirname(fileURLToPath(import.meta.url));
		const fileToRemove = join(__dirname, 'files', 'fileToRemove.txt');
		if (!fs.existsSync(fileToRemove)) {
			throw Error('FS operation failed');
		}

		fs.unlink(fileToRemove, (err) => {
			if (err) {
				console.error(`Error removing file: ${err}`);
				return;
			}

			console.log(`File ${fileToRemove} has been successfully removed.`);
		});
	} catch (error){
		console.error(error.message);
	}
};

await remove();
