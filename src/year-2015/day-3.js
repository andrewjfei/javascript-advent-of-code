const filePath = "./resources/year-2015/day-3/input.txt"

async function solvePartI() {
	const fileContent = await Deno.readTextFile(filePath);
	
	// coordinate location
	let x = 0;
	let y = 0;

	// creating a set to ensure no duplicate locations are recorded
	const visited = new Set();
	
	// add inital location
	visited.add(`x${x}y${y}`);

	for (const char of fileContent) {
		switch (char) {
			case "^":
				x += 1;
				break;
			case "v":
				x -= 1;
				break;
			case ">":
				y += 1;
				break;
			case "<":
				y -= 1;
				break;
			default:
		};
		
		// add new location to visited
		visited.add(`x${x}y${y}`);
	}
	
	return visited.size;
}

export { solvePartI };
