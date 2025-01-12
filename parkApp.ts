// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(E: string, L: string): number {
  // Implement your solution here
  const [fromHours, fromMinutes] = E.split(":").map(Number);
  const [toHours, toMinutes] = L.split(":").map(Number);
  const entranceCharge = 2;
  const initialHourCharge = 3;
  const successiveHourCharge = 4;

  let totalCharges = entranceCharge;
  if (fromHours === toHours) {
    totalCharges += initialHourCharge;
    return totalCharges;
  } else {
    totalCharges =
      totalCharges +
      initialHourCharge +
      (toHours - fromHours - 1) * successiveHourCharge;

    if (fromMinutes !== toMinutes && toMinutes > 0) {
      totalCharges += successiveHourCharge;
    }

    return totalCharges;
  }
}
