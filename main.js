const inputBar = document.querySelector('#searchBar');
const browseButton = document.querySelector('#searchButton');
const searchUrl = "https://itunes-api-proxy.glitch.me/search?term=";
const condensedResult = searchUrl + inputBar.value
const displayResult =document.querySelector('#display')
const play = document.querySelector('#playback')

browseButton.addEventListener('click', function () {
    fetch(searchUrl + inputBar.value)
.then(result => {
    console.log(result);
    return result.json();
})
.then(data => {
    // displayResult.innerText = data.results
    for (let result of data.results) {
    displayResult.innerText += result.artistName
    // displayResult.innerText += result.artistId
    // displayResult.innerText += result.viewUrl
    play.src = result.previewUrl
    play.load()
    // displayResult.innerText += result.artistViewUrl
    // displayResult.innerText += result.collectionCensoredName
    displayResult.innerText += result.trackName
    displayResult.innerText += result.artworkUrl100
}
    console.log(data)
})
.catch(error => console.log(error));
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

