export const colors = [
  "black",
  "blue",
  "brown",
  "cyan",
  "green",
  "lime",
  "orange",
  "pink",
  "purple",
  "red",
  "white",
  "yellow",
];

export const randomColor = () => getRandom(colors, 1)[0];

/**
 * From https://stackoverflow.com/a/19270021/12701172
 *
 * @export
 * @param arr Array to sample
 * @param n Number of elements to take
 * @returns `n` random elements from `arr`
 */
export function getRandom<T>(arr: Array<T>, n: number): Array<T> {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

/**
 * Adapted from https://stackoverflow.com/a/37980601/12701172
 *
 * @export
 * @returns {number[]} An array of numbers from `start` to `end-1`
 */
export function range(start: number, end: number): number[] {
  return ((r, e) => [...Array(e - r + 1).keys()].map((e) => e + r))(start, end);
}
