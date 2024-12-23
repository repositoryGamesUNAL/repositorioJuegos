import { FormState, FormAction } from '../context';

export interface FormContextProps {
    state: FormState;
    dispatch: React.Dispatch<FormAction>;
}