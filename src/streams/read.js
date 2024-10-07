/*
* implement function that reads file fileToRead.txt content
* using Readable Stream and prints it's content into process.stdout
 */

import fs from "node:fs";
import {dirname, join} from "path";
import {fileURLToPath} from "node:url";

const read = async () => {
	const __dirname = dirname(fileURLToPath(import.meta.url));
	const fileToRead = join(__dirname, 'files', 'fileToRead.txt');
	const rs = fs.createReadStream(fileToRead);

	rs.pipe(process.stdout);

	rs.on('error', (err) => {
		console.error('Error reading file:', err.message);
	});
};

await read();
