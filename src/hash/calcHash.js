/*
* implement function that calculates SHA256 hash for file
* fileToCalculateHashFor.txt and logs it into console as
* hex using Streams API
 */

import crypto from 'node:crypto';
import fs from "node:fs";
import {dirname, join} from "path";
import {fileURLToPath} from "node:url";

const calculateHash = async () => {
	const hash = crypto.createHash('sha256');
	const __dirname = dirname(fileURLToPath(import.meta.url));
	const fileToRead = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
	const rs = fs.createReadStream(fileToRead);
	rs.on('error', err => console.log(err));
	rs.on('data', chunk => hash.update(chunk));
	rs.on('end', () => console.log(hash.digest('hex')));
};

await calculateHash();
