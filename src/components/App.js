import React from "react";
import TextboxForm from "./TextboxForm";
import "./App.css";

import Utils from "../utils";

class App extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {plaintext: "", binary: "", hexadecimal: ""};
	}
	
	handleTypedPlaintext = (event) => {
		this.setState({plaintext: event.target.value});
	}
	
	handleTypedBinary = (event) => {
		this.setState({binary: event.target.value});
	}
	
	handleTypedHexadecimal = (event) => {
		this.setState({hexadecimal: event.target.value});
	}
	
	convertFromPlaintext = (value) => {
		//this.setState({plaintext: Utils.binaryToText(value)});
		this.setState({binary: Utils.textToBinary(value)});
		this.setState({hexadecimal: Utils.textToHexadecimal(value)});
	}
	
	convertFromBinary = (value) => {
		this.setState({plaintext: Utils.binaryToText(value)});
		this.setState({binary: value.trim().replace(/\s/g, "")});
		this.setState({hexadecimal: Utils.binaryToHexadecimal(value)});
	}
	
	convertFromHexadecimal = (value) => {
		this.setState({plaintext: Utils.hexadecimalToText(value)});
		this.setState({binary: Utils.hexadecimalToBinary(value)});
		this.setState({hexadecimal: value.trim().replace(/\s/g, "")});
	}
	
	render(){
		return (
			<div className="app">
				<TextboxForm label="Plaintext" convertFunction={this.convertFromPlaintext} textValue={this.state.plaintext} handleTyped={this.handleTypedPlaintext} />
				<TextboxForm label="Binary" convertFunction={this.convertFromBinary} textValue={this.state.binary} handleTyped={this.handleTypedBinary} />
				<TextboxForm label="Hexadecimal" convertFunction={this.convertFromHexadecimal} textValue={this.state.hexadecimal} handleTyped={this.handleTypedHexadecimal} />
			</div>
		);
	}
}

export default App;