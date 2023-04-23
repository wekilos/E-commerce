import React from "react";
import "./signup.css";
import { useHistory } from "react-router-dom";
import Header from "./header/header";

const Signup = () => {
    const history = useHistory();
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
                        <h2 className="Title">Hasap döretmek</h2>
                        <p className="p-1">
                            Bir hasap bilen ähli mümkinçiliklerden peýdalanyň
                        </p>
                        <div id="name-input-container">
                            <input
                                className="r-input-box-1"
                                type="text"
                                placeholder="Adyňyz"
                            />
                            <input
                                className="r-input-box-2"
                                type="text"
                                placeholder="Familýaňyz"
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
                            placeholder="Telefon nomeriňiz"
                            type="number"
                        />
                        <button
                            className="button-1"
                            onClick={() => goVerification()}
                        >
                            Dowam et
                        </button>
                        <div style={{ display: "inline-flex" }}>
                            <p className="p-3">Meniň hasabym bar</p>
                            <p className="p-4" onClick={() => goLogin()}>
                                Ulgama girmek
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
export default Signup;
