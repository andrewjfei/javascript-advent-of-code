const filePath = './resources/year-2015/day-1/input.txt';

async function solvePartI() {
	// read from file
    const fileContent = await Deno.readTextFile(filePath);

	let floor = 0;

	// check every character in the file
	for (const char of fileContent) {
		// go up one floor
		if (char === '(') {
			floor += 1;
		// go down one floor
		} else if (char === ')') {
			floor -= 1;
		}
	}

    return floor;
}

async function solvePartII() {
	// read from file
    const fileContent = await Deno.readTextFile(filePath);

	let floor = 0;
	let i = 0;

	for (const char of fileContent) {
		// increment character index
		i++;	

		// go up one floor
		if (char === '(') {
			floor += 1;
		// go down one floor
		} else if (char === ')') {
			floor -= 1;
		}

		// check if santa has been told to enter the basement
		if (floor < 0) {
			return i;
		}	
	};
}

export { solvePartI, solvePartII };
