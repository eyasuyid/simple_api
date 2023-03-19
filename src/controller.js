const {addUser} = require('./db')

exports.home = (req, res) => {
  res.send('hello world');
}

exports.about = (req, res) => {
  res.send('this is about naols');
}
