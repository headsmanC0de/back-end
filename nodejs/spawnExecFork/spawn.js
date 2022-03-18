const { spawn } = require('child_process');

childProcess.stdout.on('data', (data) => {
	console.log(`Stdout: ${data}`)
})

childProcess.stderr.on('data', (data) => {
	console.log(`Stderr: ${data}`)
})

childProcess.on('exit', (code) => {
	console.log(`Код виходу: ${code}`)
})