import { ArrowForwardIos } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/SideBar";
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
import ProductOrderCard from "../../components/ProductOrderCard";
import ProductCard from "../../components/ProductCard";
import MarketCard from "../../components/MarketCard";

import img6 from "../../images/Image6.svg";
import img7 from "../../images/Image7.svg";
import img8 from "../../images/Image8.svg";
import img14 from "../../images/Image14.svg";
import img15 from "../../images/Image15.svg";

import img1 from "../../images/Store1.svg";
import img2 from "../../images/Store2.svg";
import img3 from "../../images/Store3.svg";
import img4 from "../../images/Store4.svg";
import img5 from "../../images/Store5.svg";

import { Context } from "../../context/context";
import tm from "../../lang/tm/home.json";
import en from "../../lang/en/home.json";
import ru from "../../lang/ru/home.json";
import { useHistory } from "react-router-dom";
import { BASE_URL, axiosInstance } from "../../utils/axiosIntance";

const Favorites = () => {
  const [wich, setWich] = useState(true);
  const { dil } = useContext(Context);
  const history = useHistory();
  const [favPro, setFavPro] = useState([]);
  const [favMar, setFavMar] = useState([]);
  const markets = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5];

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

  useEffect(() => {
    getFavPro();
    getFavMar();
  }, [dil]);

  const getFavPro = () => {
    axiosInstance
      .get("/api/grocery_favourite_products", {
        params: {
          lang: dil,
          user_id: 1,
        },
      })
      .then((data) => {
        console.log(data.data);
        setFavPro(data.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFavMar = () => {
    axiosInstance
      .get("/api/grocery_favourite_markets", {
        params: {
          lang: dil,
          user_id: 1,
        },
      })
      .then((data) => {
        console.log("search", data.data.body);
        setFavMar(data.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-full pb-10">
      <div className="w-full flex items-center">
        <p
          onClick={() => history.push({ pathname: "/mrt/home" })}
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
                  ? tm.Dükanlar
                  : dil === "RU"
                  ? ru.Dükanlar
                  : en.Dükanlar}
              </button>
            ) : (
              <button
                onClick={() => setWich(false)}
                className="w-[49%] rounded-[8px] py-2 text-neutral-900 font-semi bg-white "
              >
                {dil === "TM"
                  ? tm.Dükanlar
                  : dil === "RU"
                  ? ru.Dükanlar
                  : en.Dükanlar}
              </button>
            )}
          </div>

          {wich ? (
            <div className="w-full mt-6 grid gap-8 place-items-center md:grid-cols-2  lg:grid-cols-3  2xl:grid-cols-4  4xl:grid-cols-5 5xl:grid-cols-6">
              {favPro?.map((item) => {
                return (
                  <ProductCard
                    data={item}
                    text={item.name}
                    img={BASE_URL + item.img}
                  />
                );
              })}
            </div>
          ) : (
            <div className="w-full mt-6 grid gap-4 place-items-center lg:grid-cols-2  2xl:grid-cols-3 3xl:grid-cols-3 4xl:grid-cols-4 6xl:grid-cols-5 ">
              {favMar?.map((item) => {
                return (
                  <div className="   ">
                    <MarketCard data={item} img={BASE_URL + item} />
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
