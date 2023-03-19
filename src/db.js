const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');

client.connect()
.then(console.log('database connected successfully'))
.catch(err => console.error(err))

const users = client.db('simple_api').collection('users');

const addUser = async (user) => {
  users.insertOne(user);
}

const updateUser = async (id, user) => {
  users.updateOne({'name': 'naol'}, {$set: {'name': 'josh'}});
};

const countUsers = async () => {
  console.log(await users.countDocuments());
}

countUsers();
addUser({'name': 'Josh'});

module.exports = {addUser}