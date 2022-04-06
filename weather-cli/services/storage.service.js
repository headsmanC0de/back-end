import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

// const filePath = join(homedir(), 'weather-data.json');
const filePath = join('./', 'weather-data.json'); // Збереження в папку з программою

const TOKEN_DICTIONARY = {
	token: 'token',
	city: 'city'
}

const saveKeyValue = async (key, value) => {
	let data = {};
	// Перевіряємо чи є створенний файл
	if (await isExist(filePath)) {
		// Якщо є то читаємо файл і присвоюємо дані константі
		const file = await promises.readFile(filePath);
		// Приводимо дані в об'єкт
		data = JSON.parse(file);
	}
	// Беремо об'єкт data[Передаэмо сюда зачення яке буде ключем] = значення ключа
	data[key] = value;
	// promises.writeFile(шлях куди записати файл, JSON.stringify(Приводимо об'єкт до json формату))
	await promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
	// Пробуємо дістати ключ якщо є файл
	if (await isExist(filePath)) {
		const file = await promises.readFile(filePath);
		const data = JSON.parse(file);
		return data[key];
	}
	return undefined;
}

const isExist = async (path) => {
	try {
		//Перевірка чи по даному шляху є файл, повертаємо boolean значення.
		await promises.stat(path);
		return true;
	} catch (e) {
		return false;
	}
};

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY };
