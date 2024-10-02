/*
* implement function that deletes file fileToRemove.txt
* (if there's no file fileToRemove.txt Error with message
* FS operation failed must be thrown)
 */

import fs from "node:fs";

const remove = async () => {
	try {
		const fileToRemove = './files/fileToRemove.txt';
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
		console.error(error);
	}
};

await remove();
