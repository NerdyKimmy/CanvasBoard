import React from 'react';
import "./styles/app.scss"
import SettingBar from "./components/SettingBar";
import Toolbar from "./components/Toolbar";
import Canvas from "./components/Canvas";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                {/* --- FIX 2: Use <Routes> instead of <Switch> --- */}
                <Routes>

                    {/* --- FIX 3: Use the "element" prop for your route --- */}
                    <Route path='/:id' element={
                        // Use a fragment to render multiple components
                        <>
                            <Toolbar/>
                            <SettingBar/>
                            <Canvas/>
                        </>
                    }/>

                    <Route
                        path="*"
                        element={<Navigate to={`f${(+new Date).toString(16)}`} replace />}
                    />

                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;