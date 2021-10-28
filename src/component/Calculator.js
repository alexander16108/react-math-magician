/* eslint-disable no-nested-ternary */
import React from 'react';
import calculate from '../logic/calculate';
import '../logic/operate';
import Buttons from './buttonsEvent';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calcObj: {},
    };
    this.renderClickable = this.renderClickable.bind(this);
  }

  renderClickable(calcObj, text) {
    this.setState({ calcObj: calculate(calcObj, text) });
  }

  render() {
    const { calcObj } = this.state;
    let contentDisplay = '0';
    if (
      Object.keys(calcObj).length === 0
      || (calcObj.total === null
        && calcObj.next === null
        && calcObj.operation === null)
    ) {
      contentDisplay = '0';
    } else {
      contentDisplay = calcObj.next != null ? calcObj.next : calcObj.total;
    }

    return (
      <div className="calc-container">
        <div className="calc-firstDisplay">{contentDisplay}</div>
        <div className="calc-Btns">
          <div className="calc-greyBtns">
            <div className="calc-greyBtn1">
              <Buttons text="AC" Obj={calcObj} onClick={this.renderClickable} />
              <Buttons text="+/-" Obj={calcObj} onClick={this.renderClickable} />
              <Buttons text="%" Obj={calcObj} onClick={this.renderClickable} />
              <Buttons text="7" Obj={calcObj} onClick={this.renderClickable} />
              <Buttons text="8" Obj={calcObj} onClick={this.renderClickable} />
              <Buttons text="9" Obj={calcObj} onClick={this.renderClickable} />
              <Buttons text="4" Obj={calcObj} onClick={this.renderClickable} />
              <Buttons text="5" Obj={calcObj} onClick={this.renderClickable} />
              <Buttons text="6" Obj={calcObj} onClick={this.renderClickable} />
              <Buttons text="1" Obj={calcObj} onClick={this.renderClickable} />
              <Buttons text="2" Obj={calcObj} onClick={this.renderClickable} />
              <Buttons text="3" Obj={calcObj} onClick={this.renderClickable} />
            </div>
            <div className="calc-greyBtn2">
              <Buttons text="0" Obj={calcObj} onClick={this.renderClickable} />
              <Buttons text="." Obj={calcObj} onClick={this.renderClickable} />
            </div>
          </div>

          <div className="orange-btn">
            <Buttons text="/" Obj={calcObj} onClick={this.renderClickable} />
            <Buttons text="*" Obj={calcObj} onClick={this.renderClickable} />
            <Buttons text="-" Obj={calcObj} onClick={this.renderClickable} />
            <Buttons text="+" Obj={calcObj} onClick={this.renderClickable} />
            <Buttons text="=" Obj={calcObj} onClick={this.renderClickable} />
          </div>
        </div>
      </div>
    );
  }
}
