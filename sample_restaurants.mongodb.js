use("sample_restaurants")

// db.restaurants.createIndex({ "address.zipcode": 1 })
// db.restaurants.createIndex({ "address.zipcode": 1, cuisine: 1 })
// db.restaurants.getIndexes()
// db.restaurants.dropIndex({cuisine: 1})

// db.restaurants.explain("executionStats").find({ cuisine: "American" })
db.restaurants.explain("executionStats").find({ cuisine: "American", "address.zipcode": "11369" })





/**
 * sans indexe
executionStats": {
    "executionSuccess": true,
    "nReturned": 34,
    "executionTimeMillis": 14,
    "totalKeysExamined": 0,
    "totalDocsExamined": 25359,
    "executionStages": {
      "isCached": false,
      "stage": "COLLSCAN",
      "filter": {

      avec indexe
   "executionSuccess": true,
    "nReturned": 34,
    "executionTimeMillis": 9,
    "totalKeysExamined": 6183,
    "totalDocsExamined": 6183,
    "executionStages": {
      "isCached": false,
      "stage": "FETCH",
      "filter": {

      avec intersection d'index
      executionStats": {
    "executionSuccess": true,
    "nReturned": 34,
    "executionTimeMillis": 0,
    "totalKeysExamined": 99,
    "totalDocsExamined": 99,

    avec index composee
    executionStats": {
    "executionSuccess": true,
    "nReturned": 34,
    "executionTimeMillis": 0,
    "totalKeysExamined": 34,
    "totalDocsExamined": 34,
 */
