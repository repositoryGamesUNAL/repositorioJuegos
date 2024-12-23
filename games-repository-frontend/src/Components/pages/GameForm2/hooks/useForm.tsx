// hooks/useForm.ts
import { useContext } from 'react';
import FormContext from '../context/FormContext/FormContext';

export const useForm = () => {
    const context = useContext(FormContext);

    // Comprobamos si el contexto está disponible
    if (!context) {
        throw new Error('useForm must be used within a FormProvider');
    }

    return context; // Devuelve el contexto completo (state y dispatch)
};