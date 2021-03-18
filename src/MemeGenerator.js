import React, { Component } from "react";
import Form from "./Components/Form";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      allMemesImgs: [],
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((responseJson) => responseJson.data)
      .then((memesData) => this.setState({ allMemesImgs: memesData.memes }));
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      randomImg: this.state.allMemesImgs[
        this.getRandomInt(this.state.allMemesImgs.length)
      ].url,
    });
  }
  render() {
    return (
      <Form
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default MemeGenerator;
