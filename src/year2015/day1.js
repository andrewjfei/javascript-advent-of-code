const filePath = './resources/year2015/day1/input.txt';

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

export { solvePartI };
