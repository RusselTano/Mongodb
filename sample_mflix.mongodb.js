use("school")

// db.students.find()
db.students.findOneAndUpdate({},{
  $addToSet: {
    options: 15
  }
},{returnOriginal: false})
// db.students.findOneAndUpdate({},{
//   $push: {
//     grades: {
//       $each: [],
//       $sort: {score: -1}
//     }
//   }
// },{returnOriginal: false})
// db.students.findOneAndUpdate({},{
//   $push: {
//     grades: {
//       $each: [],
//       $slice: 4
//     }
//   }
// },{returnOriginal: false})
// db.students.findOneAndUpdate({},{
//   $push: {
//     grades: {
//       $each: [{score: 18},{score: 3}]
//     }
//   }
// },{returnOriginal: false})
// db.students.findOneAndUpdate({},{
//   $push: {
//     grades: {
//       score: 10
//     }
//   }
// },{returnOriginal: false})

db.students.findOneAndUpdate({},{
  $push: {
    grades: {
      $each: [{score: 15}, {score: 18}, {score: 12}],
      $sort: {score: -1},
      $slice: 5
    },
  }
},{returnDocument: "after"})
