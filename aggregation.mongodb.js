use("sample_mflix")

db.movies.aggregate([
  {
    $match: {
      genres: "Fantasy",
      "imdb.rating": {
        $ne: ""
      }
    }
  },
  {
    $sort: {
      "imdb.rating": -1,
    }
  },
  {
    $limit: 2
  },
  {
    $skip: 1
  },
  {
    $out: "selectedMovie"
  }
])