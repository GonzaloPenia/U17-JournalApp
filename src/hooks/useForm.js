import { useState,useEffect } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setformValidation] = useState({ });

    useEffect(() => {
      createValidator();
    }, [formState])
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidator  = () => {
        const formChecedkValues = {};

        for (const formField of Object.keys(formValidations)){
            const [fn,errorMessage] = formsValidations[formField];

            formChecedkValues[`${formField}Valid`]= fn (formState[formField]) ? null : errorMessage;
        }
        setformValidation(formCheckedValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
    }
}