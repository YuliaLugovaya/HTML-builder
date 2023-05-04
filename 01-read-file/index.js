const fs = require("fs").promises;

async function readFileTask() {
  const result = await fs.readFile("./01-read-file/text.txt", { encoding: "utf-8" });
  console.log(result);
}
readFileTask();
