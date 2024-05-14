function knightMoves() {
    const moves = [
        [1, 2], [-1, 2], [2, 1], [-2, 1],
    [1, -2], [-1, -2], [2, -1], [-2, -1]
];

    // Generate valid next moves from a given position
    function generateMoves(pos) {
        const [x, y] = pos;
        const nextMoves = moves.map(([dx, dy]) => [x + dx, y + dy]);
        return nextMoves.filter(([nx, ny]) => nx >= 0 && nx < 8 && ny >= 0 && ny < 8);
    }

    // Find the shortest path using breadth-first search
    function shortestPath() {
        const visited = new Set();
            const queue = [[start]];
            visited.add(start.toString());

            while (queue.length > 0) {
                const path = queue.shift();
                const currentPosition = path[path.length - 1];

                if(currentPosition.toString() === end.toString()) {
                    return path;
                }

                const nextMoves = generateMoves(currentPosition);
                for (const move of nextMoves) {
                    if (!visited.has(move.toString())) {
                        const newPath = [...path, move];
                        queue.push(newPath);
                        visited.add(move.toString());
                    }
                }
            }
            return null;
    }
    return shortestPath();
};

const start = [0, 0];
const end = [3, 4];
console.log(knightMoves(start, end));

