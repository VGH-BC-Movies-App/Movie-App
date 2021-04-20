let movieURL= "https://lava-rich-celsius.glitch.me/movies"

let movieObj = {"title": "resident evil",
    "rating": "5",
    "poster": "https://m.media-amazon.com/images/M/MV5BZmI1ZGRhNDYtOGVjZC00MmUyLThlNTktMTQyZGE3MzE1ZTdlXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg",
    "year": "2002",
    "genre": "Action, Horror, Sci-Fi",
    "director": "Paul W.S. Anderson",
    "plot": "A special military unit fights a powerful, out-of-control supercomputer and hundreds of scientists who have mutated into flesh-eating creatures after a laboratory accident.",
    "actors": "Ryan McCluskey, Oscar Pearce, Indra Ové, Anna Bolt",
    "id": 5,}

// let options = {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(movieObj)
// }
//
// fetch(movieURL, options).then(function(response){
//     console.log(response)
// })


  let putURL = "https://lava-rich-celsius.glitch.me/movies/5"

  // let movieObj = {"dream":"My dream is to finish the game Paper Mario: Origami King"}

  let options = {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
      },
        body: JSON.stringify(movieObj)
    }

fetch(putURL, options).then(function(response){
    console.log(response)
})