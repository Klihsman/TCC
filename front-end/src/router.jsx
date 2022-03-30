import React from 'react';
import {BrowserRouter, Route, Routes}  from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Search from './Pages/Search';

const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home />}></Route>

                <Route path='/login' element={<Login />} />
                
                <Route path='/signup' element={<SignUp />} /> 
                <Route path='/search' element={<Search />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;