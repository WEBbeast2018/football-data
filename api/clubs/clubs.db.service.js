const data = [
  {
    "key": "chelsea",
    "name": "Chelsea",
    "code": "CHE"
  },
  {
    "key": "arsenal",
    "name": "Arsenal",
    "code": "ARS"
  },
  {
    "key": "tottenham",
    "name": "Tottenham Hotspur",
    "code": "TOT"
  }
];

module.exports = {
  all: (callback) => {
    callback(data);
  },
  findByCode: (code, callback) => {
    callback(data.filter(c => c.code === code));
  }
};