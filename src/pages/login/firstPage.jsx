import React, { useState } from "react";
import "./firstPage.css";
import { useHistory } from "react-router-dom";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import Header from "./header/header";
import nahar from "../../images/nahar.svg";
import gro from "../../images/gro.svg";
const FirstPage = () => {
    const [passType, setPassType] = useState("password");
    const history = useHistory();
    const goRegstr = (id) => {
        history.push({ pathname: "/signup" });
    };
    return (
        <div className="!min-h-[100vh]">
            <Header first={true} />
            <div className="f-body ">
                <section className="!w-[85%] z-10 !p-0 flex-row flex justify-between flex-wrap ">
                    <div
                        className="login-container !bg-neutral-200 !w-full my-6 !h-[384px]  flex justify-between"
                        onClick={() => history.push({ pathname: "/mrt/home" })}
                    >
                        <div className="w-full py-[64px] gap-y-16 pl-[64px] items-stretch flex flex-wrap justify-start">
                            <h1 className=" w-full  text-[48px] font-bold text-left text-neutral-900">
                                Gök bakja önümlerini <br /> eltip bermek hyzmaty
                            </h1>
                            <button className=" h-[56px] w-[300px] rounded-[9px] bg-green text-white text-[18px] font-semi">
                                Hyzmady ulanmak
                            </button>
                        </div>
                        <img
                            className="h-[384px] object-contain"
                            src={gro}
                            alt="nahar"
                        />
                    </div>
                </section>

                <section className="!w-[85%] z-10 !p-0 flex-row flex justify-between flex-wrap ">
                    <div
                        onClick={() => history.push({ pathname: "/rtn/home" })}
                        className="login-container !bg-neutral-200  !w-full !h-[384px] flex justify-between"
                    >
                        <div className="w-full flex gap-y-16 py-[64px] pl-[64px] flex-wrap justify-start">
                            <h1 className=" w-full text-[48px] font-bold text-left  text-neutral-900">
                                Nahar eltip bermek <br /> hyzmaty
                            </h1>
                            <button className=" h-[56px] w-[300px] rounded-[9px] bg-green text-white text-[18px] font-semi">
                                Hyzmady ulanmak
                            </button>
                        </div>
                        <img
                            className="h-[384px] object-contain"
                            src={nahar}
                            alt="nahar"
                        />
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
export default FirstPage;
