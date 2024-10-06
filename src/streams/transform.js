/*
* implement function that reads data from process.stdin,
* reverses text using Transform Stream and then writes it into process.stdout
 */

import { pipeline, Transform } from 'node:stream';


const transform = async () => {
	try {

		const rs = process.stdin;
		const ws = process.stdout;

		const transform = new Transform({
			transform(chunk, encoding, callback) {
				const updatedChunk = chunk.toString().trim();
				const reverted = updatedChunk.split('').reverse().join('');
				callback(null,  `${reverted}\n`);
			}
		});

		pipeline(
			rs,
			transform,
			ws,
			err => {
				console.error(err);
			}
		);

	} catch (err) {
		console.log(err.message);
	}
};

await transform();
