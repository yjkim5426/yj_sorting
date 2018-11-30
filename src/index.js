import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
  render() {
    return <button>{this.props.value}</button>;
  }
}

class Array extends React.Component {
  render() {
    return (
      <div>
        <Square value={this.props.array[0]}/>
        <Square value={this.props.array[1]}/>
        <Square value={this.props.array[2]}/>
        <Square value={this.props.array[3]}/>
        <Square value={this.props.array[4]}/>
        <Square value={this.props.array[5]}/>
        <Square value={this.props.array[6]}/>
        <Square value={this.props.array[7]}/>
        <Square value={this.props.array[8]}/>
        <Square value={this.props.array[9]}/>
      </div>
    );
  }
}

class ControlPanel extends React.Component {
  render() {
    return "test";
  }
}

class Sorting extends React.Component {
  state = {
    array: [null, null, null, null, null, null, null, null, null, null]
  };

  genNumbers(array) {
    const unsortedArray = array.slice();

    for (let i = 0; i < unsortedArray.length; i++) {
      unsortedArray[i] = Math.round(Math.random() * 9);
    }

    this.setState({
      array: unsortedArray
    });
  }

  bubbleSort(array) {
    alert("bubbleSort");
  }

  mergeSort(array) {
    alert("MergeSort");
  }

  render() {
    console.log(this.state.array);
    return (
      <div>
        <div>
          <Array array={this.state.array}/>
        </div>
        <div>
          <div>
            <Button
              name={"Mix"}
              onClick={() => this.genNumbers(this.state.array)}
            />
          </div>
          <div>
            <Button
              name={"Bubble Sort"}
              onClick={() => this.bubbleSort(this.state.array)}
            />
            <Button
              name={"Merge Sort"}
              onClick={() => this.mergeSort(this.state.array)}
            />
          </div>
        </div>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>{this.props.name}</button>;
  }
}

ReactDOM.render(<Sorting />, document.getElementById("root"));
