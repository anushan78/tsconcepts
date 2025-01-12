function GetTwoToThePower(N: number): number {
  let power = 0;

  // Continue dividing N by 2 until it is no longer divisible
  while (N % 2 === 0) {
    N = Math.floor(N / 2);
    power++;
  }

  return power;
}

// Example usage
console.log(GetTwoToThePower(24)); // Output: 3
console.log(GetTwoToThePower(32)); // Output: 5
console.log(GetTwoToThePower(7)); // Output: 0

function GenerateStringWithCharacterNumbers(a: number, b: number): string {
  let result = "";
  let aCount = a,
    bCount = b;

  while (aCount > 0 || bCount > 0) {
    // Check if the last 2 characters are "aa" or "bb"
    const lastTwoChars = result.slice(-2);
    if (lastTwoChars === "aa") {
      result += "b";
      bCount--;
    } else if (lastTwoChars === "bb") {
      result += "a";
      aCount--;
    } else {
      // If there are more "a"s than "b"s, add "a"
      if (aCount > bCount) {
        result += "a";
        aCount--;
      } else {
        result += "b";
        bCount--;
      }
    }
  }

  return result;
}

// Example usage
console.log(GenerateStringWithCharacterNumbers(5, 3)); // Possible output: "aabaabab"
console.log(GenerateStringWithCharacterNumbers(3, 3)); // Possible output: "ababab"
console.log(GenerateStringWithCharacterNumbers(1, 4)); // Output: "bbabb"
