import React, { useContext } from 'react';
import { FormContext } from './FormContext';

const Summary = () => {
    const { formData } = useContext(FormContext);

    return (
        <div className="formBody">
            <h1>Podsumowanie</h1>
            <p>Imię: {formData.imie}</p>
            <p>Nazwisko: {formData.nazwisko}</p>
            <p>Telefon: {formData.telefon}</p>
            <p>Email: {formData.mail}</p>
        </div>
    );
};

export default Summary;
