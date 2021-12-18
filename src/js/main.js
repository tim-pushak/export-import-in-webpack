export let one = 'vasya';

let two = 'Ivan';

export {two};
 
export default function sayHi(name) {
    console.log(`Hello ${name}`);
}