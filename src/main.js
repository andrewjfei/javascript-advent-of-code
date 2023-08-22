import { Day1, Day2 } from './year-2015/mod.js';

try {
	console.log();
	console.log(`==================== 2015 ====================`);
	console.log();
	console.log(`Day 1 Part I\tAnswer: ${await Day1.solvePartI()}`);
	console.log(`Day 1 Part II\tAnswer: ${await Day1.solvePartII()}`);
	console.log();
	console.log(`Day 2 Part I\tAnswer: ${await Day2.solvePartI()}`);
	console.log(`Day 2 Part II\tAnswer: ${await Day2.solvePartII()}`);
	console.log();
} catch (err) {
	console.error('an error occured', err);
}

