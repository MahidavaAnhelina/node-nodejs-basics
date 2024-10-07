import fs from 'node:fs';
import { fileURLToPath } from "node:url";
import { join, dirname } from 'path';

/*
 * implement function that copies folder files files with all its content into folder files_copy at
 * the same level (if files folder doesn't exists or files_copy has already been created Error with
 * message FS operation failed must be thrown)
 */

const copy = async () => {
	const __dirname = dirname(fileURLToPath(import.meta.url));
	const destinationName = join(__dirname, 'files_copy');
	const srcName = join(__dirname, 'files');
	try {
		if (fs.existsSync(destinationName) || !fs.existsSync(srcName)) {
			throw Error('FS operation failed');
		}
		fs.cpSync(srcName, destinationName, {recursive: true});
		console.log('File copied successfully!');
	} catch (err) {
		console.error(err.message);
	}
};

await copy();
