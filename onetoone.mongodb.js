use("onetoone")

// 677713f01e2ba5b2d86539fd
db.users.insertOne({
  name: "Jean",
  title: "CEO",
  address: {
    street: "rue du college",
    zip: 75000,
    city: "Bathurst"
  }
})

db.users.findOne({
  _id: ObjectId('677715cfd7d82f26ecd609a3')
},{
  "address": 1,
  _id:0
})

