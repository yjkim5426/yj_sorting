import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
  render() {
    return(
      <button>1</button>
    )
  }
}

class Array extends React.Component {
  render() {
    return(
      <div>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    )
  }
}

class ControlPanel extends React.Component {
  render() {
    return(
      'test'
    )
  }

}

class Sorting extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Array />
        </div>
        <div>
          <Button name={"Mix"}/>
          <Button name={"Mix"}/><Button name={"Mix"}/>
        </div>
      </div>
    )
  }
}

function Button(props) {
  return(
    <button>{props.name}</button>
  )
}

ReactDOM.render(<Sorting />, document.getElementById("root"));