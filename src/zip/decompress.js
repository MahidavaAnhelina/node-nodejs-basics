/*
* implement function that decompresses archive.gz back
* to the fileToCompress.txt with same content as before
* compression using zlib and Streams API
 */

import { createReadStream, createWriteStream } from "node:fs";
import { createUnzip } from "node:zlib";
import { pipeline } from "node:stream";

const decompress = async () => {
	const source = createReadStream('./files/archive.gz');
	const unzip = createUnzip();
	// File name changed - to compare with initial file
	const destination = createWriteStream('./files/fileToCompress1.txt');

	pipeline(source, unzip, destination, (err) => {
		if (err) {
			console.error('An error occurred:', err);
			process.exitCode = 1;
		}
	});
};

await decompress();
