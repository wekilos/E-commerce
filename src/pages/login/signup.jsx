import React, { useContext } from "react";
import "./signup.css";
import { useHistory } from "react-router-dom";
import Header from "./header/header";

import { Context } from "../../context/context";
import tm from "../../lang/tm/home.json";
import en from "../../lang/en/home.json";
import ru from "../../lang/ru/home.json";

const Signup = () => {
  const history = useHistory();
  const { dil } = useContext(Context);
  const goLogin = (id) => {
    history.push({ pathname: "/login" });
  };
  const goVerification = () => {
    history.push({ pathname: "/verification" });
  };
  return (
    <div className="max-h-[100vh]">
      <Header />
      <div className="r-body">
        <section>
          <div className="registr-container !h-fit">
            <h2 className="Title">
              {dil === "TM"
                ? tm["Hasap döretmek"]
                : dil === "RU"
                ? ru["Hasap döretmek"]
                : en["Hasap döretmek"]}
            </h2>
            <p className="p-1">
              {dil === "TM"
                ? tm["Bir hasap bilen ähli mümkinçiliklerden peýdalanyň"]
                : dil === "RU"
                ? ru["Bir hasap bilen ähli mümkinçiliklerden peýdalanyň"]
                : en["Bir hasap bilen ähli mümkinçiliklerden peýdalanyň"]}
            </p>
            <div id="name-input-container">
              <input
                className="r-input-box-1"
                type="text"
                placeholder={
                  dil === "TM"
                    ? tm.Adyñyz
                    : dil === "RU"
                    ? ru.Adyñyz
                    : en.Adyñyz
                }
              />
              <input
                className="r-input-box-2"
                type="text"
                placeholder={
                  dil === "TM"
                    ? tm.Familýañyz
                    : dil === "RU"
                    ? ru.Familýañyz
                    : en.Familýañyz
                }
              />
            </div>
            <input
              className="r-input-box-3"
              type="date"
              placeholder="Doglan wagtyňyz"
            />
            {/* <input className="r-input-box-4" placeholder="email hasabyňyz" type="text" /> */}
            <input
              className="r-input-box-5"
              placeholder={
                dil === "TM"
                  ? tm["Telefon nomeriñiz"]
                  : dil === "RU"
                  ? ru["Telefon nomeriñiz"]
                  : en["Telefon nomeriñiz"]
              }
              type="number"
            />
            <button className="button-1" onClick={() => goVerification()}>
              {dil === "TM"
                ? tm["Dowam et"]
                : dil === "RU"
                ? ru["Dowam et"]
                : en["Dowam et"]}
            </button>
            <div style={{ display: "inline-flex" }}>
              <p className="p-3">
                {dil === "TM"
                  ? tm["Meniň hasabym bar"]
                  : dil === "RU"
                  ? ru["Meniň hasabym bar"]
                  : en["Meniň hasabym bar"]}
              </p>
              <p className="p-4" onClick={() => goLogin()}>
                {dil === "TM"
                  ? tm["Ulgama girmek"]
                  : dil === "RU"
                  ? ru["Ulgama girmek"]
                  : en["Ulgama girmek"]}
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
export default Signup;
