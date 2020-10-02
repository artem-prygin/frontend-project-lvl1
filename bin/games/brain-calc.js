#!/usr/bin/env node
import { greeting, checkAnswer } from '../../src/index.js';

const brainEven = async () => {
	const name = await greeting();
	console.log('What is the result of the expression?');
	let countRightAnswers = 0;
	do {
		const operandOne = Math.floor(Math.random() * 100);
		const operandTwo = Math.floor(Math.random() * 100);
		const action = Math.floor(Math.random() * 3);
		let question = '';
		let rightAnswer = 0;
		switch (action) {
			case 0:
				question = `${operandOne} + ${operandTwo}`;
				rightAnswer = operandOne + operandTwo;
				break;
			case 1:
				question = `${operandOne} - ${operandTwo}`;
				rightAnswer = operandOne - operandTwo;
				break;
			default:
				question = `${operandOne} * ${operandTwo}`;
				rightAnswer = operandOne * operandTwo;
		}
		countRightAnswers = await checkAnswer(name, question, rightAnswer.toString(), countRightAnswers);
	} while (countRightAnswers < 3);
};

brainEven();
