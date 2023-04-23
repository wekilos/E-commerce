import { ArrowForwardIos } from "@mui/icons-material";
import React from "react";
import Sidebar from "../../componentsFood/SideBar";
import card from "../../images/card.png";
import timer1 from "../../images/timer1.svg";
import timer2 from "../../images/timer2.svg";
import timer3 from "../../images/timer3.svg";
import timer4 from "../../images/timer4.svg";
import { useHistory } from "react-router-dom";
const Orders = () => {
    const history = useHistory();
    return (
        <div className="w-full pb-10">
            <div className="w-full flex items-center">
                <p className="text-[16px] font-regular text-black-secondary mr-2">
                    Baş sahypa
                </p>
                <ArrowForwardIos className="!text-[16px]  font-regular text-black-secondary mr-2" />
                <p className="text-[16px] font-regular text-black-secondary mr-2">
                    Sargytlarym
                </p>
            </div>
            <div className="w-full my-4 flex justify-between  items-center">
                <div className="flex justify-start">
                    <p className="text-[28px] font-bold text-neutral-900 mr-2">
                        Sargytlarym
                    </p>
                </div>
            </div>
            <div className="w-full flex justify-between">
                <div className="min-w-[246px] w-[246px] h-fit">
                    <Sidebar />
                </div>
                <div className="w-full px-6">
                    <div className="w-full mb-4 ">
                        <h1 className="w-full mb-1 text-[20px] font-semi text-neutral-900 text-left">
                            Fewral
                        </h1>
                        <div className="w-full flex flex-wrap justify-between">
                            <div
                                onClick={() =>
                                    history.push({
                                        pathname: "/rtn/profile/orders/8",
                                    })
                                }
                                className="w-[48%] mb-4 h-[98px] flex bg-neutral-200 rounded-[8px] p-2 items-stretch"
                            >
                                <div className="w-[83px] flex justify-between flex-wrap mr-4 ">
                                    <div className="bg-white h-[40px] w-[40px] rounded-tl-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-tl-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-tr-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-tr-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-bl-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-bl-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-br-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-br-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="w-fit ">
                                    <div className="w-full flex mb-8">
                                        <img
                                            src={timer1}
                                            className="mr-2"
                                            alt=""
                                        />
                                        <p className="text-[16px] text-neutral-900 font-semi ">
                                            Garaşylýar
                                        </p>
                                    </div>
                                    <div className="w-fit flex">
                                        <p className="mr-6 "> 250 TMT</p>
                                        <ul>
                                            <li className="list-disc">
                                                22.12.2022
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[48%] mb-4 h-[98px] flex bg-neutral-200 rounded-[8px] p-2 items-stretch">
                                <div className="w-[83px] flex justify-between flex-wrap mr-4 ">
                                    <div className="bg-white h-[40px] w-[40px] rounded-tl-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-tl-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-tr-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-tr-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-bl-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-bl-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-br-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-br-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="w-fit ">
                                    <div className="w-full flex mb-8">
                                        <img
                                            src={timer3}
                                            className="mr-2"
                                            alt=""
                                        />
                                        <p className="text-[16px] text-neutral-900 font-semi ">
                                            Eltip berildi
                                        </p>
                                    </div>
                                    <div className="w-fit flex">
                                        <p className="mr-6 "> 250 TMT</p>
                                        <ul>
                                            <li className="list-disc">
                                                22.12.2022
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[48%] mb-4 h-[98px] flex bg-neutral-200 rounded-[8px] p-2 items-stretch">
                                <div className="w-[83px] flex justify-between flex-wrap mr-4 ">
                                    <div className="bg-white h-[40px] w-[40px] rounded-tl-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-tl-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-tr-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-tr-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-bl-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-bl-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-br-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-br-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="w-fit ">
                                    <div className="w-full flex mb-8">
                                        <img
                                            src={timer2}
                                            className="mr-2"
                                            alt=""
                                        />
                                        <p className="text-[16px] text-neutral-900 font-semi ">
                                            Taýýarlanylýar
                                        </p>
                                    </div>
                                    <div className="w-fit flex">
                                        <p className="mr-6 "> 250 TMT</p>
                                        <ul>
                                            <li className="list-disc">
                                                22.12.2022
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[48%] mb-4 h-[98px] flex bg-neutral-200 rounded-[8px] p-2 items-stretch">
                                <div className="w-[83px] flex justify-between flex-wrap mr-4 ">
                                    <div className="bg-white h-[40px] w-[40px] rounded-tl-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-tl-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-tr-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-tr-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-bl-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-bl-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-br-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-br-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="w-fit ">
                                    <div className="w-full flex mb-8">
                                        <img
                                            src={timer4}
                                            className="mr-2"
                                            alt=""
                                        />
                                        <p className="text-[16px] text-neutral-900 font-bold ">
                                            Inkär edilen
                                        </p>
                                    </div>
                                    <div className="w-fit flex">
                                        <p className="mr-6 "> 250 TMT</p>
                                        <ul>
                                            <li className="list-disc">
                                                22.12.2022
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-4 ">
                        <h1 className="w-full mb-1 text-[20px] font-semi text-neutral-900 text-left">
                            Ýanwar
                        </h1>
                        <div className="w-full flex flex-wrap justify-between">
                            <div className="w-[48%] mb-4 h-[98px] flex bg-neutral-200 rounded-[8px] p-2 items-stretch">
                                <div className="w-[83px] flex justify-between flex-wrap mr-4 ">
                                    <div className="bg-white h-[40px] w-[40px] rounded-tl-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-tl-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-tr-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-tr-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-bl-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-bl-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-br-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-br-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="w-fit ">
                                    <div className="w-full flex mb-8">
                                        <img
                                            src={timer1}
                                            className="mr-2"
                                            alt=""
                                        />
                                        <p className="text-[16px] text-neutral-900 font-semi ">
                                            Garaşylýar
                                        </p>
                                    </div>
                                    <div className="w-fit flex">
                                        <p className="mr-6 "> 250 TMT</p>
                                        <ul>
                                            <li className="list-disc">
                                                22.12.2022
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[48%] mb-4 h-[98px] flex bg-neutral-200 rounded-[8px] p-2 items-stretch">
                                <div className="w-[83px] flex justify-between flex-wrap mr-4 ">
                                    <div className="bg-white h-[40px] w-[40px] rounded-tl-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-tl-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-tr-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-tr-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-bl-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-bl-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-br-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-br-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="w-fit ">
                                    <div className="w-full flex mb-8">
                                        <img
                                            src={timer3}
                                            className="mr-2"
                                            alt=""
                                        />
                                        <p className="text-[16px] text-neutral-900 font-semi ">
                                            Eltip berildi
                                        </p>
                                    </div>
                                    <div className="w-fit flex">
                                        <p className="mr-6 "> 250 TMT</p>
                                        <ul>
                                            <li className="list-disc">
                                                22.12.2022
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[48%] mb-4 h-[98px] flex bg-neutral-200 rounded-[8px] p-2 items-stretch">
                                <div className="w-[83px] flex justify-between flex-wrap mr-4 ">
                                    <div className="bg-white h-[40px] w-[40px] rounded-tl-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-tl-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-tr-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-tr-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-bl-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-bl-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-br-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-br-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="w-fit ">
                                    <div className="w-full flex mb-8">
                                        <img
                                            src={timer2}
                                            className="mr-2"
                                            alt=""
                                        />
                                        <p className="text-[16px] text-neutral-900 font-semi ">
                                            Taýýarlanylýar
                                        </p>
                                    </div>
                                    <div className="w-fit flex">
                                        <p className="mr-6 "> 250 TMT</p>
                                        <ul>
                                            <li className="list-disc">
                                                22.12.2022
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[48%] mb-4 h-[98px] flex bg-neutral-200 rounded-[8px] p-2 items-stretch">
                                <div className="w-[83px] flex justify-between flex-wrap mr-4 ">
                                    <div className="bg-white h-[40px] w-[40px] rounded-tl-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-tl-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-tr-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-tr-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-bl-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-bl-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                    <div className="bg-white h-[40px] w-[40px] rounded-br-[4px] mb-[2px]">
                                        <img
                                            className=" h-[40px] rounded-br-[4px] object-contain "
                                            src={card}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="w-fit ">
                                    <div className="w-full flex mb-8">
                                        <img
                                            src={timer4}
                                            className="mr-2"
                                            alt=""
                                        />
                                        <p className="text-[16px] text-neutral-900 font-bold ">
                                            Inkär edilen
                                        </p>
                                    </div>
                                    <div className="w-fit flex">
                                        <p className="mr-6 "> 250 TMT</p>
                                        <ul>
                                            <li className="list-disc">
                                                22.12.2022
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
