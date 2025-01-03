use("test_users")

// db.createCollection("users", {
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       required: ["name", "lastname", "address"],
//       properties: {
//         address: {
//           bsonType: "object",
//           required: ["street", "zip", "city"],
//           properties: {
//             zip: {
//               bsonType: "int"
//             }
//           }
//         }
//       }
//     }
//   },
//   validationAction: "warn"
// })

db.users.insertMany([
  {
    name: "bob",
    lastname: "dilane",
    address: {
      street: "rue du college",
      zip: 4555,
      city: "Bathurst"
    }
  },
  {
    name: "Paul"
  }
])

// db.users.drop()

// db.users.find()