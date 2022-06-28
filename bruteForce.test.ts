const { bruteForce } = require("./bruteForce");

test("`bruteForce` for 4 cards aligns", () => {
  const cards = [1, 2, 3, 4];
  const shuffled = bruteForce(cards);
  expect(shuffled).toEqual([
    [1, 2, 3, 4],
    [2, 1, 4, 3],
    [4, 3, 2, 1],
    [2, 4, 1, 3],
    [1, 2, 3, 4],
  ]);
});
