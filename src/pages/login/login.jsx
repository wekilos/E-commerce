import React, { useState } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import Header from "./header/header";
const Login = () => {
    const [passType, setPassType] = useState("password");
    const history = useHistory();
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
                        <h2 className="Title">Hoş geldiňiz</h2>
                        <p className="p-1">
                            Ulgama girmek üçin Telefon nomeriňizi giriziň
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
                        <button className="button-1">Ulgama girmek</button>
                        <div style={{ display: "inline-flex" }}>
                            <p className="p-3">Hasabyňyz ýokmy? </p>
                            <p className="p-4" onClick={() => goRegstr()}>
                                Hasap döretmek üçin
                            </p>
                        </div>
                    </div>
                </section>

                <div className="w-full flex  justify-center text-[18px] my-6 text-neutral-900 font-semi">
                    © 2023
                    <span className="font-bold mx-1">Söwda onlaýn.</span> Ähli
                    Hukuklar goralan
                </div>
            </div>
        </div>
    );
};
export default Login;
