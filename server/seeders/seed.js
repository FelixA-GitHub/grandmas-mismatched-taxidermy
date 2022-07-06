const db = require('../config/connection');
const {  User, Item  } = require('../models');
const itemSeeds = require('./itemSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  await Item.deleteMany({});
  await Item.create(itemSeeds);

  await User.deleteMany({});
  await User.create(userSeeds);

  console.log('all done!');
  process.exit(0);
});