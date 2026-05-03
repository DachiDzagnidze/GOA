const fs = require('fs').promises;

async function runHomework() {
  try {
    await fs.writeFile('test.txt', 'Hello FS Module', 'utf8');
    console.log('1. test.txt created and written: "Hello FS Module"');

    const content = await fs.readFile('test.txt', 'utf8');
    console.log('2. Read text:', content);

    await fs.appendFile('test.txt', ' - Appended text', 'utf8');
    console.log('3. Text successfully appended to test.txt');

    const myInfo = {
      name: 'Dachi',
      age: 18
    };
    await fs.writeFile('info.txt', JSON.stringify(myInfo, null, 2), 'utf8');
    console.log('4. info.txt created with JSON format.');

    const infoContent = await fs.readFile('info.txt', 'utf8');
    const parsedInfo = JSON.parse(infoContent);
    console.log('5. Name read from info.txt:', parsedInfo.name);

    await fs.rename('test.txt', 'newTest.txt');
    console.log('6. File renamed (test.txt -> newTest.txt)');

    await fs.unlink('newTest.txt');
    console.log('7. newTest.txt file successfully deleted.');

  } catch (error) {
    console.error('An error occurred:', error);
  }
}

runHomework();
