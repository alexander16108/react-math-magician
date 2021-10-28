import React from 'react';
import PropTypes from 'prop-types';

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.renderClickable = this.renderClickable.bind(this);
  }

  renderClickable() {
    const { text, onClick, Obj } = this.props;
    onClick(Obj, text);
  }

  render() {
    const { text } = this.props;

    return (
      <button type="button" className="calc-btn" onClick={this.renderClickable}>{text}</button>
    );
  }
}

Buttons.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  Obj: PropTypes.objectOf(PropTypes.string).isRequired,
};
