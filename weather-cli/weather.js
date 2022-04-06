#!/usr/bin/env node
//Особливість виклику CLI утиліти
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async (token) => {
	if (!token.length) {
		printError('Токен непереданий');
		return
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token);
		printSuccess('Токен збережений')
	} catch (e) {
		printError(e.message)
	}
};

const initCLI = () => {
	const args = getArgs(process.argv);
	// Отриманий об'єкт беремо і опрацьовуємо
	if (args.h) {
		// Виводимо help
		printHelp();
	}
	if (args.s) {
		// Встановлюємо місто
	}
	if (args.t) {
		// Встановлюємо токен
		return saveToken(args.t);
	}
	// Виводимо погоду
	getWeather('Kiev')
};

initCLI();
