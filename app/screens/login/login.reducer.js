const initialState = {
	authToken: '',
	userId: '',
	status: false
};

export default function loginReducer(state=initialState, action) {
	switch(action.type) {
		// case "AUTHENTICATE_USER": {
    //
		// }
		default: {
			return {
				...state
			};
		}
	}
}
