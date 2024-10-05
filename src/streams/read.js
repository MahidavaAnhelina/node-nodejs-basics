/*
* implement function that reads file fileToRead.txt content
* using Readable Stream and prints it's content into process.stdout
 */

import fs from "node:fs";

const read = async () => {
	const rs = fs.createReadStream('./files/fileToRead.txt');

	rs.pipe(process.stdout);

	rs.on('error', (err) => {
		console.error('Error reading file:', err.message);
	});
};

await read();
