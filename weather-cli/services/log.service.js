import chalk from 'chalk';
import dedent from 'dedent-js'

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

export { printError, printSuccess, printHelp };
