import chalk from "chalk";
import figlet from "figlet";
import moment from "moment";
import inquirer from "inquirer";
import { v4 as uuidv4 } from "uuid";

//! chalk
console.log(chalk.green("hello dachi"));
console.log(chalk.red("error"));

//! figlet

figlet("dachi", async (err, data) => {
  if (err) {
    console.log("somethings went wrong...");
    return;
  }
});

console.log(data);

//! moment

console.log("current data and time:", moment(), format("YYYY-MM-DD HH:mm"));

//! imquirer

const answers = await inquirer.prompt([
  { type: "input", name: "userName", message: "debili xar" },
]);

//! UUID

console.log("5 cali UUID");
for (let i = 0; i < 5; i++) {
  console.log(uuidv4());
}

export default App;
