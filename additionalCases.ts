class DataStore<T> {
  private items: T[] = [];

  addItem(item: T) {
    this.items.push(item);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  getItem(index: number): T {
    return this.items[index];
  }

  getAllItems(): T[] {
    return this.items;
  }
}

const dataStore = new DataStore<string>();

function getValue<K, V>(key: K, value1: V, value2: V): V {
  if (key) {
    return value1;
  }
  return value2;
}

getValue("hello", 1, 2);
getValue<string, number>("hello1", 11, 23);

// Tuple
type Coordinate = [number, number];

function compareCoordinates(p1: Coordinate, p2: Coordinate): Coordinate {
  return [p1[0], p2[1]];
}

const coords: Coordinate[] = [];

// union
type StringOrNumber = string | number;

function getItemValue(item: StringOrNumber): StringOrNumber {
  if (typeof item == "string") {
    return item.toString();
  } else if (typeof item == "number") {
    return Number(item);
  }
  return 0;
}

interface BusinessPartner {
  name: string;
}

interface ContactDetails {
  email: string;
  phone: string;
}

type BusinessContact = BusinessPartner & ContactDetails;

const contact: BusinessContact = {
  name: "anu",
  email: "anuten@gmail.com",
  phone: "0334453535",
};

type CompContact = BusinessPartner | ContactDetails;

function addConItem(contact: CompContact) {
  if ("name" in contact) {
    console.log(`name in: ${contact.name}`);
  } else {
    console.log(`Others in ${contact.email} ${contact.phone}`);
  }
}

const conItem: CompContact = {
  name: "anu",
};

addConItem(conItem);
