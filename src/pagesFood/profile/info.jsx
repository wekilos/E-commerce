import { ArrowForwardIos } from "@mui/icons-material";
import React, { useState } from "react";
import Sidebar from "../../componentsFood/SideBar";
import card from "../../images/card.png";
import timer1 from "../../images/timer1.svg";
import timer2 from "../../images/timer2.svg";
import timer3 from "../../images/timer3.svg";
import timer4 from "../../images/timer4.svg";
import {
    DoNotDisturbOnOutlined,
    RefreshOutlined,
    StarBorderOutlined,
} from "@mui/icons-material";
import ProductOrderCard from "../../componentsFood/ProductOrderCard";
import ProductCard from "../../componentsFood/ProductCard";
import MarketCard from "../../componentsFood/MarketCard";
const Info = () => {
    const [wich, setWich] = useState(true);
    return (
        <div className="w-full pb-10">
            <div className="w-full flex items-center">
                <p className="text-[16px] font-regular text-black-secondary mr-2">
                    Baş sahypa
                </p>
                <ArrowForwardIos className="!text-[16px] mt-1 font-regular text-black-secondary mr-2" />
                <p className="text-[16px] font-regular text-black-secondary mr-2">
                    Hasabym
                </p>
            </div>
            <div className="w-full my-4 flex justify-between  items-center">
                <div className="flex justify-start">
                    <p className="text-[28px] font-bold text-neutral-900 mr-2">
                        Hasabym
                    </p>
                </div>
            </div>
            <div className="w-full flex justify-between">
                <div className="min-w-[246px] w-[246px] h-fit">
                    <Sidebar />
                </div>
                <div className="w-full px-6">
                    <div className="w-full text-left  text-black text-[18px] font-semi">
                        Esasy maglumatlar
                    </div>

                    <div className="w-full mt-4 flex justify-between flex-wrap">
                        <input
                            className="h-[48px] text-[16px] font-semi text-neutral-900 select-none outline-none w-[49%] px-4 rounded-[8px] bg-neutral-200 mb-4"
                            value="Islam"
                        />
                        <input
                            className="h-[48px] text-[16px] font-semi text-neutral-900 select-none outline-none w-[49%] px-4 rounded-[8px] bg-neutral-200 mb-4"
                            value="Yuldashev"
                        />
                        <input
                            readOnly
                            className="h-[48px] text-[16px] font-regular text-neutral-600 select-none outline-none w-[49%] px-4 rounded-[8px] bg-neutral-200 mb-4"
                            type="text"
                            defaultValue="10.04.1999"
                        />
                        <input
                            readOnly
                            className="h-[48px] text-[16px] font-regular text-neutral-600 select-none w-[49%] outline-none px-4 rounded-[8px] bg-neutral-200 mb-4"
                            value="+993 64 75 48 46"
                        />
                    </div>
                    <div className="w-full mt-4 flex justify-start">
                        <button className="h-[48px] text-[16px] mr-4 font-semi text-white select-none  w-[175px] px-4 rounded-[16px] bg-green mb-4">
                            Ýatda saklamak
                        </button>
                        <button className="h-[48px] text-[16px] font-semi text-white select-none  w-[175px] px-4 rounded-[16px] bg-red mb-4">
                            Yza gaýt
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
