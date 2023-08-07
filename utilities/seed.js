const mongoose = require('mongoose');
const db = require('./config/connection');

const User = require('./models/User');
const Thought = require('./models/Thought');

const userSeedData = [
    {
        username: 'Jonny',
        email: 'jonny@ex.com',
        thoughts: [],
        friends: []
    },
    {
        username: 'Delaney',
        email: 'Delaney@ex.com',
        thoughts: [],
        friends: []
    }
];

const thoughtSeedData = [
    {
        thoughtText: 'This is an example thought by Jonny.',
        username: 'JohnDoe'
    },
    {
        thoughtText: 'This is an example thought by Delaney.',
        username: 'JaneSmith'
    }
];

const seedDatabase = async () => {
    await mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    await User.deleteMany({});
    await Thought.deleteMany({});

    await User.create(userSeedData);
    await Thought.create(thoughtSeedData);

    console.log('Database seeded!');
    process.exit(0);
};

seedDatabase();
