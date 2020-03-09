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


## Props
* In HTML some elements require some type of attribute more than just their tag for it to function properly. 
* An anology for props are like attributes for elements as props for components or as parameters for functions.
    - ex. We have a card, and in one card it has an img, a name, a phone number and an email. We are trying to output 5 different cards but all the information is different.
The use of props passed in a component
```
    <Card                                       //Card component
        name="someName"                         //Cards props being passed in
        imgURL="http://someURL.com/"
        phone="555-555-555"
        email="someEmail@gmail.com"
    />
```
The component and using the props
```
function Card(props) {
    return (
        <div>
            <img src={props.imgURL}/>
            <h1>{props.name}</h1>
            <ul>
                <li>Phone number: {props.phone}</li>
                <li>Email: {props.email}</li>
            </ul>
        </div>
    )
}
```
* If you require to pass in large number of props. It would be benneficial to create an object and pass a single prop.
    - ex.
```
    <Card
        info = {{                         //Remember double curly, 1st to use Javascript, 2nd to say were using an object.
        name: "someName,
        imgURL: "http://someURL.com/",
        phone: "555-555-555",
        email: "someEmail@gmail.com"
        }}
    />

    function Card(props) {
    return (
        <div>
            <img src={props.info.imgURL}/>
            <h1>{props.info.name}</h1>
            <ul>
                <li>Phone number: {props.info.phone}</li>
                <li>Email: {props.info.email}</li>
            </ul>
        </div>
    )
}

```