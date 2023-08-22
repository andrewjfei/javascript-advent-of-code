import { readLines } from 'https://deno.land/std@0.199.0/io/mod.ts';

const filePath = "./resources/year-2015/day-2/input.txt";

async function solvePartI() {
	const fileReader = await Deno.open(filePath);

	// total wrapping paper area
	let totalArea = 0;

	for await (const line of readLines(fileReader)) {
		// extract present dimensions as numbers
		const dimArr = line.split("x").map((str) => {
			return str * 1;
		});
		
		const depth = dimArr[0];
		const width = dimArr[1];
		const height = dimArr[2];
		
		const depthWidthArea = depth * width;
		const widthHeightArea = width * height;
		const heightDepthArea = height * depth;

		// calculate total surface area
		const surfaceArea = (2 * depthWidthArea) + (2 * widthHeightArea) + (2 * heightDepthArea); 
		// calcualte extra additional paper area
		const extraAdditionalArea = Math.min(depthWidthArea, widthHeightArea, heightDepthArea);

		totalArea += surfaceArea + extraAdditionalArea;
	}

	return totalArea;
}

async function solvePartII() {
	const fileReader = await Deno.open(filePath);

	// total ribbon length
	let totalLength = 0;

	for await (const line of readLines(fileReader)) {
		// extract present dimensions as numbers
		let dimArr = line.split("x").map((str) => {
			return str * 1;
		});

		const depth = dimArr[0];
		const width = dimArr[1];
		const height = dimArr[2];
		
		const bowRibbonLength = depth * width * height;

		const firstMinLength = removeMin(dimArr);
		const secondMinLength = removeMin(dimArr);

		// calculate present ribbon length
		const presentRibbonLength = 2 * (firstMinLength + secondMinLength);

		totalLength += bowRibbonLength + presentRibbonLength;
	}

	return totalLength;
}

function removeMin(arr) {
	// get minimum value in array
	const min = Math.min(...arr);

	// get index of minimum value
	const i = arr.indexOf(min);
	
	// remove minimum value from array
	arr.splice(i, 1);

	return min;
}

export { solvePartI, solvePartII };
