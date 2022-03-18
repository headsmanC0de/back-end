const { exec } = require('child_process');

const childProcess = exec('node script.js', (err, stdout, stderr) => {
	if (err) {
		console.error(err.message);
	}
	console.log(`stdout: ${stdout}`);
	console.log(`stderr: ${stderr}`);
})

childProcess.on('exit', (code) => {
	console.log(`Код виходу: ${code}`)
})