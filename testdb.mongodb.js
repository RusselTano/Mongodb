use("testdb");

db.users.insertOne({
});

db.users.find();
// db.users.insertOne({
//   name: "didi",
//   local: {
//     email: "didi@example.com"
//   },
//   address: {
//     country: "France",
//     city: "Paris"
//   }
// });

// oid ==> object id
// mogosh mongod compass terminal shell sont des client
// le driver c'est le langage que vous utilisez pour communiquer avec la base de données ex: nodejs, java, python