import { Component } from "react";

class App extends Component {
  state = {
    name:'',
    age:'',
    dept:''
  }
  handleChange = (event) =>{
    this.setState({[event.target.name] : event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    for(let i = 0 ; i<  event.target.length ; i++){
      console.log('event ====>',event.target[i].value)
    }
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <h1>Name: </h1>
        <input onChange={this.handleChange} name='name' value={this.state.name} />
        <h1>Age: </h1>
        <input onChange={this.handleChange} name='age' value={this.state.age} />
        <h1>Department: </h1>
        <input onChange={this.handleChange} name='dept' value={this.state.dept} /> <br />
        <input type='submit' value='Submit form' />
      </form>
    )
  }
}
export default App
