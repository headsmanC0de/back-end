const getArgs = (args) => {
	const res = {};
	/* Рест синтаксис для масивів який відділяє 
перші 2 елементи, а решту складає в себе rest*/
	const [executer, file, ...rest] = args;
	rest.forEach((value, index, array) => {
		if (value.charAt(0) == '-') {
			// charAt(0) - вказує на букву в строці(0 - перша буква)
			if (index == array.lenght - 1) {
				res[value.substring(1)] = true;
			} else if (array[index + 1].charAt(0) != '-') {
				/*
					Тут ми перевіяємо наступний елемент який прийде чи він має '-',
					якщо його нема до ключа присвоюємо значення яке після нього приклад
					weather -s Kiev то його результат буде {s: Kiev}
				*/
				res[value.substring(1)] = array[index + 1];
			} else {
				res[value.substring(1)] = true;
			}
		}
	});
	return res;
};

export { getArgs };
