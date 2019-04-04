import React from "react";
import Button from "./Button";
import "./TextboxForm.css";

class TextboxForm extends React.Component {
	constructor(props){
		super(props);
		
		//this.state = {value: ""};
	}
	
	//handleChange = (event) => {
		//this.setState({value: event.target.value});
	//}
	
	handleClick = () => {
		this.props.convertFunction(this.props.textValue);
	}
	
	render(){
		return (
			<div>
				<strong className="ui-textbox-label">{this.props.label}</strong>
				<div>
				<textarea className="ui-textbox" value={this.props.textValue} onChange={this.props.handleTyped}></textarea>
				<Button label="Convert" onClick={this.handleClick} />
				</div>
			</div>
		);
	}
}

export default TextboxForm;