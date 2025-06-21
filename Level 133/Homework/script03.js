fetch('https://randomuser.me/api/?results=5')
  .then(res => res.json())
  .then(data => {
    const users = data.results;


    console.log('forEach:');
    users.forEach(user => {
      console.log(`${user.name.first} ${user.name.last}`);
    });

   
    const names = users.map(user => `${user.name.first} ${user.name.last}`);
    console.log('map:', names);

    const totalAge = users.reduce((sum, user) => sum + user.dob.age, 0);
    console.log('reduce: საერთო ასაკი:', totalAge);
  });
