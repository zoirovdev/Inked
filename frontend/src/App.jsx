import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from "./pages/NoPage";
import Add from './pages/Add';
import Edit from './pages/Edit';
import View from './pages/View';
import { useState, useEffect } from 'react';



function App() {
    const [links, setLinks] = useState([])

    return (
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home links={links} setLinks={setLinks} />} />
                    <Route path="/add" element={<Add />} />
                    <Route path='/edit' element={<Edit />} />
                    <Route path='/view' element={<View />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
    )
}

export default App
