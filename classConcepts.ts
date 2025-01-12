class Sogg {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Fogg {
  firstName: string;
  constructor(firstName: string) {
    this.firstName = firstName;
  }
}

// Type Guard: "is", "typeof", "instanceof"
function isSogg(pet: Sogg | Fogg): pet is Sogg {
  return (pet as Sogg).lastName !== undefined;
}

function getName(animal: Fogg | Sogg) {
  if (isSogg(animal)) {
    console.log(`${animal.firstName} ${animal.lastName}`);
  } else {
    console.log(`${animal.firstName}`);
  }
}

interface Warning {
  type: "Warning";
  msg: string;
}

interface Error {
  type: "Error";
  text: string;
}

interface Success {
  type: "Success";
  message: string;
}

type Log = Warning | Error | Success;

function printOutput(output: Log) {
  switch (output.type) {
    case "Error":
      console.log(output.text);
      break;
    case "Warning":
      console.log(output.msg);
      break;
    case "Success":
      console.log(output.message);
      break;
  }
}
