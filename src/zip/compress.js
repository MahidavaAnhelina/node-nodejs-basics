/*
* implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
 */

import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import {dirname, join} from "path";
import {fileURLToPath} from "node:url";

const compress = async () => {
	const __dirname = dirname(fileURLToPath(import.meta.url));
	const sourceFile = join(__dirname, 'files', 'fileToCompress.txt');
	const source = createReadStream(sourceFile);
	const gzip = createGzip();
	const destinationFile = join(__dirname, 'files', 'archive.gz');
	const destination = createWriteStream(destinationFile);

	pipeline(source, gzip, destination, (err) => {
		if (err) {
			console.error('An error occurred:', err);
			process.exitCode = 1;
		}
	});
};

await compress();
