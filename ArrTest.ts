function solution1(A: number[]): number {
  // Implement your solution here
  const positiveVals = A.filter((value: number) => value > 0);
  console.log(positiveVals);
  if (!positiveVals || positiveVals.length === 0) return 1;
  const sortedArray = positiveVals.sort((a, b) => a - b);
  const maxVal = sortedArray[sortedArray.length - 1];

  if (sortedArray) return maxVal - 1;

  return 0;
}

console.log(solution1([-1, -3]));
