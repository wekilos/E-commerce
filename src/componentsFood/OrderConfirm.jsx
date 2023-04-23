import React from "react";
import nahar from "../images/nahar.svg";
import gro from "../images/nahar.svg";
import { useHistory } from "react-router-dom";

const OrderConfirm = (props) => {
    const history = useHistory();
    return (
        <div className="w-full p-2">
            <h1 className="w-full text-center text-[28px] font-bold">
                Zakazyňyz ugradyldy
            </h1>
            <img src={gro} className="w-full mt-8 object-contain" alt="" />
            <p className="w-[90%] text-[16px] mt-8 text-neutral-800 font-regular text-center">
                Siziň sargydyňyz üstünlikli ugradyldy, sargydyňyzy profilden
                sargytlar bölüminden yzarlap bilersiňiz
            </p>
            <button
                onClick={() =>
                    history.push({ pathname: "/rtn/profile/orders/1" })
                }
                className="w-full h-[58px] mt-8 bg-green rounded-[9px] text-[18px] text-white font-semi"
            >
                Sargydy yzarlamak
            </button>
            <button
                onClick={() => history.push({ pathname: "/rtn/home" })}
                className="w-full h-[58px] mt-2 bg-neutral-300 rounded-[9px] text-[18px] text-neutral-900 font-semi"
            >
                Baş sahypa
            </button>
        </div>
    );
};

export default OrderConfirm;
