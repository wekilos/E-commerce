import { ArrowForwardIos } from "@mui/icons-material";
import React, { useState } from "react";
import Sidebar from "../../componentsFood/SideBar";
import carta from "../../images/carta.svg";
import timer1 from "../../images/timer1.svg";
import timer2 from "../../images/timer2.svg";
import timer3 from "../../images/timer3.svg";
import timer4 from "../../images/timer4.svg";
import {
    DoNotDisturbOnOutlined,
    RefreshOutlined,
    StarBorderOutlined,
    WhereToVoteOutlined,
    AddOutlined,
    ArrowForwardIosOutlined,
} from "@mui/icons-material";
import ProductOrderCard from "../../componentsFood/ProductOrderCard";
import ProductCard from "../../componentsFood/ProductCard";
import MarketCard from "../../componentsFood/MarketCard";
import { Modal } from "antd";
import AddressCard from "../../componentsFood/AddressCard";
import AddressCardCreate from "../../componentsFood/AddressCardCreate";
const Address = () => {
    const [wich, setWich] = useState(true);
    const [add, setAdd] = useState(false);
    return (
        <div className="w-full mt-6">
            <Modal
                className="font-roboto p-8"
                width={650}
                open={add}
                onCancel={() => setAdd(false)}
                footer={false}
            >
                <h1 className="text-[28px] mb-4 font-bold text-neutral-900 text-left ">
                    Adres girizmek
                </h1>

                <div className="w-full flex justify-between flex-wrap">
                    <input
                        className="w-[85%] text-[16px] mb-4 p-4 outline-none font-regular bg-neutral-200 rounded-[8px] text-neutral-600 text-left"
                        placeholder="Adresňiziň ady, Mysal öý"
                        type="text"
                    />
                    <div className="w-[55px] text-[16px] mb-4 p-4 outline-none font-regular bg-neutral-200 rounded-[8px] text-neutral-600 text-left">
                        <img src={carta} alt="carta" />
                    </div>
                    <input
                        className="w-full text-[16px] mb-4 p-4 outline-none font-regular bg-neutral-200 rounded-[8px] text-neutral-600 text-left"
                        placeholder="Adres"
                        type="text"
                    />
                </div>
                <button
                    onClick={() => setAdd(false)}
                    className="h-[50px] w-full bg-green rounded-[9px] text-white text-[16px] font-semi"
                >
                    Ugratmak
                </button>
            </Modal>
            <div className="w-full flex items-center">
                <p className="text-[16px] font-regular text-black-secondary mr-2">
                    Baş sahypa
                </p>
                <ArrowForwardIos className="!text-[16px]  font-regular text-black-secondary mr-2" />
                <p className="text-[16px] font-regular text-black-secondary mr-2">
                    Adreslerim
                </p>
            </div>
            <div className="w-full my-4 flex justify-between  items-center">
                <div className="flex justify-start">
                    <p className="text-[28px] font-bold text-neutral-900 mr-2">
                        Adreslerim
                    </p>
                </div>
            </div>
            <div className="w-full flex justify-between">
                <div className="min-w-[246px] w-[246px] h-fit">
                    <Sidebar />
                </div>
                <div className="w-full flex justify-between flex-wrap h-fit px-6">
                    <div className="w-[49%]">
                        <AddressCard />
                    </div>
                    <div className="w-[49%]">
                        <AddressCard />
                    </div>
                    <div className="w-[49%]">
                        <AddressCard />
                    </div>
                    {/* <div
                        onClick={() => setAdd(true)}
                        className="w-[49%] mb-4 cursor-pointer bg-green-100 rounded-[8px] h-[65px] flex items-center justify-center text-green text-[16px] font-bold"
                    >
                        <AddOutlined className="mr-2 rounded-[8px] bg-green-200 text-[14px]" />
                        Täze adres goşmak
                    </div> */}
                    <AddressCardCreate />
                </div>
            </div>
        </div>
    );
};

export default Address;
