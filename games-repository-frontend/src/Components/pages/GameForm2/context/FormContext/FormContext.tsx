import { createContext, useReducer, ReactNode } from 'react';
import { formReducer, initialState } from '../FormReducer/formReducer';
import { FormContextProps } from './FormContext.type';

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    return (
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormContext;
