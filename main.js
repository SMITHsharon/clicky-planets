var showPlanets = document.getElementById("showPlanets");
var output = document.getElementById("planetHolder");
var planetBoxes = document.getElementsByClassName('planetBox');

var planets = [
	{
		name: "Mercury", 
		url: "http://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1440/AW_Mercury_ladprw.jpg"
	}, 
	{
		name: "Venus",
		url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg"
	},
	{
		name: "Earth",
		url: "http://www.knowmuhammad.org/files/f1fbb6b81087c12c48a70b497bf82b8a.jpg"
	},
	{
		name: "Mars",
		url: "http://space-facts.com/wp-content/uploads/mars.jpg"
	},
	{
		name: "Jupiter",
		url: "https://busrahayirsever46blog.files.wordpress.com/2014/04/jpiter.jpg"
	},
	{
		name: "Saturn",
		url: "https://d13yacurqjgara.cloudfront.net/users/143580/screenshots/2580711/saturn-shot_1x.png"
	},
	{
		name: "Uranus",
		url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg"
	},
	{
		name: "Neptune",
		url: "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/2015/thegasandice.jpg"
	}
]


function writeToDOM(){
	output.innerHTML = ""; 
	for (var i=0; i<planets.length; i++) {
		var newPlanet = "";
		newPlanet += `<div class="planetBox" id="planetBox-${i}">`
		newPlanet += `<div class="planetName hidden"> ${planets[i].name} </div>`; 
		newPlanet += `<img class="planetImage" src="${planets[i].url}">`;
		newPlanet += `</div>`;
		output.innerHTML += newPlanet;


		// output.innerHTML += '<div class="planetName">' + planets[i] + '</div>';
		// output.innerHTML += `<div class="planetName"> ${planets[i].name} </div>`; // string template ES6
																			 // wrap the whole string in tick marks
																			 // enclose the variable in brackets + $
																			 // delete the plus signs
	}
}

function showMeTheMoney(event) {
	if (event.target.className === 'planetImage') {
		console.log("event worked ", event);
		console.log("unique ID ", event.target.parentNode.id); // traversing up one level to parent
		console.log("text? ", event.target.previousSibling);   // traversing to sibling
		event.target.previousSibling.classList.remove('hidden');
	}
}


showPlanets.addEventListener("mouseenter", writeToDOM);

document.body.addEventListener("click", showMeTheMoney);





