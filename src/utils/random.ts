/**
 * Returns a random item from the given array
 * @param array The array to pick from
 * @returns A random item from the array
 */
export function randomItem<T>(array: T[]): T {
  if (!array.length) {
    throw new Error('Array cannot be empty');
  }
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Returns a random number between min and max (inclusive)
 * @param min Minimum value
 * @param max Maximum value
 * @returns A random number between min and max
 */
export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Converts a number to Khmer numerals
 * @param num The number to convert
 * @returns The number in Khmer numerals
 */
export function toKhmerNumber(num: number): string {
  const khmerNumerals = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
  return num.toString().replace(/[0-9]/g, (match) => khmerNumerals[parseInt(match)]);
}

/**
 * Returns a random boolean with the given probability
 * @param probability Probability of returning true (0-1)
 * @returns A random boolean
 */
export function randomBoolean(probability = 0.5): boolean {
  return Math.random() < probability
} 