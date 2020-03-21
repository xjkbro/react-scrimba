# ReactJS
* Thank you to Scrimba's:
    - Bob Ziroll for the Introduction to React Course [here](https://scrimba.com/g/glearnreact)
    - Christian Jensen for the React Hooks Course [here](https://scrimba.com/g/greacthooks)
* Project Ideas: [Link 1](https://www.freecodecamp.org/news/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d/) [Link 2](https://www.freecodecamp.org/news/want-to-build-something-fun-heres-a-list-of-sample-web-app-ideas-b991bce0ed9a/)

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
    )}
```

<!-- const jokeAPI = 'https://official-joke-api.appspot.com/random_joke';
let joke = fetch(jokeAPI).json();
conosole.log(joke); -->

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

* In class components 

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
* State is the data that a component maintains. The data can change it's value. Similar to passing a parameter by reference or even pointers.
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

* If a component is passing a state as a prop to a child componenet, the child component gets rerendered by the parent component. 

###### Phase 6 of To Do App Example of using setState throughout Components
```
    
    const todosData = [
    {
        id: 1,
        text: "Take out the trash",
        completed: true
    },
    ...
    
    ------------------------
    function TodoItem(props) {
        return (
            <div className="todo-item">
                <input 
                    type="checkbox" 
                    checked={props.item.completed} 
                    onChange={() => props.handleChange(props.item.id)}
                />
                <p>{props.item.text}</p>
            </div>
        )
    }
    -------------------------
    class App extends React.Component {
        constructor() {
            super()
            this.state = {
                todos: todosData
            }
            this.handleChange = this.handleChange.bind(this)
        }
        
        handleChange(id) {
            this.setState(prevState => {
                const updatedTodos = prevState.todos.map(todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
                return {
                    todos: updatedTodos
                }
            })
        }
        
        render() {
            const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
            
            return (
                <div className="todo-list">
                    {todoItems}
                </div>
            )    
        }
    }

```

## Lifecycle methods
* Methods that has goals/milestones throughout the cycle of your React app as it's running. Best way to understand it is like a React app is like a human life. They have many goals and milestones during their whole lifecycle and things happen during each milestone up until they die, or their app stops running.
* https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
* List of very important ones: 
    - `render()` - It's job is to determine what gets displayed on the screen. You can run the render method as much as you want.
    - `componentDidMount()` - It's job is to run when the app initially launches/runs. Common use is to do an API call
    - `componentWillReceiveProps()` - It's a method that will always run when the particular component that has the function receives a props.
        - ex. ParentComponent uses the a child component and passes a prop name `< ChildComp name="Jason"/> ` if ChildComp had a `componentWillRecieveProps()` method in it, it would run first and every time you call a prop to ChildComp. 
        - Common use is to check if the props passed were different from before.
        - **Deprecated after v17**
    - `shouldComponentUpdate()` - It's a method that can be used to check if something happened and do some specific action if it did or nothing if it didn't. Commonly used to optimized the app. Will also take in parameters: `nextProps` and `nextState`
    - `componentWillUnmount()` - Commonly used to teardown or clean up code before your component disappears. ex. remove an event listener.
    - `componentDidUpdate()` - Similar to `componentDidMount()` however it wont run when it's first mounted because it never update. It would only run when something has been updated. The course's example was to change the color of the incrementing number whenever it did increment. Also important to know that you should be careful using setState in this method as it will cause an infinite loop.
* Deprecated Lifecycle methods after v17: `componentWillMount()`, `componentWillUpdate()`, and `componentWillReceiveProps()`
* In their place we will recieve: 
    - `static getDerivedStateFromProps(props, state)` - requires parameters props and state and also requires to be a static function. The method will need to return a new updated state based upon the props. Most likely not need it. 
    - `getSnapshotBeforeUpdate()` - create a backup of the current way things are. Won't be common to use.

## Forms
* Forms are handled differently than usual. 
* Especially for inputs. When inputting information in a text box, nothing will appear. It is required to include an `onChange` attribute with a `onChange={this.handleChange}` that manipulates the state so that every time you input a character, the onChange is changing the value of the textbox into state. 
* A easy way to handle the value in a text box

```
    handleChange(event) {
            this.setState({
                firstName: event.target.value               //sets state to the value that is in the text box
            })
        }

```

```
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value     //since the state values and the name value are the same, 
                                                        //you can use event.target.name for the property in state
                                                        //dont forget to use []
        })
    }
    
    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value={this.state.firstName}        //this doesnt really change anything, however
                                                        //adding state to the value gives the idea that 
                                                        //state is the single source of truth.
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange}
                />
                <input 
                    type="text" 
                    value={this.state.lastName}
                    name="" 
                    placeholder="Last Name" 
                    onChange={thi.handleChange}
                />
            </form>
        )
    }

