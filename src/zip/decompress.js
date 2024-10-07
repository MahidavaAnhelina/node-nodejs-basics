/*
* implement function that decompresses archive.gz back
* to the fileToCompress.txt with same content as before
* compression using zlib and Streams API
 */

import { createReadStream, createWriteStream } from "node:fs";
import { createUnzip } from "node:zlib";
import { pipeline } from "node:stream";
import {dirname, join} from "path";
import {fileURLToPath} from "node:url";

const decompress = async () => {
	const __dirname = dirname(fileURLToPath(import.meta.url));
	const sourceFile = join(__dirname, 'files', 'archive.gz');
	const source = createReadStream(sourceFile);
	const unzip = createUnzip();
	const destinationFile = join(__dirname, 'files', 'fileToCompress1.txt');
	// File name changed - to compare with initial file
	const destination = createWriteStream(destinationFile);

	pipeline(source, unzip, destination, (err) => {
		if (err) {
			console.error('An error occurred:', err);
			process.exitCode = 1;
		}
	});
};

await decompress();
