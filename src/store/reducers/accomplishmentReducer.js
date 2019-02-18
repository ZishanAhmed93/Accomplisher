const initState = {
	accomplishments: [
		{id: '1', title: "we'r half way there", content: 'living on a prayer'},
		{id: '2', title: "is mayonaise an instrument", content: "it's a giraffe"},
		{id: '3', title: "are you feeling it now mr.krabs", content: "are you feeling it now mr.krabs"}
	]
}

const accomplishmentReducer = (state = initState, action) => {
	switch(action.type){
		case 'CREATE_ACCOMPLISHMENT':
			console.log('created project', action.accomplishment)
	}
	return state
}

export default accomplishmentReducer