```

* `<textarea />` tag is basically the exact same as input in React. 
* `<input type="checkbox" />` is used similarly to text input but `checked={this.state.isAllowed}` can be used as an attribute. 
* `<input type="radio" />` basically checkbox type but has only one value checked of all radio buttons
* `<select />` is followed with `<option></option>`
    - select will need `value={this.state.favColor} onChange={this.handleChange} name="favColor"`
    - option will need `value="aColor"`
    - ex.

```
    <select 
        value={this.state.favColor}
        onChange={this.handleChange}
        name="favColor" >

        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
    </select>
```

* In React, when a button is in a `<form>` it is handled as a submit.
* All in all, for forms, everything will require a `value`, `onChange` and `name` sometimes `type` attribute

## Component Architecture
* Render Logic and Business Logic or presentational component and smart component is typically separated to organized a particular component. This is called Component Architecture or referenced as Containers .
* This is done by separating the large component into a component that handles and maintains state. Then have that component delegate the logic that handles the UI logic to the presentational component, where that handles the props and displays logic to screen
* https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
* This isn't used as much with libraries like **Redux** or the **Context API**.
* Container will be the class component that manages the state. And will render just the paired component.
* Component will be the functional component that will receive props (specifically states.) and just return the display logic.
* Ex.
    - `FormContainer.js` will need to pass state and the handleChange method to `FormComponent.js` to display everything.
    - `FormComponent.js`
    - Look at example below how they are passed as props.
        - Passing props can be done by doing the spread function to pass the entire state `{...this.state}` and in `FormComponent.js` you can reference it by `props.lastName`, `props.firstName`, etc.
        - I just prefer the usage of `data={this.state}` and use `props.data.lastName`

* `FormComponent.js`

```
import React from "react"

function FormComponent(props) {
    return (
        <main>
            <form>
                <input 
                    name="firstName" 
                    value={props.data.firstName} 
                    onChange={props.handleChange} 
                    placeholder="First Name" 
                />
                <br />
                
                <input 
                    name="lastName" 
                    value={props.data.lastName}
                    onChange={props.handleChange} 
                    placeholder="Last Name" 
                />
                <br />
                
                <input 
                    name="age" 
                    value={props.data.age}
                    onChange={props.handleChange} 
                    placeholder="Age" 
                />
                <br />
                
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange}
                    /> Male
                </label>
                
                <br />
                
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                    /> Female
                </label>
                
                <br />
                
                <select 
                    value={props.data.destination} 
                    name="destination" 
                    onChange={props.handleChange}
                >
                    <option value="">-- Please Choose a destination --</option>
                    <option value="germany">Germany</option>
                    <option value="norway">Norway</option>
                    <option value="north pole">North Pole</option>
                    <option value="south pole">South Pole</option>
                </select>
                
                <br />
                
                <label>
                    <input 
                        type="checkbox"
                        name="isVegan"
                        onChange={props.handleChange}
                        checked={props.data.isVegan}
                    /> Vegan?
                </label>
                <br />
                
                <label>
                    <input 
                        type="checkbox"
                        name="isKosher"
                        onChange={props.handleChange}
                        checked={props.data.isKosher}
                    /> Kosher?
                </label>
                <br />
                
                <label>
                    <input 
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={props.handleChange}
                        checked={props.data.isLactoseFree}
                    /> Lactose Free?
                </label>
                <br />
                
                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>Your dietary restrictions:</p>
            
            <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
            <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
            <p>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</p>
            
        </main>
    )
}

export default FormComponent
```

* `FormContainer.js`

```
import React, {Component} from "react"
import FormComponent from "./FormComponent"

class FormContainer extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        }) 
    }
    
    render() {
        return(
            <FormComponent
                handleChange={this.handleChange}
                data={this.state}
            />
        )
    }
}

