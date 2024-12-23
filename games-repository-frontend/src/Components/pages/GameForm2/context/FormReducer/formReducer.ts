import { FormState, FormAction } from '../context';

export const initialState: FormState = {
    formData: {
		
	},
    currentStep: 0,
};

export const formReducer = (
	state: FormState, 
	action: FormAction
): 
FormState => {
	switch (action.type) {
		case 'UPDATE_FORM_DATA':
			return {
				...state,
				formData: { ...state.formData, ...action.payload },
			};
		case 'NEXT_STEP':
			return {
				...state,
				currentStep: state.currentStep + 1,
			};
		case 'PREV_STEP':
			return {
				...state,
				currentStep: Math.max(state.currentStep - 1, 0),
			};
		case 'RESET_FORM':
			return initialState;
		default:
			throw new Error(`Unknown action type: ${action.type}`);
  	}
};
