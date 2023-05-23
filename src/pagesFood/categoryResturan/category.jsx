import React, { useContext, useState } from "react";
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
import MarketCard from "../../componentsFood/MarketCard";
import brendimg from "../../images/category.svg";

import restoran1 from "../../images/restoran1.jpg";
import restoran2 from "../../images/restoran2.jpg";
import restoran3 from "../../images/restoran3.jpg";
import restoran4 from "../../images/restoran4.jpg";
import restoran5 from "../../images/restoran5.jpg";

import { Context } from "../../context/context";
import tm from "../../lang/tm/home.json";
import en from "../../lang/en/home.json";
import ru from "../../lang/ru/home.json";

const Category = () => {
  const history = useHistory();
  const { dil } = useContext(Context);
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

  const marketsimg = [
    {
      img: restoran1,
      close: false,
      is_discount: true,
      text: "Soltan Restoran",
    },
    {
      img: restoran2,
      close: true,
      is_discount: true,
      text: "Şa kofe",
    },
    {
      img: restoran3,
      close: false,
      is_discount: true,
      text: "Bazzeti",
    },
    {
      img: restoran4,
      close: true,
      is_discount: true,
      text: "Şabaz",
    },
    {
      img: restoran5,
      close: false,
      is_discount: true,
      text: "Tagamçy",
    },
  ];

  return (
    <div className="w-full inline-flex justify-between pb-10 select-none">
      <div className="min-w-[245px] w-[245px]">
        <button
          onClick={() => history.push({ pathname: "/rtn/markets" })}
          className="w-full h-[50px] mb-4 bg-green-100 text-green text-[18px] font-semi rounded-[8px]"
        >
          <West />{" "}
          {dil === "TM"
            ? tm["Ähli restoranlar"]
            : dil === "RU"
            ? ru["Ähli restoranlar"]
            : en["Ähli restoranlar"]}
        </button>
        <div className="w-full px-4 rounded-[8px] border-[1px] border-neutral-300">
          <h1 className="py-3 text-[20px] text-neutral-900 font-semi text-left">
            {dil === "TM"
              ? tm.Kategoriýalar
              : dil === "RU"
              ? ru.Kategoriýalar
              : en.Kategoriýalar}
          </h1>
          <p className="py-3 text-[16px] text-neutral-900 font-[300] text-left border-t-[1px] border-t-neutral-300">
            Ertirlikler
          </p>
          <p className="py-3 text-[16px] text-neutral-900 font-[300] text-left border-t-[1px] border-t-neutral-300">
            Pizza
          </p>
          <p className="py-3 text-[16px] text-neutral-900 font-[300] text-left border-t-[1px] border-t-neutral-300">
            Hamyrdan önümler
          </p>
          <p className="py-3 text-[16px] text-neutral-900 font-[300] text-left border-t-[1px] border-t-neutral-300">
            Esasy tagamlar
          </p>
        </div>
      </div>
      <div className="w-full pl-8">
        <div className="w-full flex items-center">
          <p
            onClick={() => history.push({ pathname: "/rtn/home" })}
            className="text-[16px] cursor-pointer font-regular text-black-secondary mr-2"
          >
            {dil === "TM"
              ? tm["Baş sahypa"]
              : dil === "RU"
              ? ru["Baş sahypa"]
              : en["Baş sahypa"]}
          </p>
          <ArrowForwardIos className="!text-[16px]  font-regular text-black-secondary mr-2" />
          <p className="text-[16px] font-regular text-black-secondary mr-2">
            {dil === "TM" ? tm.Görnüş : dil === "RU" ? ru.Görnüş : en.Görnüş}
          </p>
          <ArrowForwardIos className="!text-[16px]  font-regular text-black-secondary mr-2" />
          <p className="text-[16px] font-regular text-black-secondary mr-2">
            Kofe içilýän ýerler
          </p>
        </div>

        <div className="w-full mt-6 flex justify-between  items-center">
          <div className="flex justify-start">
            <img
              src={brendimg}
              className="h-[48px] object-contain rounded-[8px] shadow-sm mr-4"
              alt=""
            />
            <p className="text-[32px] mb-2 font-semi text-neutral-900 mr-2">
              Kofe içilýän ýerler
            </p>
          </div>
        </div>

        <div className="w-full mt-8 grid gap-8 place-items-center lg:grid-cols-1  xl:grid-cols-2   5xl:grid-cols-3  6xl2:grid-cols-3  ">
          {marketsimg.map((item, index) => {
            return (
              <div key={index} className="mr-6">
                <MarketCard
                  width={490}
                  is_discount={item.is_discount}
                  close={item.close}
                  img={item.img}
                  text={item.text}
                  key={"index"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
