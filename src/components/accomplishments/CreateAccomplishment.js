import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAccomplishment } from '../../store/actions/accomplishmentActions'

class CreateAccomplishment extends Component {
	state = {
		title: '',
		content: ''
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		//console.log(this.state);
		this.props.createAccomplishment(this.state)
	}
	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Create new accomplishment</h5>
					<div className="input-field">
						<label htmlFor="title">Title</label>
						<input type="text" id="title" onChange={this.handleChange}/>
					</div>
					<div className="input-field">
						<label htmlFor="content">Accomplishment Content</label>
						<textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">Create</button>
					</div>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = ( dispact ) => {
	return {
		createAccomplishment: (accomplishment) => dispact(createAccomplishment(accomplishment))
	}
}

export default connect(null, mapDispatchToProps)(CreateAccomplishment)