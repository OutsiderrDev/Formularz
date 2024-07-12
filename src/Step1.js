import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';

const Step1 = () => {
    const { formData, setFormData } = useContext(FormContext);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!formData.imie) {
            newErrors.imie = 'Imię jest wymagane.';
        }
        if (!formData.nazwisko) {
            newErrors.nazwisko = 'Nazwisko jest wymagane.';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Formularz poprawny:', formData);
            navigate('/form2');
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <form className="formStep" onSubmit={handleSubmit}>
            <h1>Formularz zgłoszeniowy</h1>
            <h2>Krok 1</h2>

            <label htmlFor="imie">Podaj imię:</label><br />
            <input
                type="text"
                id="imie"
                placeholder="np. Jan"
                value={formData.imie}
                onChange={(e) => setFormData({ ...formData, imie: e.target.value })}
            /><br /><br />
            {errors.imie && <span className="error">{errors.imie}</span>}
            <br /><br />

            <label htmlFor="nazwisko">Podaj nazwisko:</label><br />
            <input
                type="text"
                id="nazwisko"
                placeholder="np. Kowalski"
                value={formData.nazwisko}
                onChange={(e) => setFormData({ ...formData, nazwisko: e.target.value })}
            /><br /><br />
            {errors.nazwisko && <span className="error">{errors.nazwisko}</span>}
            <br /><br />

            <button type="submit" className="btn">Dalej</button>
        </form>
    );
};

export default Step1;
