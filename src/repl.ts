import { createInterface } from "readline";

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "pokedex > ",
  });
  rl.prompt();
  rl.on("line", (line: string) => {
    const cleaned = cleanInput(line);
    if (cleaned.length === 0) {
      rl.prompt();
      return;
    } else {
      console.log(`Your command was: ${cleaned[0]}`);
      rl.prompt();
    }
  });
}
