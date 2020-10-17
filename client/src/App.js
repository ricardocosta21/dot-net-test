import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Messages from "./messages";

import {
  handleGetMessages,
  handlePostMessage,
} from "../src/actions/apiActions.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ body: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.body !== null && this.state.body.length > 0) {
      this.props.postMessage(this.state.body);
    }
    event.preventDefault();
  }

  componentDidMount = () => {
    this.props.getMessages();
  };

  render() {
    const { messages } = this.props;
    return (
      <div className="App-header">
        <form onSubmit={this.handleSubmit}>
          <input
            size="50"
            placeholder="Your message"
            value={this.state.body || ""}
            onChange={this.handleChange}
          />

          <input type="submit" value="Submit" />
        </form>
        <div className="App-messages">
          {" "}
          <Messages messages={this.props.messages} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    messages: state.api.messages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMessages: () => dispatch(handleGetMessages()),
    postMessage: (message) => dispatch(handlePostMessage(message)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
