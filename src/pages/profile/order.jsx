import { ArrowForwardIos } from "@mui/icons-material";
import React from "react";
import Sidebar from "../../components/SideBar";
import timer1 from "../../images/timer1.svg";
import timer2 from "../../images/timer2.svg";
import timer3 from "../../images/timer3.svg";
import timer4 from "../../images/timer4.svg";
import {
    DoNotDisturbOnOutlined,
    RefreshOutlined,
    StarBorderOutlined,
} from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import ProductOrderCard from "../../components/ProductOrderCard";
const Order = () => {
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
                <ArrowForwardIos className="!text-[16px]  font-regular text-black-secondary mr-2" />
                <p className="text-[16px] font-regular text-black-secondary mr-2">
                    Sargyt barada maglumatlar
                </p>
            </div>
            <div className="w-full my-4 flex justify-between  items-center">
                <div className="flex justify-start">
                    <p className="text-[28px] font-bold text-neutral-900 mr-2">
                        Sargyt barada maglumatlar
                    </p>
                </div>
            </div>
            <div className="w-full flex justify-between">
                <div className="min-w-[246px] w-[246px] h-fit">
                    <Sidebar />
                </div>
                <div className="w-full px-6">
                    {false && (
                        <div className="w-full flex justify-between rounded-[16px] p-6 border-[1px] border-neutral-300">
                            <div className="w-full flex items-center">
                                <img
                                    src={timer1}
                                    className="mr-2 h-[48px] object-contain"
                                    alt=""
                                />
                                <p className="text-[18px] text-neutral-900 font-semi ">
                                    Garaşylýar
                                </p>
                            </div>
                            <div className="w-fit flex">
                                <button className="text-white h-[42px] rounded-[9px] whitespace-nowrap px-6 bg-red text-[16px] font-semi ">
                                    <DoNotDisturbOnOutlined /> Sargydy ýatyrmak
                                </button>
                            </div>
                        </div>
                    )}
                    {true && (
                        <div className="w-full flex justify-between rounded-[16px] p-6 border-[1px] border-neutral-300">
                            <div className="w-full flex items-center">
                                <img
                                    src={timer3}
                                    className="mr-2 h-[48px] object-contain"
                                    alt=""
                                />
                                <p className="text-[18px] text-neutral-900 font-semi ">
                                    Eltip berildi
                                </p>
                            </div>
                            <div className="w-fit flex">
                                <button
                                    onClick={() =>
                                        history.push({
                                            pathname: "/mrt/basket",
                                        })
                                    }
                                    className="text-neutral-900 h-[42px] mr-4 rounded-[9px] whitespace-nowrap px-6 bg-neutral-200 text-[16px] font-semi "
                                >
                                    <RefreshOutlined /> Sargydy gaýtalamak
                                </button>
                                {/* <button className="text-neutral-900 h-[42px] rounded-[9px] whitespace-nowrap px-6 bg-yellow text-[16px] font-semi ">
                                    <StarBorderOutlined /> Baha bermek
                                </button> */}
                            </div>
                        </div>
                    )}
                    {false && (
                        <div className="w-full flex justify-between rounded-[16px] p-6 border-[1px] border-neutral-300">
                            <div className="w-full flex items-center">
                                <img
                                    src={timer2}
                                    className="mr-2 h-[48px] object-contain"
                                    alt=""
                                />
                                <p className="text-[18px] text-neutral-900 font-semi ">
                                    Taýýarlanylýar
                                </p>
                            </div>
                            {/* <div className="w-fit flex">
                                <button className="text-white h-[42px] rounded-[9px] whitespace-nowrap px-6 bg-red text-[16px] font-semi ">
                                    <DoNotDisturbOnOutlined /> Sargydy ýatyrmak
                                </button>
                            </div> */}
                        </div>
                    )}
                    {false && (
                        <div className="w-full flex justify-between rounded-[16px] p-6 border-[1px] border-neutral-300">
                            <div className="w-full flex items-center">
                                <img
                                    src={timer4}
                                    className="mr-2 h-[48px] object-contain"
                                    alt=""
                                />
                                <p className="text-[18px] text-neutral-900 font-semi ">
                                    Inkär edilen
                                </p>
                            </div>
                            {/* <div className="w-fit flex">
                                <button className="text-white h-[42px] rounded-[9px] whitespace-nowrap px-6 bg-red text-[16px] font-semi ">
                                    <DoNotDisturbOnOutlined /> Sargydy ýatyrmak
                                </button>
                            </div> */}
                        </div>
                    )}
                    <h1 className="w-full text-left text-[18px] font-semi text-neutral-900 mt-4">
                        Sargyt edilen önümler
                    </h1>
                    <div className="w-full mt-4">
                        <ProductOrderCard />
                    </div>
                    <div className="w-full flex justify-between mt-4">
                        <div className="w-[49%]">
                            <h1 className="w-full text-left text-[18px] text-neutral-900 font-semi">
                                Sargytyň bahasy:
                            </h1>
                            <div className="w-full mt-4 rounded-[16px] border-[1px] border-neutral-300 shadow-sm p-6">
                                <div className="flex pb-2 justify-between">
                                    <p className="text-[16px] text-neutral-900 font-medium">
                                        Umumy baha:
                                    </p>
                                    <p className="text-[16px] text-neutral-900 font-medium">
                                        260.00 TMT
                                    </p>
                                </div>
                                <div className="flex pb-2 justify-between">
                                    <p className="text-[16px] text-neutral-900 font-medium">
                                        Hyzmat üçin:
                                    </p>
                                    <p className="text-[16px] text-neutral-900 font-medium">
                                        +5.00 TMT
                                    </p>
                                </div>
                                <div className="flex pb-2 justify-between">
                                    <p className="text-[16px] text-red font-medium">
                                        Arzanladyş(-30%)
                                    </p>
                                    <p className="text-[16px] text-red font-medium">
                                        -78.00 TMT
                                    </p>
                                </div>
                                <div className="flex pb-2 border-b-[1px] border-b-neutral-300 justify-between">
                                    <p className="text-[16px] text-neutral-900 font-medium">
                                        Eltip bermek hyzmaty:
                                    </p>
                                    <p className="text-[16px] text-neutral-900 font-medium">
                                        +25.00 TMT
                                    </p>
                                </div>
                                <div className="flex pt-4 justify-between">
                                    <p className="text-[16px] text-neutral-900 font-semi">
                                        Jemi:
                                    </p>
                                    <p className="text-[16px] text-neutral-900 font-semi">
                                        207.00 TMT
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[49%]">
                            <h1 className="w-full text-left text-[18px] text-neutral-900 font-semi">
                                Sargyt barada maglumat
                            </h1>
                            <div className="w-full mt-4 ">
                                <div className="flex h-[48px] mb-2 bg-neutral-200 rounded-[8px] px-4 items-center justify-between">
                                    <p className="text-[16px] text-neutral-800 font-medium">
                                        Sargydyň kody:
                                    </p>
                                    <p className="text-[16px] text-neutral-900 font-semi">
                                        521582
                                    </p>
                                </div>
                                <div className="flex h-[48px] mb-2 bg-neutral-200 rounded-[8px] px-4 items-center justify-between">
                                    <p className="text-[16px] text-neutral-800 font-medium">
                                        Sargyt berilen wagty
                                    </p>
                                    <p className="text-[16px] text-neutral-900 font-semi">
                                        12.10.2023 - 13:23
                                    </p>
                                </div>
                                <div className="flex h-[48px] mb-2 bg-neutral-200 rounded-[8px] px-4 items-center justify-between">
                                    <p className="text-[16px] text-neutral-800 font-medium">
                                        Eltip berilen wagty:
                                    </p>
                                    <p className="text-[16px] text-neutral-900 font-semi">
                                        12.10.2023 - 13:51
                                    </p>
                                </div>
                                <div className="flex h-[48px] bg-neutral-200 rounded-[8px] px-4 items-center justify-between">
                                    <p className="text-[16px] text-neutral-900 font-medium">
                                        Eltip berilen ýeri
                                    </p>
                                    <p className="text-[16px] text-neutral-900 font-semi">
                                        Ataturk street 80
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
