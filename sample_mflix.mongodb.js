use("sample_supplies")

db.sales.find({
  "items.name": "printer paper"
})

// use("sample_mflix")
// db.movies.find({
//   genres: ["Fantasy"], la valeur du tableau = fantasy
//   genres: "Fantasy", contien fantasy et bien d'autres
// })