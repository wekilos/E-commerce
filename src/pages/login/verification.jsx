import React from "react";
import { useHistory } from "react-router-dom";
import "./verification.css";
import Header from "./header/header";

const Verification = () => {
    const history = useHistory();
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
                        <h2 className="Title">Tassyklaýjy kod</h2>
                        <p className="p-1">
                            Telefon belgiňize tassyklaýjy kody iberdik
                        </p>
                        <div className="v-input-box">
                            <input
                                className="v-input"
                                required
                                type="number"
                                disabled
                            />
                            <input
                                className="v-input"
                                required
                                type="number"
                                disabled
                            />
                            <input
                                className="v-input"
                                required
                                type="number"
                                disabled
                            />
                            <input
                                className="v-input"
                                required
                                type="number"
                                disabled
                            />
                            <input
                                className="v-input"
                                required
                                type="number"
                                disabled
                            />
                        </div>
                        <p style={{ marginTop: "24px", marginBottom: "18px" }}>
                            0:35
                        </p>
                        <button
                            className="button-1"
                            onClick={() => goVerificationFilled()}
                        >
                            Dowam etmek
                        </button>
                        <div>
                            <p
                                style={{ cursor: "pointer" }}
                                className="p-3"
                                onClick={() => goBack()}
                            >
                                {" "}
                                {"<-- Yza gaýtmak"}
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
export default Verification;
