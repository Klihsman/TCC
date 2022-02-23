import React from 'react';
import {BrowserRouter, Route, Routes}  from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home />}></Route>

                <Route path='/login' element={<Login />} />
                
                <Route path='/signup' element={<SignUp />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default Router;