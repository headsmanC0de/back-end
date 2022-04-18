#!/usr/bin/env node
//Особливість виклику CLI утиліти
import { getArgs } from './helpers/args.js';
import { getIcon, getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError, printWearher } from './services/log.service.js';
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async (token) => {
	if (!token.length) {
		printError('Токен непереданий');
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token);
		printSuccess('Токен збережений');
	} catch (e) {
		printError(e.message);
	}
};

const saveCity = async (city) => {
	if (!city.length) {
		printError('Ви не вказали місто');
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.city, city);
		printSuccess('Місто збережене');
	} catch (e) {
		printError(e.message);
	}
};

const getForcast = async () => {
	try {
		// Виводимо погоду
		const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
		const weather = await getWeather(city);
		printWearher(weather, getIcon(weather.weather[0].icon));
	} catch (e) {
		//Шлях до статусу розписаний в документації axios
		if (e?.response?.status == 404) {
			printError('404 - Невірно вказане місто');
		} else if (e?.response?.status == 401) {
			printError('401 - Невірно вказаний токен');
		} else {
			printError(e.message);
		}
	}
};

const initCLI = () => {
	const args = getArgs(process.argv);
	// Отриманий об'єкт беремо і опрацьовуємо
	if (args.h) {
		// Виводимо help
		return printHelp();
	}
	if (args.s) {
		// Встановлюємо місто
		return saveCity(args.s);
	}
	if (args.t) {
		// Встановлюємо токен
		return saveToken(args.t);
	}
	return getForcast();
};

initCLI();
