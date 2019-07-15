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

        <div class="artist">
            <img class="artimage" src="${result.artworkUrl100}">         
                <h3> ${result.artistName} </h3>
                <h4> ${result.trackName} <h4>   
                <button class="listenToSample" src="${result.previewUrl}" id="listen" value="Listen Now!"> Listen Now! </button>
        </div>        
  
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


var colour="#fadadd";
var sparkles=300;
// below this is from online but I understand what its doing. I did modify 
// the color and the amount of times sparkles comes out.
var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var tiny=new Array();
var star=new Array();
var starv=new Array();
var starx=new Array();
var stary=new Array();
var tinyx=new Array();
var tinyy=new Array();
var tinyv=new Array();

window.onload=function() { if (document.getElementById) {
  var i, rats, rlef, rdow;
  for (var i=0; i<sparkles; i++) {
    var rats=createDiv(3, 3);
    rats.style.visibility="hidden";
    document.body.appendChild(tiny[i]=rats);
    starv[i]=0;
    tinyv[i]=0;
    var rats=createDiv(5, 5);
    rats.style.backgroundColor="transparent";
    rats.style.visibility="hidden";
    var rlef=createDiv(1, 5);
    var rdow=createDiv(5, 1);
    rats.appendChild(rlef);
    rats.appendChild(rdow);
    rlef.style.top="2px";
    rlef.style.left="0px";
    rdow.style.top="0px";
    rdow.style.left="2px";
    document.body.appendChild(star[i]=rats);
  }
  set_width();
  sparkle();
}}

function sparkle() {
  var c;
  if (x!=ox || y!=oy) {
    ox=x;
    oy=y;
    for (c=0; c<sparkles; c++) if (!starv[c]) {
      star[c].style.left=(starx[c]=x)+"px";
      star[c].style.top=(stary[c]=y)+"px";
      star[c].style.clip="rect(0px, 5px, 5px, 0px)";
      star[c].style.visibility="visible";
      starv[c]=50;
      break;
    }
  }
  for (c=0; c<sparkles; c++) {
    if (starv[c]) update_star(c);
    if (tinyv[c]) update_tiny(c);
  }
  setTimeout("sparkle()", 40);
}

function update_star(i) {
  if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
  if (starv[i]) {
    stary[i]+=1+Math.random()*3;
    if (stary[i]<shigh+sdown) {
      star[i].style.top=stary[i]+"px";
      starx[i]+=(i%5-2)/5;
      star[i].style.left=starx[i]+"px";
    }
    else {
      star[i].style.visibility="hidden";
      starv[i]=0;
      return;
    }
  }
  else {
    tinyv[i]=50;
    tiny[i].style.top=(tinyy[i]=stary[i])+"px";
    tiny[i].style.left=(tinyx[i]=starx[i])+"px";
    tiny[i].style.width="2px";
    tiny[i].style.height="2px";
    star[i].style.visibility="hidden";
    tiny[i].style.visibility="visible"
  }
}

function update_tiny(i) {
  if (--tinyv[i]==25) {
    tiny[i].style.width="1px";
    tiny[i].style.height="1px";
  }
  if (tinyv[i]) {
    tinyy[i]+=1+Math.random()*3;
    if (tinyy[i]<shigh+sdown) {
      tiny[i].style.top=tinyy[i]+"px";
      tinyx[i]+=(i%5-2)/5;
      tiny[i].style.left=tinyx[i]+"px";
    }
    else {
      tiny[i].style.visibility="hidden";
      tinyv[i]=0;
      return;
    }
  }
  else tiny[i].style.visibility="hidden";
}

document.onmousemove=mouse;
function mouse(e) {
  set_scroll();
  y=(e)?e.pageY:event.y+sdown;
  x=(e)?e.pageX:event.x+sleft;
}

function set_scroll() {
  if (typeof(self.pageYOffset)=="number") {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
  }
  else if (document.body.scrollTop || document.body.scrollLeft) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
	sdown=document.documentElement.scrollTop;
  }
  else {
    sdown=0;
    sleft=0;
  }
}

window.onresize=set_width;
function set_width() {
  if (typeof(self.innerWidth)=="number") {
    swide=self.innerWidth;
    shigh=self.innerHeight;
  }
  else if (document.documentElement && document.documentElement.clientWidth) {
    swide=document.documentElement.clientWidth;
    shigh=document.documentElement.clientHeight;
  }
  else if (document.body.clientWidth) {
    swide=document.body.clientWidth;
    shigh=document.body.clientHeight;
  }
}

function createDiv(height, width) {
  var div=document.createElement("div");
  div.style.position="absolute";
  div.style.height=height+"px";
  div.style.width=width+"px";
  div.style.overflow="hidden";
  div.style.backgroundColor=colour;
  return (div);
}

