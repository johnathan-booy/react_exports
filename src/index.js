import { choice, remove } from "./helpers";
import foods from "./foods";

const food = choice(foods);

console.log(`I'd like one ${food}, please.`);
console.log(`Here you go: ${food}`);
console.log(`Delicious! May I have another?`);

remove(foods, food);

console.log(`I'm sorry, we're all out. We have ${foods.length} left.`);
