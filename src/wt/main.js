import {Worker} from "node:worker_threads";
import os from 'node:os';

const performCalculations = async () => {

	const numberCores = os.availableParallelism();

	let numberToUse = 10;
	const lisWorkers = [];

	for (let i = 0; i < numberCores; i++) {
		lisWorkers.push(new Promise(resolve => {
			const worker = new Worker('./worker.js', {workerData: {n: ++numberToUse}});

			worker.on('message', (message) => {
				resolve({
					status: 'resolved',
					data: message
				});
			});

			worker.on('error', (error) => {
				resolve({
					status: 'error',
					data: null
				});
			});

			worker.on('exit', (code) => {
				if (code !== 0) console.error(`Worker stopped with exit code ${code}`);
			});
		}));
	}

	const result = await Promise.all(lisWorkers);
	console.log(result);
};

await performCalculations();
