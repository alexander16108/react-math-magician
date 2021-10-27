import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-container">
        <div className="calc-firstDisplay">0</div>
        <div className="calc-Btns">
          <div className="calc-greyBtns">
            <div className="calc-greyBtn1">
              <div className="calc-btn">AC</div>
              <div className="calc-btn">+/-</div>
              <div className="calc-btn">%</div>
              <div className="calc-btn">7</div>
              <div className="calc-btn">8</div>
              <div className="calc-btn">9</div>
              <div className="calc-btn">4</div>
              <div className="calc-btn">5</div>
              <div className="calc-btn">6</div>
              <div className="calc-btn">1</div>
              <div className="calc-btn">2</div>
              <div className="calc-btn">3</div>
            </div>
            <div className="calc-greyBtn2">
              <div className="calc-btn1">0</div>
              <div className="calc-btn2">.</div>
            </div>
          </div>

          <div className="orange-btn">
            <div className="calc-btn">/</div>
            <div className="calc-btn">*</div>
            <div className="calc-btn">-</div>
            <div className="calc-btn">+</div>
            <div className="calc-btn">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
