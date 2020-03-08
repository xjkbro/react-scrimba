# ReactJS
Thank you to Bob Ziroll for the Scrimba Course [here](https://scrimba.com/g/glearnreact)
## JSX
* HTML that can run in js files
* Reacts language
* When rendering JSX, everything needs to be wrapped into one element
* If we want to interpret anything in JSX as JS, you can surround the JS code with {}.
    - ex.
```
    const name = "Jason";
    return (<h1> Hello {name}! </h1>)   //will return "Hello Jason!"
```
* A good convention to follow is by using ES6 convention of backticks.
    - ex.
```
    const firstName = "Jason";
    const lastName = "De Lara";
    return (<h1> Hello {`${firstName} ${lastName}`}! </h1>)   //will return "Hello Jason De Lara!"
```
### Styling
* In a JSX element you can add a class with a `className="someClass"`, you can't do this with Components you create.
* With JSX elements, inline styles are not interpreted as a string but an object.
    - ex. Normal HTML syntax, styling is a string like this `<h1 style="color: blue;">HELLO</h1>`
        but in JSX, it's an object, like this `<h1 style={{color: 'blue'}}>HELLO</h1>`
            It's double wrapped because if you want to use JS, you have to wrap the JS in {}, the styling is an object aka JS, therefore {{someObject: someVale}}
* CSS styles are set as camel case when doing in line styling.
    - ex. `<h1 style={{backgroundColor: "blue"}}>Hello World!</h1>`
* Since styling is placed as objects feel free to create an object and pass the object in the JSX element
    - ex.
```
    ...
    const styles = {
        color: "#FF8C00", 
        backgroundColor: "#FF2D00"
    }
    return (
        <h1 style={styles}>Good {timeOfDay}!</h1>
    )
    ...
```
## Components
* To render functional components, the function must be in a self closing tag. ex. <App />
* Components can created in a separate file and can be imported. (Standard convention, with naming convention as camel case, ex. (MyComponent.js)
* Components in separate files must be exported with "export default ComponentName"

