import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
import category from "../../images/category.svg";
import BrandCard from "../../componentsFood/BrandCard";

import pizza from "../../images/pizza.jpg";
import ertirlik from "../../images/ertirlik.jpg";
import esasy from "../../images/esasy.jpg";
import hamyr from "../../images/hamyr.jpg";

const Categories = () => {
    const history = useHistory();
    const categories = [
        {
            name: "Pissa",
            img: pizza,
        },
        {
            name: "Esasy Tagamlar",
            img: esasy,
        },
        {
            name: "Hamyrdan önümler",
            img: hamyr,
        },
        {
            name: "Ertirlikler",
            img: ertirlik,
        },
        {
            name: "Pissa",
            img: pizza,
        },
        {
            name: "Esasy Tagamlar",
            img: esasy,
        },
        {
            name: "Hamyrdan önümler",
            img: hamyr,
        },
        {
            name: "Ertirlikler",
            img: ertirlik,
        },
        {
            name: "Pissa",
            img: pizza,
        },
        {
            name: "Esasy Tagamlar",
            img: esasy,
        },
        {
            name: "Hamyrdan önümler",
            img: hamyr,
        },
        {
            name: "Ertirlikler",
            img: ertirlik,
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
                        Görnüşler
                    </p>
                </div>

                <div className="w-full my-6 flex justify-between  items-center">
                    <div className="flex justify-start">
                        <p className="text-[32px] font-semi text-neutral-900 mr-2">
                            Görnüşler
                        </p>
                    </div>
                </div>

                <div className="w-full grid place-items-center gap-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 md2:grid-cols-4 lg:grid-cols-5  xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 6xl:grid-cols-9">
                    {categories.map((item) => {
                        return (
                            <div className="w-fit h-fit  ">
                                <div
                                    onClick={() =>
                                        history.push({
                                            pathname: "/rtn/category/9",
                                        })
                                    }
                                    className=" min-w-[193px]  h-fit   rounded-[16px]"
                                >
                                    <img
                                        className="w-full object-contain rounded-[16px]"
                                        src={item.img}
                                        alt="category"
                                    />
                                    <p className="text-[18px] my-2 font-semi text-black text-center">
                                        {item.name}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Categories;
