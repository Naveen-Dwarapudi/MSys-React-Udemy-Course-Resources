import foods from "./foods";
import { choice, remove } from "./helpers";

// Randomly draw a food from the array
let food = choice(foods);
// Log the message "I'd like one RANDOMFOOD, please."
console.log(`I'd like one ${food}, please. `);
// Log the message "Here you go: RANDOMFRUIT"
console.log(`Here you go: ${food}`);
// Log the message "Delicious! May I have another?"
console.log(`Delicious! May I have another?`);
// Remove the fruit from the array of fruits
let remaining = remove(foods, food);
// Log the message "I'm sorry, we're all out. We have FOODSLEFT left."
console.log(
  `I'm sorry, we're all out. We have ${remaining.length} other foods left. `
);
