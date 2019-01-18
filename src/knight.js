const axisPositions = axis =>
  [axis + 2, axis - 2, axis + 1, axis - 1].filter(
    position => position > 0 && position < 9
  );

const calculateMovements = cell => {
  const coordinates = [];
  const axisX = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  const cellX = axisX.indexOf(cell[0]) + 1;
  const cellY = parseInt(cell[1], 10);

  const xPositions = axisPositions(cellX);
  const yPositions = axisPositions(cellY);

  for (let i = 0; i < xPositions.length; i += 1) {
    for (let j = 0; j < yPositions.length; j += 1) {
      if (
        Math.abs(cellX - xPositions[i]) + Math.abs(cellY - yPositions[j]) ===
        3
      ) {
        if (!coordinates.includes([xPositions[i], yPositions[j]])) {
          coordinates.push([xPositions[i], yPositions[j]]);
        }
      }
    }
  }

  const possible = coordinates.map(c => `${axisX[c[0] - 1]}${c[1]}`);
  return possible;
};

const getPosition = cell => {
  const firstPositions = calculateMovements(cell);
  const secondPositions = firstPositions.map(position =>
    calculateMovements(position)
  );
  const possiblesCordenates = secondPositions.reduce((a, b) => a.concat(b));
  return possiblesCordenates;
};

module.exports = getPosition;