import fs from 'node:fs';

/*
* implement function that prints content of the fileToRead.txt
* into console (if there's no file fileToRead.txt Error with
* message FS operation failed must be thrown)
 */

const read = async () => {
	const fileToRead = './files/fileToRead.txt';
	try {
		if (!fs.existsSync(fileToRead)) {
			throw Error('FS operation failed');
		}
		const data = fs.readFileSync(fileToRead, 'utf8');
		console.log(data);
		console.log('File read successfully!');
	} catch (error) {
		console.log(error);
	}
};

await read();
