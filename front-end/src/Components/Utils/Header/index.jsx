import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { TextInput } from '../Inputs';

import "./headers.scss";

function NormalHeader() {
  const navigate = useNavigate();

  function goToLoginPage() {
    navigate("/login");
  }

  return (
    <div className="header-full-width normal-header-height default-normal-header flex-container">
      <div className="profile-container">
        <div onClick={() => goToLoginPage()} className="action-with-icon">
          <FaUser />
          <span>Meu Perfil</span>
        </div>
      </div>
      <div className="normal-header-input-container flex-container justify-center align-end">
        <div className="header-input-container">
          <label>Procure por trabalhos de pesquisa, TCC’s, projetos, temas e etc...</label>
          <div className="input-container flex-container margin-input-label">
            <TextInput placeholder="Pesquisar"/>
            <FaSearch className="default-icon"/>
          </div>
        </div>
      </div>
      <div className="system-title-container">
        <h3 className="default-white-title">WorkShow</h3>
      </div>
    </div>
  );
}

export { NormalHeader };
