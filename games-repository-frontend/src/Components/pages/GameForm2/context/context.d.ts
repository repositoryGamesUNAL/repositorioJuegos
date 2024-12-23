export interface FormData {
    name: string;
    description: string;
    materials: stirng[];
    gender: string;
    time: string;
    level: string;
    winnerCriteria: string;
    fundamentalConcepts: string[];
    instructionalObjectives: string[];
    rules: string[];
    purposes: string[];
    teams: { min: numer, max: number };
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