import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import emoji from "./emoji.json";
import Counter from "./components/Counter";
import "./App.css";

class App extends Component {
  
  state = {
    emoji
  };

  removeEmoji = id => {
    const emoji = this.state.emoji.filter(emoji => emoji.id !== id);
    this.setState({ emoji });
  };

  addPoint = id => {
    const emoji = this.state.emoji.filter(emoji => emoji.id !== id);
    this.setState({ emoji });
  };

  
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game!</Title>
        <Counter point={3} highPoint={12}/>
        {this.state.emoji.map(emoji => (
          <FriendCard
            addPoint={this.addPoint}
            id={emoji.id}
            key={emoji.id}
            name={emoji.name}
            image={emoji.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
