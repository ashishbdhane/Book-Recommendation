import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '././components/Main';
import Reviews from './components/Book.js/Reviews';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route exact path="/book/:id" element={<Reviews />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
