import React, { Component } from "react";
import "./App.css";

import "mathquill/mathquill.css";
import "../src/lib/khan-exercises.css";
import "../src/lib/perseus.css";

import QuestionRenderer from "./QuestionRenderer";
import AnswerRenderer from "./AnswerRenderer";



let q = require('./extract/temp.json')
let problem_metadata = q.problem_metadata ? q.problem_metadata : null;

// let q = require('./extract/15a5e762860f5ed686967e52e0fd6335.json')
// let q = require('./extract/f4d080b290395c39b21950220192d192.json')


const styles = {
  container: {
    width: 600,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.container}>        
          <AnswerRenderer question={problem_metadata} readOnly={true} />
        </div>
      </div>
    );
  }
}

export default App;
