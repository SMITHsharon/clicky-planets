var showPlanets = document.getElementById("showPlanets");
var output = document.getElementById("planetHolder");

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
		url: "https://www.sciencenews.org/sites/default/files/2016/03/main/articles/_031116_cc_jupiter_free.jpg"
	},
	{
		name: "Saturn",
		url: "http://media.web.britannica.com/eb-media/64/21164-004-85B91671.jpg"
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
https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=imgres&cd=&cad=rja&uact=8&ved=0ahUKEwj9iNyR0aLSAhXF4yYKHd5FBCYQjRwIBw&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNeptune&psig=AFQjCNFuy08RZbWZPbv7rqPWw0jq76EZdA&ust=1487815940147291


function writeToDOM(){
	output.innerHTML = ""; 
	for (var i=0; i<planets.length; i++) {
		var newPlanet = "";
		newPlanet += `<div class="planetBox" id="planetBox-${i}">`
		newPlanet += `<div class="planetName"> ${planets[i].name} </div>`; 
		newPlanet += `</div>`
		output.innerHTML += newPlanet;


		// output.innerHTML += '<div class="planetName">' + planets[i] + '</div>';
		// output.innerHTML += `<div class="planetName"> ${planets[i].name} </div>`; // string template ES6
																			 // wrap the whole string in tick marks
																			 // enclose the variable in brackets + $
																			 // delete the plus signs
	}
}

showPlanets.addEventListener("click", writeToDOM);
