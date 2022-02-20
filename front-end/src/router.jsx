import React from 'react';
import {BrowserRouter, Route, Routes}  from 'react-router-dom';

import SignUp from './Pages/SignUp';

const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;