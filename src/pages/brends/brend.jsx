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

import img14 from "../../images/Image14.svg";
import img15 from "../../images/Image15.svg";
import img16 from "../../images/Image16.svg";
import img17 from "../../images/Image17.svg";
import img18 from "../../images/Image18.svg";

const Brend = () => {
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [brends, setBrends] = useState([
        { id: 1, name: "Mars" },
        { id: 1, name: "Pepsi" },
        { id: 1, name: "Colo" },
        { id: 1, name: "Snicers" },
        { id: 1, name: "Turan" },
        { id: 1, name: "Apple" },
        { id: 1, name: "Fanta" },
        { id: 1, name: "Sprite" },
    ]);
    const [filterBrends, setFilterBrends] = useState(brends);

    const [markets, setMarkets] = useState([
        { id: 1, name: "Mars" },
        { id: 1, name: "Pepsi" },
        { id: 1, name: "Colo" },
        { id: 1, name: "Snicers" },
        { id: 1, name: "Turan" },
        { id: 1, name: "Apple" },
        { id: 1, name: "Fanta" },
        { id: 1, name: "Sprite" },
    ]);
    const [filterMarkets, setFilterMarkets] = useState(markets);

    const SearchBrends = (value) => {
        let filter = value.toUpperCase();
        let newArray = brends.filter((item) => {
            return item.name.toUpperCase().indexOf(filter) > -1;
        });
        if (value.length === 0) {
            setFilterBrends([...brends]);
        } else {
            setFilterBrends([...newArray]);
        }
    };

    const SearchMarkets = (value) => {
        let filter = value.toUpperCase();
        let newArray = markets.filter((item) => {
            return item.name.toUpperCase().indexOf(filter) > -1;
        });
        if (value.length === 0) {
            setFilterMarkets([...markets]);
        } else {
            setFilterMarkets([...newArray]);
        }
    };

    const cake = [
        {
            name: "Batonçiik şokoladly Twix Extra kökeler we karamel bilen 82 gr",
            img: img14,
        },
        {
            name: "Şokoladly batonçik Bounty Trio süýt şokolady bilen örtülen",
            img: img15,
        },
        {
            name: "Mini wafli Kinder Bueno 18 sany 108 g",
            img: img16,
        },
        {
            name: "Süýjüler Коркунов şokoladlaryň ýygyndysy gara",
            img: img17,
        },
        {
            name: "Süýji sowgat Snickers Twix MilkyWay 81 g",
            img: img18,
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
            name: "Mini wafli Kinder Bueno 18 sany 108 g",
            img: img16,
        },
        {
            name: "Süýjüler Коркунов şokoladlaryň ýygyndysy gara",
            img: img17,
        },
        {
            name: "Süýji sowgat Snickers Twix MilkyWay 81 g",
            img: img18,
        },
    ];

    return (
        <div className="w-full inline-flex justify-between pb-10 select-none">
            <div className="min-w-[245px] w-[245px]">
                {/* <button className="w-full h-[50px]  bg-green-100 text-green text-[18px] font-semi rounded-[8px]">
                    <West /> Ähli dükanlar
                </button> */}
                <div className="w-full px-4 rounded-[8px] border-[1px] border-neutral-300">
                    <h1 className="py-3 text-[20px] text-neutral-900 font-semi text-left">
                        Kategoriýalar
                    </h1>
                    <p className="py-3 text-[16px] text-neutral-900 font-[300] text-left border-t-[1px] border-t-neutral-300">
                        Maýonez we souslar
                    </p>
                    <p className="py-3 text-[16px] text-neutral-900 font-[300] text-left border-t-[1px] border-t-neutral-300">
                        Unaş, däneler we unlar
                    </p>
                    <p className="py-3 text-[16px] text-neutral-900 font-[300] text-left border-t-[1px] border-t-neutral-300">
                        Şokolad we süýji önümleri
                    </p>
                    <p className="py-3 text-[16px] text-neutral-900 font-[300] text-left border-t-[1px] border-t-neutral-300">
                        Süýt önümleri
                    </p>
                </div>

                <div className="w-full px-4 mt-4 rounded-[8px] border-[1px] border-neutral-300">
                    <h1 className="py-3 text-[20px] border-b-[1px] border-b-neutral-300 text-neutral-900 font-semi text-left">
                        Baha
                    </h1>
                    <div className="flex justify-between">
                        <input
                            className="w-[45%] h-[50px] mt-2 outline-none p-2 rounded-[8px] border-[1px] border-neutral-300"
                            type="text"
                            placeholder="0 TMT"
                            value={priceRange[0] + " TMT"}
                        />
                        <input
                            className="w-[45%] h-[50px] mt-2 outline-none p-2 rounded-[8px] border-[1px] border-neutral-300"
                            type="text"
                            placeholder="0 TMT"
                            value={priceRange[1] + " TMT"}
                        />
                    </div>
                    <div className=" mt-4 w-full px-2">
                        <Slider
                            sx={{
                                "& .MuiSlider-thumb": {
                                    color: "#32BB78",
                                },
                                "& .MuiSlider-track": {
                                    color: "#32BB78",
                                },
                                "& .MuiSlider-rail": {
                                    color: "#E9EAEE",
                                },
                                "& .MuiSlider-active": {
                                    color: "#32BB78",
                                },
                            }}
                            className="z-10  text-green"
                            min={0}
                            max={1000}
                            getAriaLabel={() => "Minimum distance"}
                            defaultValue={priceRange}
                            // value={priceRange}
                            onChange={(e) => {
                                setPriceRange(e.target.value);
                            }}
                            valueLabelDisplay="auto"
                            getAriaValueText={(e) =>
                                console.log("value text", e)
                            }
                            disableSwap
                        />
                    </div>
                </div>
            </div>
            <div className="w-full pl-8">
                <div className="w-full flex items-center">
                    <p className="text-[16px] font-regular text-black-secondary mr-2">
                        Baş sahypa
                    </p>
                    <ArrowForwardIos className="!text-[16px]  font-regular text-black-secondary mr-2" />
                    <p className="text-[16px] font-regular text-black-secondary mr-2">
                        Brandiň ady
                    </p>
                </div>

                <div className="w-full mt-5 flex justify-between  items-center">
                    <div className="flex justify-start">
                        <img
                            src={brendimg}
                            className="h-[48px] object-contain rounded-[8px] shadow-sm mr-4"
                            alt=""
                        />
                        <p className="text-[32px] font-semi text-neutral-900 mr-2">
                            Brandiň ady
                        </p>
                    </div>
                    <div className="w-[200px]">
                        <FormControl size="small" fullWidth>
                            <InputLabel
                                style={{ color: "#32BB78" }}
                                id="demo-simple-select-label"
                            >
                                Saýhallamak
                            </InputLabel>
                            <Select
                                labelStyle={{ color: "#32BB78" }}
                                sx={{
                                    borderRadius: "22px",
                                    color: "#32BB78",
                                    ".MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#32BB78",
                                    },
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                        {
                                            borderColor: "#32BB78",
                                        },
                                    "&:hover .MuiOutlinedInput-notchedOutline":
                                        {
                                            borderColor: "#32BB78",
                                        },
                                    ".MuiSvgIcon-root ": {
                                        fill: "#32BB78 !important",
                                    },
                                }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Saýhallamak"
                                // onChange={handleChange}
                            >
                                <MenuItem value={"Default"}>
                                    Meşhurlygyna görä
                                </MenuItem>
                                <MenuItem value={"Cheep to Expensive"}>
                                    Arzanda gymmada
                                </MenuItem>
                                <MenuItem value={"Expensive to Cheep"}>
                                    Gymmatdan arzana
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="w-full  mt-6 flex justify-start items-center">
                    <div className="flex justify-between overflow-x-auto items-center mr-2 rounded-[32px] h-[30px] p-[5px] pl-[10px] bg-green text-white text-[16px] font-medium">
                        <p className="mr-2">Baha: 20 - 120 TMT</p>
                        <Cancel className="cursor-pointer" />
                    </div>
                    <div className="flex cursor-pointer items-center rounded-[32px] h-[30px] p-[5px] px-[10px] bg-neutral-300 text-black-secondary text-[16px] font-medium">
                        Filteri arassalamak
                    </div>
                </div>
                {/* <div className="w-full flex items-center justify-start mt-4">
                    <h1 className="font-[700] text-[20px] text-neutral-900 mr-2">
                        Şokolad we süýji önümleri
                    </h1>
                    <p className="font-medium text-[16px] text-neutral-600">
                        (sany 8)
                    </p>
                </div> */}
                <div className="w-full mt-7 grid gap-8 place-items-center md:grid-cols-2  lg:grid-cols-3  2xl:grid-cols-4  4xl:grid-cols-5 5xl:grid-cols-6">
                    {cake.map((item) => {
                        return <ProductCard text={item.name} img={item.img} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Brend;
