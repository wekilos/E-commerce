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
import BrandCard from "../../components/BrandCard";

import brend1 from "../../images/brend1.svg";
import brend2 from "../../images/brend2.svg";
import brend3 from "../../images/brend3.svg";
import brend4 from "../../images/brend4.svg";
import brend5 from "../../images/brend5.svg";

const Brends = () => {
    const brends = [
        {
            name: "Nescafe",
        },
        {
            name: "Her gün",
            img: brend1,
        },
        {
            name: "Elwan",
            img: brend2,
        },
        {
            name: "Şuwat",
            img: brend3,
        },
        {
            name: "7 gün",
            img: brend4,
        },
        {
            name: "Eçil",
            img: brend5,
        },
        {
            name: "Eçil",
            img: brend5,
        },
        {
            name: "7 gün",
            img: brend4,
        },
        {
            name: "Nescafe",
        },
        {
            name: "Her gün",
            img: brend1,
        },
        {
            name: "Elwan",
            img: brend2,
        },
        {
            name: "Şuwat",
            img: brend3,
        },
    ];

    return (
        <div className="w-full inline-flex justify-between pb-10 select-none">
            <div className="w-full">
                <div className="w-full flex items-center">
                    <p className="text-[16px] font-regular text-black-secondary mr-2">
                        Baş sahypa
                    </p>
                    <ArrowForwardIos className="!text-[16px]  font-regular text-black-secondary mr-2" />
                    <p className="text-[16px] font-regular text-black-secondary mr-2">
                        Brandler
                    </p>
                </div>

                <div className="w-full my-6 flex justify-between  items-center">
                    <div className="flex justify-start">
                        <p className="text-[32px] font-semi text-neutral-900 mr-2">
                            Brandler
                        </p>
                    </div>
                </div>

                <div className="w-full grid place-items-center gap-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 md2:grid-cols-4 lg:grid-cols-5  xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 6xl:grid-cols-9">
                    {brends.map((item) => {
                        return <BrandCard text={item.name} img={item.img} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Brends;
