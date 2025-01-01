use("sample_mflix")

db.movies.find({
  // title: /.*murder.*/i
  title: { $in: [/.*cops.*/i, /.*thief.*/i] }
})


// db.movies.countDocuments(
//     {
//         title: { $regex: /^The land/, $options: 'i' }
//     }
// )
use('sample_mflix');
db.movies.find(
    {
        $expr: {
            $lt: ['$imdb.rating', {$multiply: ['$tomatoes.viewer.rating', 2] }]
        }
    }
)
//L'opérateur $expr permet notamment de comparer des champs d'un même document entre eux..