import fs from 'fs';

/*
* implement function that creates new file fresh.txt with content I am fresh and young
* inside of the files folder (if file already exists Error with message FS operation
* failed must be thrown)
 */

const create = async () => {
	try {
		if (fs.existsSync('./files/fresh.txt')) {
			throw Error('FS operation failed');
		}
		const content = 'I am fresh and young';
		fs.writeFile('./files/fresh.txt', content, err => {
			if (err) {
				console.error(err.message);
			} else {
				console.log('File written successfully');
			}
		});
	} catch (error){
		console.error(error.message);
	}
};

await create();
