use("sample_restaurants")

// db.restaurants.createIndex({ cuisine: 1 })
db.restaurants.dropIndex("cuisine_1")
db.restaurants.getIndexes()
// db.restaurants.explain("allPlansExecution").find()


