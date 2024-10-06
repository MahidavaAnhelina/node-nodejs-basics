/*
* implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
 */

import readline from 'node:readline';

import fs from "node:fs";

const write = async () => {
	try {
		const ws = fs.createWriteStream('./files/fileToWrite.txt');

		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});


		rl.on('line', (input) => {
			ws.write(input + '\n');
		});

		rl.on('SIGINT', () => {
			rl.question('Are you sure you want to exit? (Yes/No)', (answer) => {
				if (answer.match(/^y(es)?$/i)) {
					rl.close();
					ws.end();
				}
			});
		});

		ws.on('finish', () => {
			console.log('Data written to file successfully.');
		});

		ws.on('error', (err) => {
			console.error('Error writing to file:', err.message);
		});
	} catch (err) {
		console.log(err.message);
	}
};

await write();
