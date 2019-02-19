export const createAccomplishment = (accomplishment) => {
	return (dispatch, getState, {getFirebase, getFirestore}) => {
		//make async call to db
		const firestore = getFirestore();
		firestore.collection('accomplishments').add({
			...accomplishment,
			authorName: 'Z',
			authorID: '22',
			createdAt: new Date()
		}).then(() =>{
			dispatch({ type: 'CREATE_ACCOMPLISHMENT', accomplishment });
		}).catch((err) => {
			dispatch({ type: 'CREATE_PROJECT_ERROR', err});
		})
		
	}
};