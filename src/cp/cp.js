import {spawn} from 'node:child_process';
import {dirname, join} from "path";
import {fileURLToPath} from "node:url";

const spawnChildProcess = async (args) => {
	const __dirname = dirname(fileURLToPath(import.meta.url));
	const scriptName = join(__dirname, 'files', 'script.js');

	const childProcess = spawn('node', [scriptName, ...args]);

	// child process stdin should receive input from master process stdin
	process.stdin.pipe(childProcess.stdin);

	// child process stdout should send data to master process stdout
	// if remove that - the write from child will be not printed in terminal
	childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2', 'sdc', 'wevwe', 'wevwev']);
