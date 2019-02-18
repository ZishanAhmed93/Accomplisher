import React, { Component } from 'react'
import Daily from './Daily'
import AccomplishmentList from '../accomplishments/AccomplishmentList'
import { connect } from 'react-redux'

class Dashboard extends Component {
	render(){
		//console.log(this.props)
		const { accomplishments } = this.props;

		return(
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6">
						<AccomplishmentList  accomplishments = {accomplishments} />
					</div>
					<div className="col s12 m5 offset-m1">
						<Daily />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		accomplishments: state.accomplishment.accomplishments
	}
}

export default connect(mapStateToProps)(Dashboard)