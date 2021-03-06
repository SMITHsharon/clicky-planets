### NSS Clicky Planets Class Exercise

### Project Description 
This is a simple class application created to demonstrate and discuss coding interactivity based on mouse events. 


#### Clicky Planets Screen Grab on Launch
![Clicky Planets Screen Grab on Launch](https://raw.githubusercontent.com/SMITHsharon/clicky-planets/screens/screens/Clicky%20Planets%20on%20Launch.png)

#### Clicky Planets Screen Grab After Mouseover `Show Me Planets`
![Clicky Planets Screen Grab After Mouseover Show Me Planets](https://raw.githubusercontent.com/SMITHsharon/clicky-planets/screens/screens/Clicky%20Planets%202.png)

#### Clicky Planets Screen Grab After Click on Particular Planet Elements
![Clicky Planets Screen Grab After Click on Particular Planet Elements](https://raw.githubusercontent.com/SMITHsharon/clicky-planets/screens/screens/Clicky%20Planets%20on%20Scroll.png)


### Project Specs
#### `JavaScript` basics
`JavaScript` coding syntax and constructs were demonstrated and discussed, including:
- declares and assigns values to `planets` object array, which includes an image file for each planet
- `css` styling, including `.btn:hover`, which changes the appearance of the `Show Me Planets` button upon a mouse `hover`
- builds the entire string of Planets from `planets` array, then writes to the DOM
- all Planets are initialized with `class="planetName hidden"`; when user clicks on a Planet element, the `hidden` class is removed, and value for `planets[i].name` displays in white on the Planet image.


### Technologies Used
- `html`
- `css`
- `JavaScript`


### How To View The Screen 
#### (Node must be installed on your machine):
```
git clone https://github.com/SMITHsharon/clicky-planets.git
cd clickyPlanets
http-server -p 8080
This will show in your browser at: http://localhost:8080
```


### Contributor
[Sharon Smith](https://github.com/SMITHsharon)
