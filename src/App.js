import React,{Component} from 'react';
import './App.css';
import ValidaitonComponent from './Components/ValidaitonComponent';
import CharComponent from './Components/CharCompontent';


class App extends Component{
  constructor(){
    super()
      this.state={
        input: 'love'
      }  
  }
changeState=(event)=>{
let input = event.target.value
this.setState({input: input})

}
removeFromState=(id)=>{
let character = this.state.input.split('')
character.splice(id, 1)
let updateCharacher = character.join("")
this.setState({input: updateCharacher})
}
  render(){
   let char = this.state.input.split('').map((ch, index)=>{return <CharComponent key={index} word={ch} clicked={()=>this.removeFromState(index)}/>;})
    return(
    <div>
      <input type="text"  onChange={this.changeState} value={this.state.input}/>
      <br></br>number of letters: {this.state.input.length}
      <div><ValidaitonComponent letter={this.state.input}/></div>
      <div>{char}</div>
    </div>
    
    )
  }
}
export default(App);
