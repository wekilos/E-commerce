import { ArrowForwardIos } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import Sidebar from "../../componentsFood/SideBar";
import card from "../../images/card.png";
import timer1 from "../../images/timer1.svg";
import timer2 from "../../images/timer2.svg";
import timer3 from "../../images/timer3.svg";
import timer4 from "../../images/timer4.svg";
import {
  DoNotDisturbOnOutlined,
  RefreshOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import ProductOrderCard from "../../componentsFood/ProductOrderCard";
import ProductCard from "../../componentsFood/ProductCard";
import MarketCard from "../../componentsFood/MarketCard";

import restoran1 from "../../images/restoran1.jpg";
import restoran2 from "../../images/restoran2.jpg";
import restoran3 from "../../images/restoran3.jpg";
import restoran4 from "../../images/restoran4.jpg";
import restoran5 from "../../images/restoran5.jpg";

import nahar1 from "../../images/nahar1.jpg";
import nahar2 from "../../images/nahar2.jpg";
import nahar3 from "../../images/nahar3.jpg";
import nahar4 from "../../images/nahar4.jpg";
import nahar5 from "../../images/nahar5.jpg";
import nahar6 from "../../images/nahar6.jpg";
import nahar7 from "../../images/nahar7.jpg";
import nahar8 from "../../images/nahar8.jpg";
import nahar9 from "../../images/nahar9.jpg";
import nahar10 from "../../images/nahar10.jpg";
import nahar11 from "../../images/nahar11.jpg";
import nahar12 from "../../images/nahar12.jpg";

import { Context } from "../../context/context";
import tm from "../../lang/tm/home.json";
import en from "../../lang/en/home.json";
import ru from "../../lang/ru/home.json";
import { useHistory } from "react-router-dom";

const Favorites = () => {
  const { dil } = useContext(Context);
  const history = useHistory();
  const [wich, setWich] = useState(true);

  const markets = [
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

  const naharlar = [
    {
      name: "Gowurdakly ýumurtga",
      img: nahar1,
    },
    {
      name: "Saçda ýumurtga",
      img: nahar2,
    },
    {
      name: "Toplumly ertirlik",
      img: nahar3,
    },
    {
      name: "Wetçina we peýnirli sendwiç",
      img: nahar4,
    },
    {
      name: " Çopan gowurma",
      img: nahar5,
    },
    {
      name: "Kombo fahitos",
      img: nahar6,
    },
    {
      name: "Saç gowurma",
      img: nahar7,
    },
    {
      name: "Towuk gowurma",
      img: nahar8,
    },
    {
      name: "Gury gutap görnüşleri",
      img: nahar9,
    },
    {
      name: "Haçapuri",
      img: nahar10,
    },
    {
      name: "işlekli",
      img: nahar11,
    },
    {
      name: "Manty",
      img: nahar12,
    },
  ];
  return (
    <div className="w-full pb-10">
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
          {dil === "TM"
            ? tm.Halanlarym
            : dil === "RU"
            ? ru.Halanlarym
            : en.Halanlarym}
        </p>
      </div>
      <div className="w-full my-4 flex justify-between  items-center">
        <div className="flex justify-start">
          <p className="text-[28px] font-bold text-neutral-900 mr-2">
            {dil === "TM"
              ? tm.Halanlarym
              : dil === "RU"
              ? ru.Halanlarym
              : en.Halanlarym}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="min-w-[246px] w-[246px] h-fit">
          <Sidebar />
        </div>
        <div className="w-full px-6">
          <div className="w-full flex justify-between bg-neutral-200 rounded-[8px] p-1 border-[1px] border-neutral-300">
            {wich ? (
              <button
                onClick={() => setWich(true)}
                className="w-[49%] rounded-[8px] py-2 text-neutral-900 font-semi bg-white "
              >
                {dil === "TM"
                  ? tm.Harytlar
                  : dil === "RU"
                  ? ru.Harytlar
                  : en.Harytlar}
              </button>
            ) : (
              <button
                onClick={() => setWich(true)}
                className="w-[49%] rounded-[8px] py-2 bg-neutral-200 font-semi text-neutral-700 "
              >
                {dil === "TM"
                  ? tm.Harytlar
                  : dil === "RU"
                  ? ru.Harytlar
                  : en.Harytlar}
              </button>
            )}
            {wich ? (
              <button
                onClick={() => setWich(false)}
                className="w-[49%] rounded-[8px] py-2 bg-neutral-200 font-semi text-neutral-700 "
              >
                {dil === "TM"
                  ? tm.Restoranlar
                  : dil === "RU"
                  ? ru.Restoranlar
                  : en.Restoranlar}
              </button>
            ) : (
              <button
                onClick={() => setWich(false)}
                className="w-[49%] rounded-[8px] py-2 text-neutral-900 font-semi bg-white "
              >
                {dil === "TM"
                  ? tm.Restoranlar
                  : dil === "RU"
                  ? ru.Restoranlar
                  : en.Restoranlar}
              </button>
            )}
          </div>

          {wich ? (
            <div className="w-full mt-6 grid gap-8 place-items-center md:grid-cols-1  lg:grid-cols-2  2xl:grid-cols-3  5xl:grid-cols-4 6xl2:grid-cols-5">
              {naharlar.map((item) => {
                return <ProductCard text={item.name} img={item.img} />;
              })}
            </div>
          ) : (
            <div className="w-full mt-8 grid gap-8 place-items-center lg:grid-cols-1  xl:grid-cols-2   5xl:grid-cols-3  6xl2:grid-cols-3  ">
              {markets.map((item, index) => {
                return (
                  <div key={index} className="">
                    <MarketCard
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
