const db = require('../config/connection')
const { User, Thought } = require('../models')
const userData = require('./userData.json')
const thoughtData = require('./thoughtData.json')

db.once('open', async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});

  const users = await User.insertMany(userData);
  const thoughts = await Thought.insertMany(thoughtData);

  for (singleThought of thoughts) {
    const userId = users[Math.floor(Math.random() * users.length)];
    userId.thoughts.push(singleThought._id);
    Thought.findOneAndUpdate(
      { _id: singleThought._id },
      { $addToSet: { username: userId.username }},
      { new: true }
    );

    await singleThought.save();
    await userId.save();

  }

  console.log('Data has been seeded');
  process.exit(0);
})