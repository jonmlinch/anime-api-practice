//Create a request variable and assign XMLHttpRequest() to it. This opens the connection for the impending API request.
const request = new XMLHttpRequest()

//Open the connecttion using the open method and include type of request, endpoint, and true(not sure what the true is for...yet)
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

//What we will do with data once we have it
request.onload = function() {
    //Begin accessing JSON here
    let data = JSON.parse(this.response)

    data.forEach(movie => {
        //Log movie titles for now
        console.log(movie.title)
    })
}

//Send request here
request.send();