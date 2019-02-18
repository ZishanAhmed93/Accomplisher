import React from 'react'
import AccomplishmentSummary from './AccomplishmentSummary'

const AccomplishmentList = ({accomplishments}) => {
	
	return(
		<div className="accomplishment-list section">
					
			{ accomplishments && accomplishments.map(accomplishment => {
				return <AccomplishmentSummary accomplishment={accomplishment} key={accomplishment.id} />
			})}

		</div>
	)
}

export default AccomplishmentList