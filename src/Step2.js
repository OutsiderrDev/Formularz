import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';

const Step2 = () => {
    const { formData, setFormData } = useContext(FormContext);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!/^\d{9}$/.test(formData.telefon)) {
            newErrors.telefon = 'Numer telefonu powinien mieć 9 cyfr.';
        }
        if (!/\S+@\S+\.\S+/.test(formData.mail)) {
            newErrors.mail = 'Wprowadź poprawny adres e-mail.';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Formularz poprawny:', formData);
            navigate('/form3');
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <form className="formStep" onSubmit={handleSubmit}>
            <h1>Formularz zgłoszeniowy</h1>
            
            <label htmlFor="telefon">Podaj numer telefonu:</label><br />
            <input
                type="text"
                id="telefon"
                placeholder="000000000"
                value={formData.telefon}
                onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
            /><br /><br />
            {errors.telefon && <span className="error">{errors.telefon}</span>}
            <br /><br />

            <label htmlFor="mail">Podaj email:</label><br />
            <input
                type="email"
                id="mail"
                placeholder="przykladowy@email.com"
                value={formData.mail}
                onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
            /><br /><br />
            
            {errors.mail && <span className="error">{errors.mail}</span>}
            <br /><br /><br />

            <button type="submit" className="btn">Dalej</button>
        </form>
    );
};

export default Step2;
