// Write code under this line
const users = [
  {name: "Moore Hensley"},
  {name: "Sharlene Bush"},
  {name: "Ross Vazquez"},
  {name: "Elma Head"},
  {name: "Carey Barr"},
  {name: "Blackburn Dotson"},
  {name: "Sheree Anthony"},
]
const getUserNames = array => array.map(({name}) => (name));

 console.log(getUserNames(users));

/* [
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
] */
