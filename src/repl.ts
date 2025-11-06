import { createInterface } from "readline";
import { getCommands } from "./commands.js";

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
    const availableCommands = getCommands()
    const firstWord = cleaned[0]
    if (cleaned.length === 0) {
      rl.prompt();
      return;
    }

    if (!availableCommands[firstWord]){
      console.log("Unknown command")
      rl.prompt()
      return;
    }

    try {
        availableCommands[firstWord].callback(availableCommands)
        return;
    } catch (e) {
      console.log(e)
    }
  });
}
