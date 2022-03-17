import React, {useEffect, useState} from 'react';
import { FaSearch } from "react-icons/fa";

import {TextInput} from '../../Components/Utils/Inputs';

const Home = ()=>{
    const [sugestions, setSugestions] = useState(0); 

    useEffect(()=>{
    }, [sugestions]);

    return(
        <div className="height-100vh width-max flex-container flex-direction-column">
            <div className="height-50vh width-max default-background flex-container flex-direction-column align-center justify-around">
                <div className="height-20 width-max align-self-start">
                    <h1 className="default-white-title">WorkShow</h1>
                </div>
                <div className="width-45">
                    <label className="default-label" htmlFor="">Procure por trabalhos de pesquisa, TCC’s, projetos, temas e etc...</label>
                    <div className="input-container margin-input-label">
                        <TextInput placeholder={'Pesquisar'}/>
                        <FaSearch className="default-icon"/>
                    </div>
                </div>
            </div>
            <div className="height-50vh width-max flex-container align-center justify-center">
                <div className="width-45">
                    <div className="width-max">
                        <div className="width-max">
                            <h1 className="title-with-border default-black-title default-black-title-left font-size-1em">Sugestões de temas</h1>
                            <div className="width-max flex-container justify-between">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;