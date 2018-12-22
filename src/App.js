import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import emoji from "./emoji.json";
import emoji2 from "./emoji.json";
import Counter from "./components/Counter";
import "./App.css";

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {

  // emoji - for rendering
  // emoji2 - for keeping score

  state = {
    emoji,
    emoji2,
    point: 0,
    highPoint: 0
  };


  addPoint = id => {

    // check to see if the id is in the array
    const array = this.state.emoji2.filter(e => e.id === id);
    console.log(array);

    if (array.length === 0) {
      // match not found
      console.log("game over");
      
      // reset the score
      const point = 0;
      this.setState( { point });

      // reset emoji2 array
      const emoji2 = Array.from(this.state.emoji);
      this.setState({ emoji2 });
    }
    else {
      // match found
      // remove the match object from array
      const emoji2 = this.state.emoji2.filter(emoji => emoji.id !== id);
      console.log(emoji2);
      this.setState({ emoji2 });

      // adding score
      const point = this.state.point + 1;
      this.setState({ point });

      // saving the highest point
      if (point >= this.state.highPoint) {
        const highPoint = point;
        this.setState({ highPoint });
      }
    }

  };


  render() {
    const shuffledPosts = shuffleArray(this.state.emoji);
    return (
      <Wrapper>
        <Title>Clicky Game!</Title>
        <Counter point={this.state.point} highPoint={this.state.highPoint} />

        {shuffledPosts.map(emoji => (
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
