// use("sample_mflix")

// db.movies.countDocuments(
//     {
//         'tomatoes.viewer.rating': { $exists: false }
//     }
// )

// db.movies.find(
//     {
//         'imdb.rating': { $type: 2 }
//     }
// )

// use('sample_mflix');
// db.movies.find(
//     {
//         'tomatoes': { $type: 'null'}
//     }
// )

use('sample_mflix');
db.movies.find(
    {
        'tomatoes': null
    }
)
//retourne tout les documents dont la valeur du champs  du champs est null et tout les document dont la valeurs n'est pas definis