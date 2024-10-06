/*
* implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
 */

import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const compress = async () => {
	const source = createReadStream('./files/fileToCompress.txt');
	const gzip = createGzip();
	const destination = createWriteStream('./files/archive.gz');

	pipeline(source, gzip, destination, (err) => {
		if (err) {
			console.error('An error occurred:', err);
			process.exitCode = 1;
		}
	});
};

await compress();
