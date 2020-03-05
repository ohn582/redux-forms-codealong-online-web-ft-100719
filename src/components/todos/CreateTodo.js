import React, { Component } from 'react'
 
class CreateTodo extends Component {
  
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }
  
  const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};
  
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }
  
  render() {
    return(
      <div>
        <form form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

 
export default connect(null, mapDispatchToProps)(CreateTodo);