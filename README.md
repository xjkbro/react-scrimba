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
## Functional Components
* To render functional components, the function must be in a self closing tag. ex. <App />
* Components can created in a separate file and can be imported. (Standard convention, with naming convention as camel case, ex. (MyComponent.js)
* Components in separate files must be exported with "export default ComponentName"


## Props
* In HTML some elements require some type of attribute more than just their tag for it to function properly. 
* An anology for props are like attributes for elements as props for components or as parameters for functions.
    - ex. We have a card, and in one card it has an img, a name, a phone number and an email. We are trying to output 5 different cards but all the information is different.

* The use of props passed in a component
```
    <Card                                       //Card component
        name="someName"                         //Cards props being passed in
        imgURL="http://someURL.com/"
        phone="555-555-555"
        email="someEmail@gmail.com"
    />
```
* The component and using the props
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
        info = {{                                       //Remember double curly
        name: "someName,                                //1st to use Javascript
        imgURL: "http://someURL.com/",                  //2nd to say were using an object.
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
###### It's crucial to learn basic Vanilla Javascript to use React. Majority of the time when using React, you'll most likely need to use Higher-Order methods like map, filter, sort. [Reference](https://scrimba.com/p/p7P5Hd/cDZbahv)
const jokeAPI = 'https://official-joke-api.appspot.com/random_joke';
let joke = fetch(jokeAPI).json();
conosole.log(joke);

## Class Based Component
* Functional components can limit you.
* Class components can have a constructor
    - each constructor must have a call to `super()` which goes to the parent class aka the super class and brings some information to the calling/working class or the component could use that information.
    - ex. These are the same components. Ones a functional component and the other is a class component.
```
function FuncComp() {
    return (
        <h1> Hello </h1>
    )
}

class ClassComp extends React.Component {
    render() {
        return (
            <h1> Hello </h1>
        }
    }
}
```
In class components 
```
class ClassComp extends React.Component {
    sayHello() {                                    //this is where you can create class methods
        return "Hello"
    }
    render() {
        const name = this.props.name;               //this is where you can use javascript 
                                                    //and usage of props require `this`
        return (
            <div>
                <p>{this.sayHello()} {name}</p>     //class methods require `this` to be used
            </div>
        )
    }
}
```

## States
* This is the most important thing about learning React.
* State is the date that a component maintains. The data can change it's value. Similar to passing a parameter by reference or even pointers.
* **To use states the component must be a class based component.**
* States must be initialized in a *class* based components constructor.
    - ex. Example class component
```
class SomeComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            someKey: someValue              // to use this in any of the code just use `this.state.someKey` see below
        }
    }
    render() {
        return (
            <div>
                {this.state.someKey}
            </div>
        )
    }
}
```
* A basic pass a child component of SomeComponent should look like this `<SomeChildComponent key={this.state.someKey} />`

###### SetState
* Anytime you want to change state, you need to use the setState method
* Anytime you want to use setState in a method, you must bind that method to the constructor.
    - ex.
```
class SomeComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            someKey: 0
        }
        this.changeState = this.changeState.bind(this);                     
        // ^^ binding the changeState method to the constructor to use setState in that method
    }
    changeState(){
        this.setState((prevState) => {                  //setState gives you the value of the current state
                                                        // and allows you to change it by using that currentState as a parameter

            return {                                    //returns how the state object should look like or a new version of state
                count: prevState.count + 1              //cant use ++ because that directly modifies the state.
            }
        }
        );
    }
    render() {
        return (
            <div>
                <h1>{this.state.someKey}</h1>
                <button onClick={this.handleClick}>Change!</button>            
            </div>
        )
    }
}
    
```


###### Event Handlers
* Event Handlers are useful in React for the fact that it changes our static page to do something. 
* Helpful for checkboxes, buttons, etc.
* Every HTML Event Handler is in React but are now camel case. `onclick` is now `onClick`.
* Here are a list of Event Handlers are listed [here](https://www.w3schools.com/jsref/dom_obj_event.asp). Don't forget **camel case**.


