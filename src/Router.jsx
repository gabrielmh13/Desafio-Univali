import { Routes, Route } from "react-router-dom";

import { Listing } from './pages/Listing'
import { Form } from './pages/Form'

export function Router(){
    return (
        <Routes>
            <Route path='/' element={<Listing />}/>
            <Route path='/formulario' element={<Form />} />
        </Routes>
    )
}