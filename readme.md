# Chapitre 4 : Les opérateurs de recherche

## Les Operateur de comparaison

$eq, $ne
$in, $nin
$gt, $gte
$lt, $lte

## Les opérateurs logiques

$and
$or
$nor
$not

## Les opérateurs d'évaluation

$regex
$expr permet notamment de comparer des champs d'un même document entre eux..

## Les opérateurs d'élément

$exists L'opérateur $exists permet de sélectionner les documents qui ont (true) ou non (false) le champ spécifié.
$type L'opérateur $type permet de sélectionner les documents où la valeur d'un champ est d'un type BSON spécifié.

# Chapitre 5 : Les opérateurs de tableaux

## Effectuer des recherches sur des tableaux avec $all et $elemMatch

L'opérateur $all permet de rechercher les tableaux qui contiennent plusieurs éléments spécifiés.

# Les opérateurs de mise à jour $push et $addToSet

```js
$push: {
  options: [12, 15];
}
$push: {
  options: {
    $each: [12, 15, 22];
  }
}
```

dans le premier cas on insere le tableau [12,15,22]
dans le second cas on insere les valeur 12,15,22 a la suit dans le tableu

```js
use("school");
db.students.findOneAndUpdate(
  {},
  {
    $push: {
      options: { $each: [], $sort: -1 },
      grades: { $each: [], $sort: { score: 1 } },
    },
  },
  { returnDocument: "after" }
);
```

`Il est obligatoire d'utiliser $sort avec $each, si vous voulez uniquement trier le tableau sans ajouter d'élément vous pouvez passer un tableau vide à $each.`

---

```js
use('school');
db.students.findOneAndUpdate({},
  {
    $push: {
      options: { $each: [], $slice: -6 },
    }
  },
  {returnDocument: 'after'}
)
```
`Il est obligatoire d'utiliser $slice avec $each, si vous voulez uniquement supprimer des éléments du tableau sans ajouter d'élément vous pouvez passer un tableau vide à $each.`

<p>$addToSet n'ajoute pas une valeur si elle est deja presente.
il ne prend pas sort et slice</p>


```js
use('school');
db.students.findOneAndUpdate({},
  {
    $addToSet: {
      grades: {
        $each: [{score: 20}, {score: 20}],
      },
    }
  },
  {returnDocument: 'after'}
)
```

On peut utilser es trois a la fois
