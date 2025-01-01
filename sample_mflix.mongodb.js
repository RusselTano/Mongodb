use("sample_mflix")

// db.movies.find({
//       "imdb.rating": { $gt: 8 },
//       "tomatoes.viewer.rating": { $gt: 4 }
// })
// db.movies.find({
//   $or: [
//     {
//       "imdb.rating": { $gt: 8 }
//     },
//     {
//       "tomatoes.viewer.rating": { $gt: 4 }
//     }
//   ]
// })
db.movies.find({
  $and: [
    {
      "imdb.rating": { $gt: 8 }
    },
    {
      "tomatoes.viewer.rating": { $gt: 4 }
    }
  ]
})

db.movies.find({
  $and: [
    {
      $or: [
        { "imdb.rating": { $gt: 8 } },
        { "tomatoes.viewer.rating": { $gt: 4 } }
      ]
    },
    {
      $or: [
        { year: 1929 },
        { year: 1930 }
      ]
    }
  ]
})

use('sample_mflix');
db.movies.countDocuments(
    {
        'imdb.rating': { $not: { $lte: 9 } }
    }
)
//Attention ! Ce n'est pas la même chose que { $gt: 9 }, car les documents qui n'ont pas le champ spécifié sont aussi sélectionnés.