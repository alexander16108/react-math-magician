import React from 'react';
import calculate from '../logic/calculate';
import '../logic/operate'

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null
    };
  }

  render() {
this.click = (event) => {this.setState((obj)=> {calculate(obj, event.target.textContent)})}

let display;

if(this.state.total || this.state.next || this.state.operation) {
  display = [this.state.total, ' ', this.state.next, ' ', this.state.operation];
  display.forEach(element => {element != null });
} else {
  display =  0;
}

    return (
      <div className="calc-container">
        <div className="calc-firstDisplay">{ display }</div>
        <div className="calc-Btns">
          <div className="calc-greyBtns">
            <div className="calc-greyBtn1">
              <button type="button" onClick={ this.click } className="calc-btn">AC</button>
              <button type="button" onClick={ this.click } className="calc-btn">+/-</button>
              <button type="button" onClick={ this.click } className="calc-btn">%</button>
              <button type="button" onClick={ this.click } className="calc-btn">7</button>
              <button type="button" onClick={ this.click } className="calc-btn">8</button>
              <button type="button" onClick={ this.click } className="calc-btn">9</button>
              <button type="button" onClick={ this.click } className="calc-btn">4</button>
              <button type="button" onClick={ this.click } className="calc-btn">5</button>
              <button type="button" onClick={ this.click } className="calc-btn">6</button>
              <button type="button" onClick={ this.click } className="calc-btn">1</button>
              <button type="button" onClick={ this.click } className="calc-btn">2</button>
              <button type="button" onClick={ this.click } className="calc-btn">3</button>
            </div>
            <div className="calc-greyBtn2">
              <button type="button" onClick={ this.click } className="calc-btn1">0</button>
              <button type="button" onClick={ this.click } className="calc-btn2">.</button>
            </div>
          </div>

          <div className="orange-btn">
            <button type="button" onClick={ this.click } className="calc-btn">/</button>
            <button type="button" onClick={ this.click } className="calc-btn">*</button>
            <button type="button" onClick={ this.click } className="calc-btn">-</button>
            <button type="button" onClick={ this.click } className="calc-btn">+</button>
            <button type="button" onClick={ this.click } className="calc-btn">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
