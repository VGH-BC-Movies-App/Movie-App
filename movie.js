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


// movieKey

fetch(`${movieKey}`)
    //  Parse the response into json
    .then((response)=>{return response.json()})
    // access the results property from the json Object
    .then((jsonData)=>{
        console.log(jsonData);
        return jsonData.results;
    })
    // iterate over the results array, and access title and id properties of each film
    .then((results)=>{
        results.forEach((film)=>console.log(`${film.title} ${film.episode_id}`))
    })
    // This runs if my fetch request fails. Try changing films to xfilms in the url and look at the error that gets passed. It isn't what you think it would be.
    .catch(error => console.log('Error getting films.', error));

// Notice how this log runs before the we log the results.
console.log(movieKey);


 /// adding movies to list/////


function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<div class="d-flex align-items-baseline">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p class="ml-2 text-secondary">' + coffee.roast + '</p>';
    html += '</div>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}



function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var coffeNameInput = coffeeName.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast && coffee.name.toLowerCase().indexOf(coffeNameInput) !== -1) {
            filteredCoffees.push(coffee);
        }else if(selectedRoast === "All" && coffee.name.toLowerCase().indexOf(coffeNameInput) !== -1) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}




function addCoffee(e) {
    e.preventDefault();
    coffees.push({
        name: coffeeAddName.value,
        roast: roastAddSelection.value
    });
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        filteredCoffees.push(coffee)
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);

}