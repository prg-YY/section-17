'strict mode';
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// spendingLimits.jay = 200;
console.log(spendingLimits);
const getLimit = user => spendingLimits?.[user] ?? 0;

//pure function :D
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  //eger isim girguzilmise default isim yezildu ,(default parameters)
  // if (!user) user = 'jonas';
  const cleanUser = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }
  //ustidiki bilen ohxax

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  // yine bir hil yezilixi
  // const limit = getLimit(user);

  return value <= getLimit(cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;

  // budget.push({ value: -value, description, user:cleanUser });
};
const newBadget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
// console.log(newBadget1);
const newBadget2 = addExpense(
  newBadget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBadget3 = addExpense(newBadget2, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpenses = function () {
  for (const entry of newBadget3) {
    // let lim;
    // if (spendingLimits[entry.user]) {
    //   lim = spendingLimits[entry.user];
    // } else {
    //   lim = 0;
    // }

    // const limit = spendingLimits?.[entry.user] ?? 0;

    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
  }
};
checkExpenses(newBadget3, spendingLimits);
console.log(newBadget3);

const logBigExpenses = function (bigLimit) {
  let output = '';

  for (const entry of budget) {
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2) + ' / '}` : ''; // Emojis are 2 chars
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

// console.log(budget);
logBigExpenses(500);

// const arr = [2, 4, 6, 8];
// const doubled = [];
// const doubled2 = arr.map(n => n * 2);
// console.log(doubled2);

// for (let i = 0; i < arr.length; i++) doubled[i] = arr[i] * 2;
// console.log(doubled);
