import React from 'react';
// import './App.css';
import './jokes.css';


// import Joke from './Components/Joke'

class App extends React.Component {
  constructor() {
    super()
    this.state ={
        joke: {}
    }
    this.getJoke = this.getJoke.bind(this);
    this.sendToTwitter = this.sendToTwitter.bind(this);
  }
  async getJoke() {
    await fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          joke: data
        })
      })
  }
  componentDidMount(){
    this.getJoke();
  }

  sendToTwitter(){
    console.log('somejoke')
  }
  render(){
    return (
      <div className="App">
        <div className="line"></div>
        <div className="child">
        <h1>{this.state.joke.setup}</h1>
        <h4>{this.state.joke.punchline}</h4>

        <a href="#" onClick={this.getJoke}>New Joke</a>
        <a href="#" onClick={this.sendToTwitter}>LMAO</a>
        </div>
        
      </div>
    );
  }
}

export default App;
