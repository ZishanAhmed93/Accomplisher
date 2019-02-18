import React from 'react'

const AccomplishmentSummary = ({accomplishment}) => {
	return (
		<div className="card z-depth-0 accomplishment-summary">
			<div className="card-content grey-text text-darken-3">
				<span className="card-title">{accomplishment.title}</span>
				<p>Posted by Z</p>
				<p className="grey-text">Feb 16, 4pm</p>				
			</div>
		</div>

	)
}

export default AccomplishmentSummary;