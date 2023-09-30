export default function chunkArray<T>(array: T[]) {
  const length = array.length;
  const subLength = Math.floor(length / 6);
  const remainder = length % 6;

  const result = [];
  let start = 0;

  for (let i = 0; i < 6; i++) {
    const end = start + subLength + (i < remainder ? 1 : 0);
    result.push(array.slice(start, end));
    start = end;
  }

  return result;
}
