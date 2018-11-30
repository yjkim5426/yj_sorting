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
        <Square value={this.props.array[0]} />
        <Square value={this.props.array[1]} />
        <Square value={this.props.array[2]} />
        <Square value={this.props.array[3]} />
        <Square value={this.props.array[4]} />
        <Square value={this.props.array[5]} />
        <Square value={this.props.array[6]} />
        <Square value={this.props.array[7]} />
        <Square value={this.props.array[8]} />
        <Square value={this.props.array[9]} />
      </div>
    );
  }
}

class ControlPanel extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Button
            name={"Mix"}
            onClick={() => this.props.generateNumbers()}
          />
        </div>
        <div>
          <Button
            name={"Bubble Sort"}
            onClick={() => this.props.bubbleSort()}
          />
          <Button
            name={"Merge Sort"}
            onClick={() => this.props.mergeSort()}
          />
        </div>
      </div>
    );
  }
}

class Sorting extends React.Component {
  state = {
    array: [null, null, null, null, null, null, null, null, null, null]
  };

  genNumbers() {
    const unsortedArray = this.state.array.slice();
    for (let i = 0; i < unsortedArray.length; i++) {
      unsortedArray[i] = Math.round(Math.random() * 9);
    }
    this.setState({
      array: unsortedArray
    });
  }

  bubbleSort() {
    alert("bubbleSort");
  }

  mergeSort() {
    alert("MergeSort");
  }

  render() {
    console.log(this.state.array);
    return (
      <div>
        <div>
          <Array array={this.state.array} />
        </div>
        <div>
          <ControlPanel 
            generateNumbers={() => this.genNumbers()}
            bubbleSort={() => this.bubbleSort()}
            mergeSort={() => this.mergeSort()}
          />
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