export default FormContainer
```

* Lastly, it's only necessary to import the Container in the main js.

## New additions following the Scrimba Course
* Methods can be substituted with a arrow function. This gives the method a lexical `this` and you dont need to **bind** the method in the constructor anymore
* Creating class variables is now available and now creating a constructor can now be deprecated. 
    - Ex. Instead of creating state in the constructor, it's now possible to create state out of the constructor by the following:
    - `state = { yourProp: "itsVal" }`
* The Context API is now released officially and it's an alternative to Redux. Both are state managers and will help minimized problems with passing props and state from parent to child. [Reference to Context API](https://reactjs.org/docs/context.html)
* Other important useful additions: 
    - Error Boundaries - https://reactjs.org/docs/error-boundaries.html
    - render props - https://reactjs.org/docs/render-props.html
    - Higher Order Components - https://reactjs.org/docs/higher-order-components.html
    - React Router - https://reacttraining.com/react-router/core/guides/philosophy
    - React Hooks - https://reactjs.org/docs/hooks-intro.html
    - React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html
* React is not going to completely deprecate Class components but Functional components are going to be the main way to create components. Hooks have made class components unnecessary. 

## React Hooks
* "Hooks into" state and lifecycle methods of components without using classes.
* Only use functional components across the board.
* Improve readability and organization of components.
* Different hooks you'll most likely need:
    - [useState()](#useState)
    - [useEffect()](#useEffect)
    - [useRef()](#useRef)
    - [useCallback()](#useCallback)
    - [useMemo()](#useMemo)
    - [React.memo](#react.memo)
    - [Custom Hooks](#custom-hooks)


###### useState()
* useState hook is basically the way to use state in a functional component.
* by using useState, you are essentially initializing state with whatever value/object you pass in as a state.
* useState returns an array of two values one with the state and one with a function to set the state.
* Ex. `const [count, setCount] = useState(0)`
    - count is the state. 
    - setCount is a function created exactly like setState but to only change the state of this particular state.
    - useState has the value 0 passed as the value of within state.
    - convention is to name the state whatever the state is about and name the function setTHENAMEOFTHESTATE
    - whatever the value passed in useState doesnt have to be a single value and can be an object, however changing the state is just as hard as before with spread notation. so it's better to create a new state.
    - `const example = useState('hello'); console.log(example)` the console will log `['hello', f() ]`
    - `const [greeting, setGreeting] = useState('Hello'); console.log(greeting)` the console will log `Hello`



###### useEffect()
* useEffect is a replacement to 3 lifecycle methods: componentDidMount, componentDidUpdate, componentWillUnmount
* Best way to think about useEffect is to not think about it as a replacement to these lifecycle methods. but to think of it as a method that can be used when a something requires a 'side effect' to happen or when something needs to get or do something outside of the component. 
    - Ex. API fetch, Network request, manual DOM manipulation, event listeners/timeouts
    - anything, as long as it doesnt require touching state.
* When using useEffect(), useEffect provides a callback function as the first parameter and can require an array as the second parameter. 
    - This array is essentially a filter for the useEffect to run. So if something or a state is in that array, the  useEffect will run. 
    - If you leave out the array, the useEffect will run whenever something has changed or something was rerendered similar to componentDidUpdate. However updating state without a filter array, can cause infinite loop considering the component will need to rerender every time you changed a state.
    - If you include a blank array, the useEffect will act as a componentDidMount and componentDidUpdate and can avoid a infinite loop.
* Very hard to really demonstrate but with the last lifecycle method useEffect can be used for is componentDidUnmount and SBob Ziroll uses the example of created a separate useEffect method which uses setInterval as some side effect example that increments the count every second. To unmount this incrementation it's necessary to make sure: 
    - The filter array is empty, initialize an id for the interval method you want to clear then return a function that calls clearInterval with the parameter of the interval methods id.
    - Ex.

```
useEffect(() => {
    const intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1)
    }, 1000)
    return () => clearInterval(intervalId)
}, [])
```

- Basically, it's just a way to stop the incrementation when the component is unmounted.

###### useRef()
* useRef

###### useCallback()
* useCallback

###### useMemo()
* useMemo

###### React.memo
* React.memo

###### Custom Hooks
* Custom Hooks

## React Router
* A way to load different parts of your react app as different pages.


## Extras
###### Conditional Rendering 
* Loading something on the screen if a certain condition is true. 
* Good use is to have a loading message and done loading message.

###### Event Handlers
* Event Handlers are useful in React for the fact that it changes our static page to do something. 
* Helpful for checkboxes, buttons, etc.
* Every HTML Event Handler is in React but are now camel case. `onclick` is now `onClick`.
* Here are a list of Event Handlers are listed [here](https://www.w3schools.com/jsref/dom_obj_event.asp). Don't forget **camel case**.


###### Useful Javascript/ES6 functionality.
* It's crucial to learn basic Vanilla Javascript to use React.
* Majority of the time when using React you'll most likely need to use:
    - Object spread notation `{...someObject}` short hand to give a new object the same properties as someObject.
    - Arrow Functions `() => {}` short hand for creating a function. `function someFunction() {}`
    - Higher-Order methods like map, filter, sort. [Reference](https://scrimba.com/p/p7P5Hd/cDZbahv)
* Basically know ES6

