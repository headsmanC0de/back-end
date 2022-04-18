import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
	console.log(chalk.bgRed(' * ERROR * ') + ' ' + error);
};

const printSuccess = (message) => {
	console.log(chalk.bgGreen(' = Success = ') + ' ' + message);
};

const printHelp = () => {
	console.log(
		dedent`${chalk.bgYellowBright(' + Help + ')}
		Без параметрів - вивід погоди
		-s [CITY]- для установки міста
		-h -для виводу допомоги
		-t [API_KEY] -для виводу допомоги

		`
	);
};

const printWearher = (res, icon) => {
		console.log(
			dedent`${chalk.bgGreen(' = Weather = ')} Погода в місті ${res.name}
			${icon}  ${res.weather[0].description}
			🌡  Температура: ${res.main.temp}(На відчуття як: ${res.main.feels_like})
			☁  Вологість: ${res.main.humidity}%
			🌬  Швидкість вітру: ${res.wind.speed}

		`
		);
};

export { printError, printSuccess, printHelp, printWearher };
