use("sample_supplies")

db.sales.find({},{
  "customer.gender": 1,
  "customer.age": 1
})

// avec le find
// find({la condition},{ce que on veut retourner ou affcher},{})