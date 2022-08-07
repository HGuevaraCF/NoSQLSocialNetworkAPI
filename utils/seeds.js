const connection = require('../config/connection');
// const { Course, Student } = require('../models');
const { User, Thought } = require('../models')
const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing Users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the students
//   const students = [];

  // Get some random assignment objects using a helper function that we imported from ./data
//   const assignments = getRandomAssignments(20);

//   // Loop 20 times -- add students to the students array
//   for (let i = 0; i < 20; i++) {
//     const fullName = getRandomName();
//     const first = fullName.split(' ')[0];
//     const last = fullName.split(' ')[1];
//     const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;
//     const friends = []

//     students.push({
//       first,
//       last,
//       friends
//     });
//   }

  // Add thoughts to the collection and await the results
  await Thought.collection.insertOne({
    thoughtText: 'UCLA',
    username: "hector",
    reactions: [],
  });

  // Add students to the collection and await the results
  await User.collection.insertOne({
    username: "hector",
    email: "hola@mail.com",
    thoughts: [],
    friends: []
  });


  // Log out the seed data to indicate what should appear in the database
//   console.table(students);
//   console.table(assignments);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
