import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form className='form' onSubmit={this.props.getCityData}>
        <input className='input' type='text' onInput={this.props.handleInput} />
        <button type='submit'>Explore!</button>
      </form>
    );
  }
}

export default Form;
