import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { TextInput } from "../../Components/Utils/Inputs";

function Home() {
  const sugestions = [
    "Node",
    "COVID",
    "JAVA",
    "Automação",
    "UX",
    "Redes Sociais",
    "Drone",
    "JavaScript",
  ];
  const navigate = useNavigate();

  function search() {
    navigate("/search");
  }

  return (
    <div className="height-100vh width-max flex-container flex-direction-column">
      <div className="height-50vh width-max default-background flex-container flex-direction-column align-center justify-around">
        <div className="height-20 width-max align-self-start">
          <h1 className="default-white-title">WorkShow</h1>
        </div>
        <div className="width-45">
          <label className="default-label" htmlFor="">
            Procure por trabalhos de pesquisa, TCC’s, projetos, temas e etc...
          </label>
          <div className="input-container margin-input-label">
            <TextInput placeholder="Pesquisar" />
            <FaSearch className="default-icon" onClick={() => search()} />
          </div>
        </div>
      </div>
      <div className="height-50vh width-max flex-container margin-top-50 justify-center">
        <div className="width-45">
          <div className="width-max">
            <div className="width-max">
              <h1 className="title-with-border default-black-title default-black-title-left font-size-1em">
                Sugestões de temas
              </h1>
              <div className="width-max flex-container justify-between flex-wrap-active">
                {sugestions.map((item) => (
                  <span className="action-button">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
