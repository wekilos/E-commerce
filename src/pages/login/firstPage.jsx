import React, { useContext, useState } from "react";
import "./firstPage.css";
import { useHistory } from "react-router-dom";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import Header from "./header/header";
import nahar from "../../images/2.svg";
import gro from "../../images/1.svg";

import { Context } from "../../context/context";
import tm from "../../lang/tm/home.json";
import en from "../../lang/en/home.json";
import ru from "../../lang/ru/home.json";

const FirstPage = () => {
  const [passType, setPassType] = useState("password");
  const history = useHistory();
  const { dil } = useContext(Context);
  const goRegstr = (id) => {
    history.push({ pathname: "/signup" });
  };
  return (
    <div className="!min-h-[100vh] ">
      <Header first={true} />
      <div className="f-body p-0">
        <section className="lg:!w-[85%]  !rounded-[32px] !w-[95%] z-10 !p-0 flex-row flex justify-between flex-wrap ">
          <div
            className="login-container !rounded-[32px] !bg-neutral-200 !w-full my-6 !h-[384px]  lg:flex block justify-between"
            onClick={() => history.push({ pathname: "/mrt/home" })}
          >
            <div className="w-full lg:py-[64px] pt-[30px] lg:gap-y-16 pl-[64px] items-stretch flex flex-wrap justify-start">
              <h1 className=" w-full  lg:text-[48px] text-[22px] font-bold text-left text-neutral-900">
                {dil === "TM"
                  ? tm["Gök bakja önümlerini"]
                  : dil === "RU"
                  ? ru["Gök bakja önümlerini"]
                  : en["Gök bakja önümlerini"]}
                <br />
                {dil === "TM"
                  ? tm["eltip bermek hyzmaty"]
                  : dil === "RU"
                  ? ru["eltip bermek hyzmaty"]
                  : en["eltip bermek hyzmaty"]}
              </h1>
              <button className=" xl:block hidden h-[56px] w-[300px] rounded-[9px] bg-green text-white text-[18px] font-semi">
                {dil === "TM"
                  ? tm["Hyzmady ulanmak"]
                  : dil === "RU"
                  ? ru["Hyzmady ulanmak"]
                  : en["Hyzmady ulanmak"]}
              </button>
            </div>
            <img
              className="lg:h-[384px] float-right h-[300px] object-contain"
              src={gro}
              alt="nahar"
            />
          </div>
        </section>

        <section className="lg:!w-[85%]  !rounded-[32px] !w-[95%] z-10 !p-0 flex-row flex justify-between flex-wrap ">
          <div
            onClick={() => history.push({ pathname: "/rtn/home" })}
            className="login-container !rounded-[32px] !bg-neutral-200 !w-full my-6 !h-[384px]  lg:flex block justify-between"
          >
            <div className="w-full lg:py-[64px] pt-[30px] lg:gap-y-16 pl-[64px] items-stretch flex flex-wrap justify-start">
              <h1 className=" w-full  lg:text-[48px] text-[22px] font-bold text-left text-neutral-900">
                {dil === "TM"
                  ? tm["Nahar eltip bermek"]
                  : dil === "RU"
                  ? ru["Nahar eltip bermek"]
                  : en["Nahar eltip bermek"]}
                <br />

                {dil === "TM"
                  ? tm.hyzmaty
                  : dil === "RU"
                  ? ru.hyzmaty
                  : en.hyzmaty}
              </h1>
              <button className=" xl:block hidden h-[56px] w-[300px] rounded-[9px] bg-green text-white text-[18px] font-semi">
                {dil === "TM"
                  ? tm["Hyzmady ulanmak"]
                  : dil === "RU"
                  ? ru["Hyzmady ulanmak"]
                  : en["Hyzmady ulanmak"]}
              </button>
            </div>
            <img
              className="lg:h-[384px] float-right h-[300px] object-contain"
              src={nahar}
              alt="nahar"
            />
          </div>
        </section>

        <div className="w-full flex flex-wrap  items-center whitespace-nowrap  justify-center text-[18px] my-6 text-neutral-900 font-semi">
          <span className="font-bold mx-1">
            {/* Günlük söwda  */}© 2023 Söwda müdürligi onlaýn.
          </span>
          <br />
          <span>
            {dil === "TM"
              ? "Ähli Hukuklar goralan"
              : dil === "RU"
              ? "Все права защищены"
              : "All Rights Reserved"}
          </span>
        </div>
      </div>
    </div>
  );
};
export default FirstPage;
