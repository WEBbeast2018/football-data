const mongoose = require('mongoose');

// create schema
const ClubSchema = mongoose.Schema({
  key: String,
  name: String,
  code: String,
});
const Club = mongoose.model('Club', ClubSchema);

module.exports = {
  all: (callback) => {
    Club.find({}, {_id:0}, (err, data) => {
      callback(data);
    })
  },
  findByCode: (code, callback) => {
    // todo: improve query
    Club.find({}, {_id:0}, (err, data) => {
      callback(data.filter(c => c.code === code));
    })
  }
};