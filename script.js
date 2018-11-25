//Create a request variable and assign XMLHttpRequest() to it. This opens the connection for the impending API request.
const request = new XMLHttpRequest()

//Open the connecttion using the open method and include type of request, endpoint, and true(not sure what the true is for...yet)
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

//What we will do with data once we have it
request.onload = function() {
    //Begin accessing JSON here
    let data = JSON.parse(this.response)
    if (request.status >= 200 && request.status <= 400){
        data.forEach(movie => {
            //Adding movie info to the DOM
            //Create card element
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            //Create an h1 to go into the card that has movie's title
            const h1 = document.createElement('h1')
            h1.textContent = movie.title

            //Create a p to go into the card that holds the movie desciption
            const p = document.createElement('p')
            movie.description = movie.description.substring(0, 300) //Limit to 300 char
            p.textContent = `${movie.description}...`

            //Add content to DOM
            container.appendChild(card)
            card.appendChild(h1)
            card.appendChild(p)
        })
    } else {
        //Make the error fancier
        const error = document.createElement('marquee');
        error.textContent = "WHY?!!!! It's not working and I just want to see my anime stuff"
        app.appendChild(error)
    }
    
}

//Send request here
request.send();

//**** DOM MANIPULATION STARTS HERE *****/

//Access the single div created in html
const app = document.getElementById('root')

//Create header image
const logo = document.createElement('img')
logo.src = 'logo.png';

//Create a container div
const container = document.createElement('div')
container.setAttribute('class', 'container')

//Add created elements to the page
app.appendChild(logo)
app.appendChild(container)