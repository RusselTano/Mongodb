use("school")

db.students.findOneAndUpdate({},
  {
    $pull: {
      options: {$gt: 3, $lte: 10},
    }
  },
  {returnDocument: 'after'}
)


db.students.findOneAndUpdate({},
  {
    $pullAll: {
      grades: [{score: 12}, {score: 13}],
    }
  },
  {returnDocument: 'after'}
)

// $ remplace l'indice
db.students.findOneAndUpdate(
  {
    grades: { score: 15 }
  },
  {
    $set: { "grades.$.score" : 12 }
  },
  {returnDocument: 'after'}
)


db.students.findOneAndUpdate(
  {
    options: { $gte: 12 }
  },
  {
    $inc: { "options.$[]" : 2 }
  },
  {returnDocument: 'after'}
)

//on increment tout le monde si une valeur respecte la condition