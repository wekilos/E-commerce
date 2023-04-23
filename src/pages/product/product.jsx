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

import img6 from "../../images/Image6.svg";
import img7 from "../../images/Image7.svg";
import img8 from "../../images/Image8.svg";
import img14 from "../../images/Image14.svg";
import img15 from "../../images/Image15.svg";

const Product = () => {
    const kop = [
        {
            name: "Maýonez Nur Näzli 30% 800 g",
            img: img6,
        },
        {
            name: "Ketçup Mr.Ricco Grill Menu Towuk karri üçin 350 gr",
            img: img7,
        },
        {
            name: "Limon sousy Arslan Küpü 500 ml",
            img: img8,
        },
        {
            name: "Batonçiik şokoladly Twix Extra kökeler we karamel bilen 82 gr",
            img: img14,
        },
        {
            name: "Şokoladly batonçik Bounty Trio süýt şokolady bilen örtülen",
            img: img15,
        },
        {
            name: "Maýonez Nur Näzli 30% 800 g",
            img: img6,
        },
        {
            name: "Ketçup Mr.Ricco Grill Menu Towuk karri üçin 350 gr",
            img: img7,
        },
        {
            name: "Limon sousy Arslan Küpü 500 ml",
            img: img8,
        },
        {
            name: "Batonçiik şokoladly Twix Extra kökeler we karamel bilen 82 gr",
            img: img14,
        },
        {
            name: "Şokoladly batonçik Bounty Trio süýt şokolady bilen örtülen",
            img: img15,
        },
    ];

    return (
        <div className="w-full inline-flex justify-between pb-10 select-none">
            <div className="w-full ">
                <div className="w-full flex items-center">
                    <p className="text-[16px] font-regular text-black-secondary mr-2">
                        Baş sahypa
                    </p>
                    <ArrowForwardIos className="!text-[16px]  font-regular text-black-secondary mr-2" />
                    <p className="text-[16px] font-regular text-black-secondary mr-2">
                        Görnüş
                    </p>
                    <ArrowForwardIos className="!text-[16px]  font-regular text-black-secondary mr-2" />
                    <p className="text-[16px] font-regular text-black-secondary mr-2">
                        Görnüş bölümi
                    </p>
                    <ArrowForwardIos className="!text-[16px]  font-regular text-black-secondary mr-2" />
                    <p className="text-[16px] font-regular text-black-secondary mr-2">
                        Haryt
                    </p>
                </div>
                <div className="w-full my-8">
                    <ProductDetail />
                </div>
                <div className="w-full mt-10 mb-6 flex justify-between  items-center">
                    <div className="flex justify-start">
                        <p className="text-[28px] font-bold text-neutral-900 mr-2">
                            Meňzeş harytlar
                        </p>
                    </div>
                    <div className="border-[1px] border-[#E9EAEE] text-[#1D965C] cursor-pointer py-[5px] px-[12px] rounded-[24px] text-[16px] font-semi">
                        Hemmesini görkez
                    </div>
                </div>

                <div className="w-full inline-flex scrollbar-hide justify-between overflow-y-auto">
                    {kop.map((item) => {
                        return (
                            <div key={item.name} className="mr-4">
                                <ProductCard text={item.name} img={item.img} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Product;
