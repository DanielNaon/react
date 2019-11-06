import React,{Component} from 'react';

class charComponent extends Component{

    render(){
        let style={
            backgroundColor: 'pink', 
            display: 'inline-block',
            padding: '6px',
            border: '1px solid black',
            margin: '16px'
    }
        return(<div onClick={this.props.clicked}  style={style}>{this.props.word}</div>)
    }
}
export default charComponent;