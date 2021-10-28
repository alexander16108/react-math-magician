/* eslint-disable no-nested-ternary */
import React from 'react';
import calculate from '../logic/calculate';
import Buttons from './buttons';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calcObj: {},
    };
    this.click = this.click.bind(this);
  }

  click(calcObj, text) {
    this.setState((calcObj) => calculate(calcObj, text));
  }

  render() {
    let display = '0';
    const { calcObj } = this.state;

    if (Object.keys(calcObj).length === 0 || (calcObj.total === null
      && calcObj.next === null && calcObj.operation === null)) {
      display = '0';
    } else {
      display = calcObj.next != null ? calcObj.next
        : calcObj.next != null ? calcObj.total : calcObj.operation;
    }

    return (
      <div className="calc-container">
        <div className="calc-firstDisplay">{display}</div>
        <div className="calc-Btns">
          <div className="calc-greyBtns">
            <div className="calc-greyBtn1">
              <Buttons className="calc-btn" text="AC" Obj={calcObj} onClick={this.click} />
              <Buttons className="calc-btn" text="+/-" Obj={calcObj} onClick={this.click} />
              <Buttons className="calc-btn" text="%" Obj={calcObj} onClick={this.click} />
              <Buttons className="calc-btn" text="7" Obj={calcObj} onClick={this.click} />
              <Buttons className="calc-btn" text="8" Obj={calcObj} onClick={this.click} />
              <Buttons className="calc-btn" text="9" Obj={calcObj} onClick={this.click} />
              <Buttons className="calc-btn" text="4" Obj={calcObj} onClick={this.click} />
              <Buttons className="calc-btn" text="5" Obj={calcObj} onClick={this.click} />
              <Buttons className="calc-btn" text="6" Obj={calcObj} onClick={this.click} />
              <Buttons className="calc-btn" text="1" Obj={calcObj} onClick={this.click} />
              <Buttons className="calc-btn" text="2" Obj={calcObj} onClick={this.click} />
              <Buttons className="calc-btn" text="3" Obj={calcObj} onClick={this.click} />
            </div>
            <div className="calc-greyBtn2">
              <Buttons className="calc-btn1 btn" text="0" Obj={calcObj} onClick={this.click} />
              <Buttons className="calc-btn2" text="." Obj={calcObj} onClick={this.click} />
            </div>
          </div>

          <div className="orange-btn">
            <Buttons className="calc-btn" text="/" Obj={calcObj} onClick={this.click} />
            <Buttons className="calc-btn" text="*" Obj={calcObj} onClick={this.click} />
            <Buttons className="calc-btn" text="-" Obj={calcObj} onClick={this.click} />
            <Buttons className="calc-btn" text="+" Obj={calcObj} onClick={this.click} />
            <Buttons className="calc-btn" text="=" Obj={calcObj} onClick={this.click} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
