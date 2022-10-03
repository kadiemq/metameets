import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Collection } from "./components/collection/Collection";
import { Layout } from "./components/Layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Layout />}>
                    <Route index element={<Collection />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
