import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Step3 = () => {
    const [regulamin, setRegulamin] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        
        e.preventDefault();
        if (!regulamin) {
            setError('Musisz zaakceptować regulamin.')
        } else {
            setError('');
            navigate('/summary');
        }
    };

    return (
        <form className="formStep" onSubmit={handleSubmit}>
            <h1>Formularz zgłoszeniowy</h1>
            <h2>Krok 3</h2>

            <label htmlFor="regulamin">Akceptujesz regulamin?</label>
            <input
                type="checkbox"
                id="regulamin"
                checked={regulamin}
                onChange={(e) => setRegulamin(e.target.checked)}
            /><br />
            {error && <span className="error">{error}</span>}
            <br />

            <button type="submit" className="btn">Podsumowanie</button>
        </form>
    );
};

export default Step3
