import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
    const [imie, setImie] = useState('');
    const [nazwisko, setNazwisko] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!imie) {
            newErrors.imie = 'Imię jest wymagane.';
        }
        if (!nazwisko) {
            newErrors.nazwisko = 'Nazwisko jest wymagane.';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Formularz poprawny:', { imie, nazwisko });
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
                value={imie}
                onChange={(e) => setImie(e.target.value)}
            /><br /><br />
            {errors.imie && <span className="error">{errors.imie}</span>}
            <br /><br />

            <label htmlFor="nazwisko">Podaj nazwisko:</label><br />
            <input
                type="text"
                id="nazwisko"
                placeholder="np. Kowalski"
                value={nazwisko}
                onChange={(e) => setNazwisko(e.target.value)}
            /><br /><br />
            {errors.nazwisko && <span className="error">{errors.nazwisko}</span>}
            <br /><br />

            <button type="submit" className="btn">Dalej</button>
        </form>
    );
};

export default Step1;
