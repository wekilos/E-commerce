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
import ProductCard from "../../componentsFood/ProductCard";
import brendimg from "../../images/brand.png";
import ProductDetail from "../../componentsFood/ProductDetail";

const Product = () => {
    return (
        <div className="w-full inline-flex justify-between mt-[25px] select-none">
            <div className="w-full ">
                <div className="w-full flex items-center">
                    <p className="text-[16px] font-regular text-black-secondary mr-2">
                        Baş sahypa
                    </p>
                    <ArrowForwardIos className="!text-[16px] mt-1 font-regular text-black-secondary mr-2" />
                    <p className="text-[16px] font-regular text-black-secondary mr-2">
                        Category
                    </p>
                    <ArrowForwardIos className="!text-[16px] mt-1 font-regular text-black-secondary mr-2" />
                    <p className="text-[16px] font-regular text-black-secondary mr-2">
                        Subcategory
                    </p>
                    <ArrowForwardIos className="!text-[16px] mt-1 font-regular text-black-secondary mr-2" />
                    <p className="text-[16px] font-regular text-black-secondary mr-2">
                        Product
                    </p>
                </div>
                <div className="w-full my-8">
                    <ProductDetail />
                </div>
                <div className="w-full my-4 flex justify-between  items-center">
                    <div className="flex justify-start">
                        <p className="text-[28px] font-bold text-neutral-900 mr-2">
                            Meňzeş harytlar
                        </p>
                    </div>
                    <div className="border-[1px] border-[#E9EAEE] text-[#1D965C] cursor-pointer py-[5px] px-[12px] rounded-[24px] text-[16px] font-semi">
                        Hemmesini görkez
                    </div>
                </div>

                <div className="w-full inline-flex justify-between overflow-y-auto">
                    <div className="mr-2">
                        <ProductCard text={"item.text_tm"} key={"index"} />
                    </div>
                    <div className="mr-2">
                        <ProductCard text={"item.text_tm"} key={"index"} />
                    </div>
                    <div className="mr-2">
                        <ProductCard text={"item.text_tm"} key={"index"} />
                    </div>
                    <div className="mr-2">
                        <ProductCard text={"item.text_tm"} key={"index"} />
                    </div>
                    <div className="mr-2">
                        <ProductCard text={"item.text_tm"} key={"index"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
