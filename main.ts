import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Outside, the rain has finished its shift. A cat is asleep on the warm square of floor where the sun was. " +
  "No one is waiting on the other side of the screen. The kettle is quiet, your cup still warm, " +
  "and the whole evening is yours to keep \u2014 page after page, unhurried.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
