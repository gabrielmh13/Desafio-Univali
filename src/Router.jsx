import { Routes, Route } from "react-router-dom";

import { Listing } from './pages/Listing'
import { Register } from './pages/Register'

export function Router(){
    return (
        <Routes>
            <Route path='/' element={<Listing />}/>
            <Route path='/formulario' element={<Register />} />
        </Routes>
    )
}