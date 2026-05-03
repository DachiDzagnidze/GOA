const buf1 = Buffer.from("Hello World");
console.log(buf1);

const text = "NodeJS Buffer";
const buf2 = Buffer.from(text);
const backToString = buf2.toString();
console.log(backToString);

const buf3 = Buffer.alloc(10);
buf3.write("Dachi");
console.log(buf3.toString());

const part1 = Buffer.from("Hello, ");
const part2 = Buffer.from("Dachi!");
const combined = Buffer.concat([part1, part2]);
console.log(combined.toString());

const compare1 = Buffer.from("Test");
const compare2 = Buffer.from("Test");
const compare3 = Buffer.from("Different");
console.log(compare1.equals(compare2));
console.log(compare1.equals(compare3));

console.log(process.pid);
console.log(process.cwd());
console.log(process.argv);

if (process.argv.length <= 2) {
    console.log("No argument");
    process.exit(1);
} else {
    console.log("მომხმარებელმა არგუმენტი გადმოსცა.");
}
