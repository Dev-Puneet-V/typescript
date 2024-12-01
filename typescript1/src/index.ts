interface User {
  id: string;
  name: string;
  age: string;
  email: string;
  password: string;
}
//A type with selected properties (name, age, and email) from the User interface.
type updateProps = Pick<User, "name" | "age" | "email">;

//A version of updateProps where all properties are optional.
type updatePropsOptional = Partial<updateProps>;

function updateUser(updatedProps: updatePropsOptional) {
  //hit the database to update the user
}

updateUser({
  name: "jOhn",
});

// readonly - do not change value in an object

type User2 = {
  readonly name: string;
  readonly number: string;
};

type User3 = {
  name: string;
  number: string;
};

// the below Readonly will only be for this onject
const user: Readonly<User3> = {
  name: "",
  number: "",
};

// Record and map
// Records lets you give a cleaner type to objects

type UsersAge = {
  [key: string]: number;
};

const users: UsersAge = {
  "ras@qd1": 21,
  "ras1dr@": 33,
};

// instead of above we can use
type Users = Record<string, { age: number; name: string }>;

const users1: Users = {
  "ra@qd1": { age: 21, name: "harkir" },
  "rasddw@": { age: 33, name: "Adsdsd" },
};

users1["ra@qd1"].age = 232;

const users3 = new Map();
users3.set("ra@qd1", { name: "Ras", age: 30, email: "ras@qd1" });
const usere = users3.get("ras@qd1");
console.log(usere);

//exclude - exclude bunch of values

type EventType = "click" | "scroll" | "mousemove";
type ExcludeEvent = Exclude<EventType, "scroll">; //here scroll is excluded

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent(`click`);
// handleEvent(`scroll`); //not allowed, since scroll is excluded


