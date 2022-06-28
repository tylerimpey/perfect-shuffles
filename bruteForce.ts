import fs from "fs";
import _ from "lodash";

/**
 * @title Shuffle
 * @description shuffles an array by interlocking the elements
 *
 * @param {number[]} range the array to shuffle
 * @returns {number[]} the shuffled array
 */
const shuffle = (range: number[]): number[] => {
  const shuffled: number[] = [];

  const front: number[] = range.slice(0, Math.floor(range.length / 2));
  const back: number[] = range.slice(Math.floor(range.length / 2));

  for (let i = 0; i < Math.floor(range.length / 2); i++) {
    shuffled.push(back[i]);
    shuffled.push(front[i]);
  }

  return shuffled;
};

/**
 * @title Creates a Range
 * @description creates a range of numbers from start to end
 *
 * @param {number} start the start of the range
 * @param {number} end the end of the range
 * @returns {number[]} the range
 */
const createRange = (start: number, end: number): number[] => {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

/**
 * @title Performs a Brute Force Shuffle
 * @description performs a brute force shuffle of the range
 *
 * @param {number} cards the number of cards to shuffle
 * @returns {number} the number of shuffles
 */
export const bruteForce = (cards: number): Array<number[]> => {
  const range = createRange(1, cards);
  const output: any[] = [range];

  if (range.length % 2 !== 0) {
    throw new Error("Range must be even.");
  }

  let shuffled = shuffle(range);
  output.push(shuffled);
  let shuffles = 1;
  while (!_.isEqual(shuffled, range)) {
    shuffled = shuffle(shuffled);
    output.push(shuffled);
    shuffles++;
  }

  console.log(`${range.length} took ${shuffles} shuffles.`);

  if (range.length === shuffles) {
    console.log(`${range.length + 1} is a prime number.`);
  }

  fs.writeFileSync(
    `${__dirname}/sequences/${range.length}.json`,
    JSON.stringify(output)
  );

  return output;
};
