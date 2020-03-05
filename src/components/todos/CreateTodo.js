import React, { Component } from 'react'
 
class CreateTodo extends Component {
  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input type="text" onChanhe={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};
 
export default CreateTodo;