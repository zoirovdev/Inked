import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from "./pages/NoPage";
import Add from './pages/Add';
import Edit from './pages/Edit';
import { useState, useEffect } from 'react';



function App() {
    const [links, setLinks] = useState([])


    useEffect(() => {
        const fetchLinks = async () => {
            const url = "http://127.0.0.1:5000/api/links";
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
    
                const json = await response.json();
                setLinks(json);
            } catch (error) {
                console.error(error.message);
            }
        };
    
        fetchLinks();  // Call the async function
    }, []);
    

    return (
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home links={links} setLinks={setLinks} />} />
                    <Route path="/add" element={<Add />} />
                    <Route path='/edit' element={<Edit />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
    )
}

export default App
