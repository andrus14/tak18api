// Create a request variable and assign a new XMLHttpRequest object to it.
const request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function() {
  // Begin accessing JSON data here
    let data = JSON.parse(this.response)
    const container = document.getElementById('container')

    data.forEach(movie => {
        console.log(movie.description)
        const movie_div = document.createElement('div')
        movie_div.innerHTML = movie.title
        container.append(movie_div)
    });



}

// Send request
request.send()