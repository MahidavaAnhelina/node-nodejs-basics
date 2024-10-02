/*
*  implement function that parses command line arguments (given in format --propName value
* --prop2Name value2, you don't need to validate it) and prints them to the
* console in the format propName is value, prop2Name is value2
 */

const parseArgs = () => {
	try {
		let result = '';
		process.argv?.forEach((variable, i) => {
			if (process.argv[i]?.startsWith('--')) {
				return;
			}
			if (i - 1 > 0) {
				const key = process.argv[i - 1];
				result += `${key.replace('--', '')} is ${variable}${i === process.argv.length - 1 ? '' : ', '}`;
			}
		});
		console.log(result);
	}  catch (err) {
		console.error(err);
	}
};

parseArgs();
