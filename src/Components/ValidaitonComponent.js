import React,{Component} from 'react';

class ValidaitonComponent extends Component{
    render(){
        return(
        <div>
         {this.props.letter.length}
         <div>{this.props.letter.length < 5 ? 'Text too short' : 'Text too long'}</div>
        </div>)
    }
}
export default ValidaitonComponent;