process.on('message', (msg) => {
	if (msg == 'disconnect'){
		process.disconnect()
		return;
	}

	console.log(`Отримав з сервера: ${msg}`)
	process.send('Pong!')	
})