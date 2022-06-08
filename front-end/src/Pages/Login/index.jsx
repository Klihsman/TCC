import React, { useEffect, useState } from "react";

import { DataInput, PasswordInput } from "../../Components/Utils/Inputs";
import { PrimaryButton, SecondaryButton } from "../../Components/Utils/Buttons";

function Login() {
  const [sugestions, setSugestions] = useState([]);
  useEffect(() => {
    setSugestions([
      "Estatística",
      "Java",
      " Nodejs",
      "COVID-19",
      "Automação",
      "Compilação",
      "WEB",
      " UI",
    ]);
    console.log(sugestions);
  }, [setSugestions, sugestions]);

  return (
    <div className="height-100vh width-max flex-container">
      <div className="height-max width-45 default-background">
        <h1 className="default-white-title">WorkShow</h1>
      </div>
      <div className="default-box width-55">
        <div className="form-box">
          <div className="title-form-container margin-title-input">
            <h1 className="default-form-title">Login</h1>
          </div>
          <div className="input-container margin-form-input">
            <DataInput mask="" placeholder="Matrícula" />
          </div>
          <div className="input-container margin-form-input">
            <PasswordInput placeholder="Senha" />
          </div>
          <div className="button-form-container margin-button-container">
            <div className="button-form-box height-60 margin-button">
              <PrimaryButton title="Cadastrar" />
            </div>
            <div className="button-form-box height-30 margin-button">
              <SecondaryButton title="Entrar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
