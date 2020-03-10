import React from 'react';
// import Joke from './Components/Joke'

class App extends React.Component {
  constructor() {
    super()
    this.state ={
        joke: {}
    }
  }
  componentDidMount(){
    const jokeAPI = 'https://official-joke-api.appspot.com/random_joke';
    // const sw = 'https://swapi.co/api/people/1';

    let joke = fetch(jokeAPI)
      .then( res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          joke: data
        })
      })
        
    
  }
  render(){
    return (
      <div className="App">
        <h1>{this.state.joke.setup}</h1>
        <h4>{this.state.joke.punchline}</h4>
      </div>
    );
  }
}

export default App;
