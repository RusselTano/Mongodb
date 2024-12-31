use("testdb");

db.users.insertOne({
  "name": "Alice",
  "email": "alice@example.com",
  "password": "citization",
  "created_at": new Date(),
  "updated_at": new Date()
});

db.users.find({
});
