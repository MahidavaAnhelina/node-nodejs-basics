/*
* implement function that parses environment variables
* with prefix RSS_ and prints them to the console in
* the format RSS_name1=value1; RSS_name2=value2
 */

const parseEnv = () => {
	try {
		const prefix = 'RSS_';
		if (!process.argv.some(value => value.startsWith(prefix))) {
			throw Error('No variable here');
		}
		process.argv.forEach(variable => {
			if (variable.startsWith(prefix)) {
				console.log(variable);
			}
		});
	}  catch (err) {
		console.error(err);
	}
};

parseEnv();
