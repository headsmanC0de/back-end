// import https from 'https';
import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

const getIcon = (icon) => {
	switch (icon.slice(0, -1)) {
		case '01': {
			return '☀️';
		}
		case '02': {
			return '⛅';
		}
		case '03': {
			return '☁';
		}
		case '04': {
			return '☁';
		}
		case '09': {
			return '🌧';
		}
		case '10': {
			return '🌦	';
		}
		case '11': {
			return '⛈';
		}
		case '13': {
			return '❄';
		}
		case '50': {
			return '🌫';
		}
	}
};

const getWeather = async (city) => {
	const token = process.env.TOKEN ?? (await getKeyValue(TOKEN_DICTIONARY.token));

	if (!token) {
		throw new Error('Незаданий ключ Api. Задати ми його можемо через компанду -t [API_KEY]');
	}
	// Спосіб рівносильний способу що розписаний знизу але з використанням бібліотеки
	const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
		params: {
			q: city,
			appid: token,
			lang: 'ru',
			units: 'metric',
		},
	});
	return data;

	/* Спосіб Використання встроїних можливостей
	Базова url до якої ми будемо додавати параметри
	const url = new URL('https://api.openweathermap.org/data/2.5/weather');
	Тут ми по черзі додаємо параметри до нашої url
	url.searchParams.append('q', city);
	url.searchParams.append('appid', token);
	url.searchParams.append('lang', 'ua');
	url.searchParams.append('units', 'metric');

	Тут ми робимо запит з нашими параметрами
	https.get(url, (responce) => {
		let res = '';

		Тут ми беремо дані які прийшли називають чанками ми беремо їх і присвоюємо в res
		responce.on('data', (chunk) => {
			res += chunk
		})

		responce.on('end', () => {
			console.log(res)
		})

	});
*/
};

export { getWeather, getIcon };
