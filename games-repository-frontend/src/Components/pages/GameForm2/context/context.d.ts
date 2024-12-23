export interface FormData {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
}

export interface FormState {
    formData: FormData;
    currentStep: number;
}
  
export type FormAction =
    | { type: 'UPDATE_FORM_DATA'; payload: Partial<FormData> }
    | { type: 'NEXT_STEP' }
    | { type: 'PREV_STEP' }
    | { type: 'RESET_FORM' };