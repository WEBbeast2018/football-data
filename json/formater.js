const fs = require('fs');

fs.readFile('rounds.json', 'utf8', (err,data) => {
  if (err) {
    return console.log(err);
  }
  const rounds = JSON.parse(data);
  const formattedRounds = formatRounds(rounds);

  fs.writeFile('formattedRounds.json', JSON.stringify(formattedRounds), (err) => {
    if (err) {
      return console.log(err);
    } else {
      return console.log('done');
    }
  });
});

function formatRounds(rounds) {
  const result = [];
  rounds.forEach((matchDay, i) => {
    const postponed = matchDay.name.toLowerCase().includes('postponed');
    matchDay.matches.forEach(match => {
      const fm = {...match, matchDay: i+1, postponed: postponed};
      result.push(fm);
    });
  });
  return result;
}