import React, { Component } from "react";
import { changeInputValue, createTask } from "../actions/index";
import { connect } from "react-redux";
import uniqid from "uniqid";

class InputBar extends Component {
  onFormSubmit = e => {
    e.preventDefault();
    this.props.createTask(this.props.value, uniqid);
    this.props.changeInputValue("");
  };

  render() {
    return (
      <div className="InputBar">
        <form className="form" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            className="input"
            value={this.props.value}
            onChange={e => this.props.changeInputValue(e.target.value)}
          />
          <button className="submit__btn" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.inputValue,
  };
};

export default connect(mapStateToProps, { changeInputValue, createTask })(
  InputBar
);
