function knightMoves() {
    const moves = [
        [1, 2], [-1, 2], [2, 1], [-2, 1],
    [1, -2], [-1, -2], [2, -1], [-2, -1]
];

    // Function to generate valid next moves from a given position
    function generateMoves(pos) {
        const [x, y] = pos;
        const nextMoves = moves.map(([dx, dy]) => [x + dx, y + dy]);
        return nextMoves.filter(([nx, ny]) => nx >= 0 && nx < 8 && ny >= 0 && ny < 8);
    }

};