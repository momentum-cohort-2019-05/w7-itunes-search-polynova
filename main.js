const inputBar = document.querySelector('#searchBar');
const browseButton = document.querySelector('#searchButton');
const searchUrl = "https://itunes-api-proxy.glitch.me/search?term=";
const condensedResult = searchUrl + inputBar.value
const displayResult =document.querySelector('#display')
const play = document.querySelector('#audio')
console.log(play)
const playSource = document.querySelector('#music-source')
let cors ="https://cors-anywhere.herokuapp.com/"
let results

function q (sel) {
    return document.querySelector(sel)
  }

function qs (sel) {
    return document.querySelectorAll(sel)
  }

function displayNode (result) {
    const displayDiv = document.createElement('div')
    displayDiv.classList
    displayDiv.innerHTML = `
    <div class="artistName">
    <img src="${result.artworkUrl100}">
    <h3> ${result.artistName} </h3>
    <h4> ${result.trackName} <h4>
    <button class="listenToSample" src="${result.previewUrl}" id="listen" value="Listen Now!"> Listen Now! </button>
    `
    return displayDiv
}




browseButton.addEventListener('click', function () {
    const resultsDiv = document.querySelector('#artist-results')
    fetch(cors + searchUrl + inputBar.value)
        .then(result => {
            console.log(result);
            return result.json();
})
        .then(data => {
    // displayResult.innerText = data.results
             resultsDiv.innerHTML = ''
             results = data.results
    
    for (let result of data.results) {
        resultsDiv.appendChild(displayNode(result))
    // displayResult.innerText += result.artistName
    // displayResult.innerText += result.artistId
    // displayResult.innerText += result.viewUrl
    // play.src = result.previewUrl
    // play.load()
    // displayResult.innerText += result.artistViewUrl
    // displayResult.innerText += result.collectionCensoredName
    // displayResult.innerText += result.trackName
    // displayResult.innerText += result.artworkUrl100
}
    console.log(data)
})
.catch(error => console.log(error));
})

q('#artist-results').addEventListener ('click',  function(event){    
    if (event.target && event.target.matches('#listen')) {
        console.log(event.target)
        console.log(event.target.getAttribute('src'))
        play.src = event.target.getAttribute('src')
        play.load()
        play.play()
    }
})






// fetch('http://example.com/movies.json')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
//   });



// fetch('')
//   .then (data => data.json())
//   .then(jason => {
//     console.log(json)
//   })
//   .catch (error => console.log(error))

