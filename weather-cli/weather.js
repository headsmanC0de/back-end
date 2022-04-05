#!/usr/bin/env node
//Особливість виклику CLI утиліти
import { getArgs } from './helpers/args.js'

const initCLI = () => {
	const args = getArgs(process.argv);
	console.log(args);
}

initCLI()
