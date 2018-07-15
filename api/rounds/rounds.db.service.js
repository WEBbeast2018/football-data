const data = [
  {
    "name": "Matchday 1",
    "matches": [
      {
        "date": "2016-08-13",
        "team1": {
          "key": "hull",
          "name": "Hull City",
          "code": "HUL"
        },
        "team2": {
          "key": "leicester",
          "name": "Leicester City",
          "code": "LEI"
        },
        "score1": 2,
        "score2": 1
      },
      {
        "date": "2016-08-13",
        "team1": {
          "key": "burnley",
          "name": "Burnley",
          "code": "BUR"
        },
        "team2": {
          "key": "swansea",
          "name": "Swansea",
          "code": "SWA"
        },
        "score1": 0,
        "score2": 1
      }
    ]
  }
];

function extractMatchDay(name) {
  return name.substr(name.lastIndexOf(' ')).trim();
}

module.exports = {
  all: (callback) => {
    callback(data);
  },
  findByMatchday: (mday, callback) => {
    const filteredData = data.filter(r => extractMatchDay(r.name) === mday);
    callback(filteredData);
  }
};