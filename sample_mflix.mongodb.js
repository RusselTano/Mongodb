use("sample_mflix")

db.movies.find({
  "year": { $in: [1923, 1924] },
  "imdb.rating": { $gt: 7 },
  "tomatoes.viewer.rating": { $gte: 4 }
})

// Operateur de comparaison
// $eq, $ne
// $in, $nin
// $gt, $gte
// $lt, $lte