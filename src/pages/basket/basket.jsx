import React, { useState } from "react";
import { West, ArrowForwardIos, FavoriteBorder } from "@mui/icons-material";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Slider,
} from "@mui/material";
import { Cancel } from "@mui/icons-material";
import ProductCard from "../../components/ProductCard";
import brendimg from "../../images/brand.png";
import ProductDetail from "../../components/ProductDetail";
import ProductBasketCard from "../../components/ProductBasketCard";
import { useHistory } from "react-router-dom";

const Basket = () => {
    const history = useHistory();
    return (
        <div className="w-full inline-flex justify-between pb-10 select-none">
            <div className="w-full">
                <div className="w-full flex items-center">
                    <p className="text-[16px] font-regular text-black-secondary mr-2">
                        Baş sahypa
                    </p>
                    <ArrowForwardIos className="!text-[16px]  font-regular text-black-secondary mr-2" />
                    <p className="text-[16px] font-regular text-black-secondary mr-2">
                        Basket
                    </p>
                </div>

                <div className="w-full mt-4 flex justify-between  items-center">
                    <div className="flex justify-start">
                        <p className="text-[28px] font-bold text-neutral-900 mr-2">
                            Sebet
                        </p>
                    </div>
                    {/* <div className="border-[1px] border-[#E9EAEE] text-[#1D965C] cursor-pointer py-[5px] px-[12px] rounded-[24px] text-[16px] font-semi">
                        Hemmesini görkez
                    </div> */}
                </div>

                <div className="w-full mt-6 inline-flex justify-between flex-wrap">
                    <div className="w-[75%]">
                        <ProductBasketCard text="Ynamdar" />
                        <ProductBasketCard text="Halk market" />
                        <ProductBasketCard text="Milli market" />
                    </div>
                    <div className="w-[20%] h-fit rounded-[16px] border-[1px] border-neutral-300 p-4 shadow-sm">
                        <h1 className="w-full text-[20px] font-semi text-black-secondary border-b-[1px] border-b-neutral-300 py-2">
                            Sargyt barada
                        </h1>
                        <div className="w-full border-b-[1px] border-b-neutral-300 py-2 ">
                            <div className="w-full flex justify-between py-2">
                                <p className="text-[16px] font-medium text-black-secondary">
                                    Umumy:
                                </p>
                                <p className="text-[16px] font-medium text-black-secondary">
                                    232351 TMT
                                </p>
                            </div>
                            <div className="w-full flex justify-between py-2">
                                <p className="text-[16px] font-medium text-black-secondary">
                                    Eltip bermek:
                                </p>
                                <p className="text-[16px] font-medium text-black-secondary">
                                    +25 TMT
                                </p>
                            </div>
                            <div className="w-full flex justify-between py-2">
                                <p className="text-[16px] font-medium text-red">
                                    Arzanladyş:
                                </p>
                                <p className="text-[16px] font-medium text-red">
                                    -120 TMT
                                </p>
                            </div>
                        </div>
                        <div className="w-full flex justify-between py-4">
                            <p className="text-[18px] font-semi text-black-secondary">
                                Jemi:
                            </p>
                            <p className="text-[18px] font-semi text-black-secondary">
                                156 TMT
                            </p>
                        </div>
                        <div className="w-full">
                            <button
                                onClick={() =>
                                    history.push({ pathname: "/mrt/sargyt" })
                                }
                                className="h-[43px] rounded-[8px] w-full bg-green text-[16px] font-semi text-white "
                            >
                                Tassyklamak
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;
