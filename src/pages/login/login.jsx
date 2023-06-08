import React, { useContext, useState } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import Header from "./header/header";

import { Context } from "../../context/context";
import tm from "../../lang/tm/home.json";
import en from "../../lang/en/home.json";
import ru from "../../lang/ru/home.json";

const Login = () => {
  const [passType, setPassType] = useState("password");
  const history = useHistory();
  const { dil } = useContext(Context);
  const [number, setNumber] = useState(993);
  const goRegstr = (id) => {
    history.push({ pathname: "/signup" });
  };

  const inputHandler = (value) => {
    if (value.length < 3) {
      setNumber(993);
    } else if (value.length < 12) {
      setNumber(value);
    }
  };
  return (
    <div className="max-h-[100vh]">
      <Header />
      <div className="body">
        <section>
          <div className="login-container !h-fit">
            <h2 className="Title">
              {dil === "TM"
                ? tm["Hoş geldiňiz"]
                : dil === "RU"
                ? ru["Hoş geldiňiz"]
                : en["Hoş geldiňiz"]}
            </h2>
            <p className="p-1">
              {dil === "TM"
                ? tm["Ulgama girmek üçin Telefon belgiñizi giriziň"]
                : dil === "RU"
                ? ru["Ulgama girmek üçin Telefon belgiñizi giriziň"]
                : en["Ulgama girmek üçin Telefon belgiñizi giriziň"]}
            </p>
            <input
              className="input-box-1"
              placeholder="+993"
              type="text"
              value={number}
              max={11}
              min={3}
              onChange={(e) => inputHandler(e.target.value)}
            />
            {/* <br />
                        <input
                            className="input-box-2"
                            placeholder="Açar sözüňiz"
                            type={passType}
                        />
                        {passType === "password" && (
                            <EyeOutlined
                                onClick={() => setPassType("text")}
                                className="eyeIcon"
                            />
                        )}
                        {passType === "text" && (
                            <EyeInvisibleOutlined
                                onClick={() => setPassType("password")}
                                className="eyeIcon"
                            />
                        )} */}
            {/* <p className="p-2">Açar sözümi unutdym</p> */}
            <button className="button-1">
              {dil === "TM"
                ? tm["Ulgama girmek"]
                : dil === "RU"
                ? ru["Ulgama girmek"]
                : en["Ulgama girmek"]}
            </button>
            <div style={{ display: "inline-flex" }}>
              <p className="p-3">
                {dil === "TM"
                  ? tm["Hasabyñyz ýokmy?"]
                  : dil === "RU"
                  ? ru["Hasabyñyz ýokmy?"]
                  : en["Hasabyñyz ýokmy?"]}
              </p>
              <p className="p-4" onClick={() => goRegstr()}>
                {dil === "TM"
                  ? tm["Hasap döretmek üçin"]
                  : dil === "RU"
                  ? ru["Hasap döretmek üçin"]
                  : en["Hasap döretmek üçin"]}
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
export default Login;
