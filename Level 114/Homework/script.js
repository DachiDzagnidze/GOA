// thermometer
const thermometer = {
  _celsius: 0,

  set celsius(value) {
    this._celsius = value;
  },

  get fahrenheit() {
    return this._celsius * 9 / 5 + 32;
  }
};

thermometer.celsius = 25;
console.log(thermometer.fahrenheit);

// student grade
const student = {
  _score: 0,

  set score(value) {
    this._score = value;
  },

  get grade() {
    const s = this._score;
    if (s >= 90) return 'A';
    if (s >= 80) return 'B';
    if (s >= 70) return 'C';
    if (s >= 60) return 'D';
    return 'F';
  }
};

student.score = 88;
console.log(student.grade); // B

// secret password
const secureAccount = {
  _hashedPassword: '',

  set password(value) {
    this._hashedPassword = value.split('').reverse().join(''); 
  },

  get password() {
    return '*****';
  }
};

secureAccount.password = "mySecret123";
console.log(secureAccount.password); // *****
console.log(secureAccount._hashedPassword); 
