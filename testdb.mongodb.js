use("testdb");

db.users.updateOne(
  {
    name: "isagi"
  },
  {
    $set: {
      name: "didi",
      "address.country": "Japan",
      "address.city": "Kyoto",
      "local.email": "didi@example.com"
    }
  }
);

db.users.find();
// db.users.insertOne({
//   name: "didi",
//   local: {
//     email: "didi@example.com"
//   },
//   address: {
//     country: "France",
//     city: "Paris"
//   }
// });

// oid ==> object id
// mogosh mongod compass terminal shell sont des client
// le driver c'est le langage que vous utilisez pour communiquer avec la base de données ex: nodejs, java, python

/**
Les ObjectId font 12 octets, ils sont rapides à générer et ordonnés.

4 octets sont un timestamp de création.

5 octets sont des valeurs aléatoires assurant l'unicité.

3 octets sont un compteur qui s'incrémente et qui démarre à une valeur aléatoire.
 */

/**
 * $set
 * $unset -> retirer un field
 * $inc
 * $min
 * $max
 */