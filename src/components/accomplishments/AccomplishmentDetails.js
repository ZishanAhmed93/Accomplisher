import React from 'react'

const AccomplishmentDetails = (props) => {
	const id = props.match.params.id;
	return (
		<div className="container section accomplishment-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Accomplishment Title - {id}</span>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ut aliquam iure repellendus, libero dolorum temporibus. Possimus illum earum odit magnam quod reprehenderit qui modi, itaque aut nemo dolor, illo.</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
				<div>Posted by Z</div>
				<div>Feb 17, 1pm</div>
				</div>
			</div>

		</div>

	)
}

export default AccomplishmentDetails