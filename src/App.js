import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormProvider } from './FormContext';
import Form from './Form';
import Form2 from './Form2';
import Form3 from './Form3';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './step3';
import Summary from './Summary';

const App = () => {
    return (
        <FormProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Form />} />
                    <Route path="/form2" element={<Form2 />} />
                    <Route path="/form3" element={<Form3 />} />
                    <Route path="/summary" element={<Summary />} />
                </Routes>
            </Router>
        </FormProvider>
    );
};

export default App;
