import { useState } from "react";

/**
 * 
 * @param {Object} initialForm 
 * @returns 
 */
export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}