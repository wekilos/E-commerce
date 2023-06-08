import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./verification.css";
import Header from "./header/header";

import { Context } from "../../context/context";
import tm from "../../lang/tm/home.json";
import en from "../../lang/en/home.json";
import ru from "../../lang/ru/home.json";

const Verification = () => {
  const history = useHistory();
  const { dil } = useContext(Context);
  const goBack = () => {
    history.goBack();
  };
  const goVerificationFilled = () => {
    // history.push({pathname:"/verification_filled"})
  };
  return (
    <div className="max-h-[100vh]">
      <Header />
      <div className="v-body">
        <section>
          <div className="login-container !h-fit">
            <h2 className="Title">
              {dil === "TM"
                ? tm["Tassyklaýjy kod"]
                : dil === "RU"
                ? ru["Tassyklaýjy kod"]
                : en["Tassyklaýjy kod"]}
            </h2>
            <p className="p-1">
              {dil === "TM"
                ? tm["Telefon belgiñize tassyklaýjy kody iberdik"]
                : dil === "RU"
                ? ru["Telefon belgiñize tassyklaýjy kody iberdik"]
                : en["Telefon belgiñize tassyklaýjy kody iberdik"]}
            </p>
            <div className="v-input-box">
              <input className="v-input" required type="number" disabled />
              <input className="v-input" required type="number" disabled />
              <input className="v-input" required type="number" disabled />
              <input className="v-input" required type="number" disabled />
              <input className="v-input" required type="number" disabled />
            </div>
            <p style={{ marginTop: "24px", marginBottom: "18px" }}>0:35</p>
            <button className="button-1" onClick={() => goVerificationFilled()}>
              {dil === "TM"
                ? tm["Dowam etmek"]
                : dil === "RU"
                ? ru["Dowam etmek"]
                : en["Dowam etmek"]}
            </button>
            <div>
              <p
                style={{ cursor: "pointer" }}
                className="p-3"
                onClick={() => goBack()}
              >
                {"<-- "}{" "}
                {dil === "TM"
                  ? tm["Yza gaýtmak"]
                  : dil === "RU"
                  ? ru["Yza gaýtmak"]
                  : en["Yza gaýtmak"]}
              </p>
            </div>
          </div>
        </section>
        <div className="w-full flex  justify-center text-[18px] my-6 text-neutral-900 font-semi">
          © 2023
          <span className="font-bold mx-1">Günlük söwda onlaýn.</span>
          {dil === "TM"
            ? "Ähli Hukuklar goralan"
            : dil === "RU"
            ? "Все права защищены"
            : "All Rights Reserved"}
        </div>
      </div>
    </div>
  );
};
export default Verification;
