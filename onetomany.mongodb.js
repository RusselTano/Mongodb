use("onetomany")
//677734c2cb302e9428e11078
// db.movies.insertOne({
//   title: "Fight Club",
//   reviews: []
// })
// db.reviews.insertMany([
//   {
//     comment: "Genial",
//     email: "didi@gmail.com"
//   },
//   {
//     comment: "Cool",
//     email: "bibi@gmail.com"
//   }
// ])

// db.movies.findOneAndUpdate({
//   _id: ObjectId("677734c2cb302e9428e11078")
// }, {
//   $push: {
//     reviews: {
//       $each: [
//         ObjectId("677735156c10e04e59e92ac0"),
//         ObjectId("677735156c10e04e59e92ac1"),
//       ]
//     }
//   }
// }, { returnOriginal: false })

db.reviews.find({

})