/* ============================================================
   ARRAYS 3 — MOVIES DATABASE (boss level)
   ------------------------------------------------------------
   One big list of movie objects. Combine EVERYTHING: objects,
   conditions, and the array methods. Read the data shape first.
   Run:  node 3-database-movies.js
   ============================================================ */

// 16 movies. Fields:
//   title (string), year (number), genre (string),
//   rating (0-10), minutes (number), oscars (number)
const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "drama",
    rating: 9.3,
    minutes: 142,
    oscars: 0,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "action",
    rating: 9.0,
    minutes: 152,
    oscars: 2,
  },
  {
    title: "Inception",
    year: 2010,
    genre: "action",
    rating: 8.8,
    minutes: 148,
    oscars: 4,
  },
  {
    title: "Parasite",
    year: 2019,
    genre: "drama",
    rating: 8.5,
    minutes: 132,
    oscars: 4,
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "scifi",
    rating: 8.7,
    minutes: 169,
    oscars: 1,
  },
  {
    title: "The Matrix",
    year: 1999,
    genre: "scifi",
    rating: 8.7,
    minutes: 136,
    oscars: 4,
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    genre: "crime",
    rating: 8.9,
    minutes: 154,
    oscars: 1,
  },
  {
    title: "Forrest Gump",
    year: 1994,
    genre: "drama",
    rating: 8.8,
    minutes: 142,
    oscars: 6,
  },
  {
    title: "Gladiator",
    year: 2000,
    genre: "action",
    rating: 8.5,
    minutes: 155,
    oscars: 5,
  },
  {
    title: "Spirited Away",
    year: 2001,
    genre: "anime",
    rating: 8.6,
    minutes: 125,
    oscars: 1,
  },
  {
    title: "Whiplash",
    year: 2014,
    genre: "drama",
    rating: 8.5,
    minutes: 106,
    oscars: 3,
  },
  {
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: "action",
    rating: 8.1,
    minutes: 120,
    oscars: 6,
  },
  {
    title: "Joker",
    year: 2019,
    genre: "crime",
    rating: 8.4,
    minutes: 122,
    oscars: 2,
  },
  {
    title: "Dune",
    year: 2021,
    genre: "scifi",
    rating: 8.0,
    minutes: 155,
    oscars: 6,
  },
  {
    title: "Oppenheimer",
    year: 2023,
    genre: "drama",
    rating: 8.3,
    minutes: 180,
    oscars: 7,
  },
  {
    title: "Your Name",
    year: 2016,
    genre: "anime",
    rating: 8.4,
    minutes: 106,
    oscars: 0,
  },
];

/* ============================================================
   BUILD THE 10   (3 cases each — all must pass)
   ============================================================ */

// ----- 1. Count them (WORKED EXAMPLE) -----
function countMovies(db) {
  return db.length;
}
console.log(countMovies(movies)); // 16
// TEST 1:  countMovies(movies)   ->  16
// TEST 2:  countMovies([])       ->  0
// TEST 3:  countMovies([movies[0]]) -> 1

// ----- 2. filter by genre -----
// Write `byGenre(db, genre)` -> array of movies in that genre.
// your code here

// console.log(byGenre(movies, "scifi").length);
// TEST 1:  byGenre(movies,"scifi").length   ->  3
// TEST 2:  byGenre(movies,"anime").length   ->  2
// TEST 3:  byGenre(movies,"horror").length  ->  0

// ----- 3. filter + condition -----
// Write `topRated(db)` -> movies with rating >= 8.7.
// your code here

// console.log(topRated(movies).length);
// TEST 1:  topRated(movies).length                          ->  7
// TEST 2:  topRated(movies).every(m => m.rating >= 8.7)     ->  true
// TEST 3:  topRated([{rating:5}]).length                    ->  0

// ----- 4. map — just the titles -----
// Write `allTitles(db)` -> array of every title (strings only).
// your code here

// console.log(allTitles(movies)[0]);
// TEST 1:  allTitles(movies)[0]        ->  "The Shawshank Redemption"
// TEST 2:  allTitles(movies).length    ->  16
// TEST 3:  allTitles(movies)[15]       ->  "Your Name"

// ----- 5. find by title -----
// Write `findByTitle(db, title)` -> the one movie object, or undefined.
// your code here

// console.log(findByTitle(movies, "Joker").year);
// TEST 1:  findByTitle(movies,"Joker").year     ->  2019
// TEST 2:  findByTitle(movies,"Dune").oscars    ->  6
// TEST 3:  findByTitle(movies,"Not Real")       ->  undefined

// ----- 6. reduce — total oscars -----
// Write `totalOscars(db)` -> sum of every movie's .oscars.
// your code here

// console.log(totalOscars(movies));
// TEST 1:  totalOscars(movies)            ->  52
// TEST 2:  totalOscars([])                ->  0
// TEST 3:  totalOscars([{oscars:3}])      ->  3

// ----- 7. average rating -----
// Write `averageRating(db)` -> mean rating, rounded to 1 decimal.
// Hint: total / length, then Number(x.toFixed(1)).
// your code here

// console.log(averageRating(movies));
// TEST 1:  averageRating(movies)                    ->  8.6
// TEST 2:  averageRating([{rating:8},{rating:9}])   ->  8.5
// TEST 3:  averageRating([{rating:7}])              ->  7

// ----- 8. sort — best first -----
// Write `bestFirst(db)` -> NEW array sorted by rating, highest first.
// Hint: [...db].sort((a,b) => b.rating - a.rating)  (copy first!)
// your code here

// console.log(bestFirst(movies)[0].title);
// TEST 1:  bestFirst(movies)[0].title    ->  "The Shawshank Redemption"
// TEST 2:  bestFirst(movies)[0].rating   ->  9.3
// TEST 3:  bestFirst(movies).length      ->  16

// ----- 9. chain — filter + sort + map -----
// Write `bestActionTitles(db)` -> action movies, sorted best-first, titles only.
// your code here

// console.log(bestActionTitles(movies));
// TEST 1:  bestActionTitles(movies)[0]       ->  "The Dark Knight"
// TEST 2:  bestActionTitles(movies).length   ->  4
// TEST 3:  bestActionTitles(movies)[3]       ->  "Mad Max: Fury Road"

// ----- 10. GROUP — array of objects -> object of counts (the hard one) -----
// Write `countByGenre(db)` -> object mapping each genre to how many movies.
// Hint: result = {}; loop; result[m.genre] = (result[m.genre] || 0) + 1.
// your code here

// console.log(countByGenre(movies));
// TEST 1:  countByGenre(movies).drama    ->  5
// TEST 2:  countByGenre(movies).action   ->  4
// TEST 3:  countByGenre(movies).anime    ->  2
