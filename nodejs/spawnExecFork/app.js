	const { fork } = require('child_process');

	const forkProcess = fork('fork.js');

	forkProcess.on('message', (msg) => {
		console.log(`Отримав від клієнта: ${msg}`)
	})

	forkProcess.on('close', (code) => {
		console.log(`Exited Code: ${code}`)
	})

forkProcess.send('Ping')
forkProcess.send('disconnect')