//Used to initially set up the program files but also used as a practice point for using .js & .ts

const world = 'world';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}