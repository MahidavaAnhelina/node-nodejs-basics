/*
* implement function that parses environment variables
* with prefix RSS_ and prints them to the console in
* the format RSS_name1=value1; RSS_name2=value2
 */

const parseEnv = () => {
	try {
		const prefix = 'RSS_';
		if (!Object.keys(process.env).some(value => value.startsWith(prefix))) {
			throw Error('No variable here');
		}
		let result = '';
		const listEnv = Object.entries(process.env).filter(([key]) => key.startsWith(prefix));
		listEnv.forEach(([key,value], i) => {
			result += `${key}=${value}${ i === (listEnv?.length - 1) ? '' : '; '}`;
		});
		console.log(result);
	}  catch (err) {
		console.error(err.message);
	}
};

parseEnv();
