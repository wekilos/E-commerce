import React, { useContext, useEffect, useState } from "react";
import { West, ArrowForwardIos, FavoriteBorder } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
} from "@mui/material";
import { Cancel, StarOutlined } from "@mui/icons-material";
import { Modal } from "antd";
import ProductCard from "../../components/ProductCard";
import marketImg from "../../images/market.png";
import heart from "../../images/heartWhite.svg";
import heartLiked from "../../images/heartLiked.svg";
import star from "../../images/star.svg";
import { useHistory } from "react-router-dom";

import img6 from "../../images/Image6.svg";
import img7 from "../../images/Image7.svg";
import img8 from "../../images/Image8.svg";
import img14 from "../../images/Image14.svg";
import img15 from "../../images/Image15.svg";

import { Context } from "../../context/context";
import tm from "../../lang/tm/home.json";
import en from "../../lang/en/home.json";
import ru from "../../lang/ru/home.json";
import { axiosInstance } from "../../utils/axiosIntance";

const MoreSaleProducts = () => {
  const history = useHistory();
  const { dil } = useContext(Context);
  const [categories, setCategories] = useState([]);
  const [moreSale, setMoreSale] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const kop = [];

  useEffect(() => {
    getCategories();
    getDiscount();
  }, [dil]);

  const getCategories = () => {
    axiosInstance
      .get("/api/grocery_categories", {
        params: {
          lang: dil,
        },
      })
      .then((data) => {
        console.log(data.data);
        setCategories(data.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDiscount = () => {
    axiosInstance
      .get("/api/grocery_more_sale_products", {
        params: {
          lang: dil,
        },
      })
      .then((data) => {
        console.log(data.data);
        setMoreSale(data.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full inline-flex justify-between pb-10 select-none">
      <div className="min-w-[245px] w-[245px]">
        <div className="w-full px-4 mt-0 rounded-[8px] border-[1px] border-neutral-300">
          <h1 className="py-3 text-[20px] text-neutral-900 font-semi text-left">
            {dil === "TM"
              ? tm.Kategoriýalar
              : dil === "RU"
              ? ru.Kategoriýalar
              : en.Kategoriýalar}
          </h1>

          {categories?.map((item, i) => {
            return (
              <p
                key={"catmore" + i}
                onClick={() =>
                  history.push({ pathname: "/mrt/kategory/" + item.id })
                }
                className="py-3 text-[16px] text-neutral-900 font-[300] text-left border-t-[1px] border-t-neutral-300"
              >
                {item?.name}
              </p>
            );
          })}
        </div>

        <div className="w-full px-4 mt-4 rounded-[8px] border-[1px] border-neutral-300">
          <h1 className="py-3 text-[20px] border-b-[1px] border-b-neutral-300 text-neutral-900 font-semi text-left">
            {dil === "TM" ? tm.Bahasy : dil === "RU" ? ru.Bahasy : en.Bahasy}
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
              getAriaValueText={(e) => console.log("value text", e)}
              disableSwap
            />
          </div>
        </div>
      </div>
      <div className="w-full pl-8">
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
              ? tm["Köp satylanlar"]
              : dil == "RU"
              ? ru["Köp satylanlar"]
              : en["Köp satylanlar"]}
          </p>
        </div>

        <div className="w-full mt-6 flex justify-between  items-center">
          <p className="text-[32px] font-semi text-neutral-900 mr-2">
            {dil === "TM"
              ? tm["Köp satylanlar"]
              : dil == "RU"
              ? ru["Köp satylanlar"]
              : en["Köp satylanlar"]}
          </p>
          <div className="w-[200px]">
            <FormControl size="small" fullWidth>
              <InputLabel
                style={{ color: "#32BB78" }}
                id="demo-simple-select-label"
              >
                {dil === "TM"
                  ? tm.Saýhallamak
                  : dil === "RU"
                  ? ru.Saýhallamak
                  : en.Saýhallamak}
              </InputLabel>
              <Select
                labelStyle={{ color: "#32BB78" }}
                sx={{
                  borderRadius: "22px",
                  color: "#32BB78",
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "#32BB78",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#32BB78",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
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
                  {dil === "TM"
                    ? tm["Meşhurlygyna görä"]
                    : dil === "RU"
                    ? ru["Meşhurlygyna görä"]
                    : en["Meşhurlygyna görä"]}
                </MenuItem>
                <MenuItem value={"Cheep to Expensive"}>
                  {dil === "TM"
                    ? tm["Arzandan gymmada"]
                    : dil === "RU"
                    ? ru["Arzandan gymmada"]
                    : en["Arzandan gymmada"]}
                </MenuItem>
                <MenuItem value={"Expensive to Cheep"}>
                  {dil === "TM"
                    ? tm["Gymmatdan arzana"]
                    : dil === "RU"
                    ? ru["Gymmatdan arzana"]
                    : en["Gymmatdan arzana"]}
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="w-full  mt-5 flex justify-start items-center">
          <div className="flex justify-between overflow-x-auto items-center mr-2 rounded-[32px] h-[30px] p-[5px] pl-[10px] bg-green text-white text-[16px] font-medium">
            <p className="mr-2">
              {dil === "TM" ? tm.Bahasy : dil === "RU" ? ru.Bahasy : en.Bahasy}:
              {" " + priceRange[0]} - {priceRange[1]} TMT
            </p>
            <Cancel className="cursor-pointer" />
          </div>
          <div className="flex cursor-pointer items-center rounded-[32px] h-[30px] p-[5px] px-[10px] bg-neutral-300 text-black-secondary text-[16px] font-medium">
            {dil === "TM"
              ? tm["Filtrleri arassalamak"]
              : dil === "RU"
              ? ru["Filtrleri arassalamak"]
              : en["Filtrleri arassalamak"]}
          </div>
        </div>

        <div className="w-full">
          <div className="w-full flex items-center justify-start mt-8">
            <h1 className="font-bold text-[20px] text-neutral-900 mr-2">
              {dil === "TM"
                ? tm["Köp satylanlar"]
                : dil == "RU"
                ? ru["Köp satylanlar"]
                : en["Köp satylanlar"]}
            </h1>
            <p className="font-medium text-[16px] text-neutral-600"></p>
          </div>
          <div className="w-full mt-4 grid gap-8 place-items-center md:grid-cols-2  lg:grid-cols-3  2xl:grid-cols-4  4xl:grid-cols-5 5xl:grid-cols-6">
            {moreSale?.map((item) => {
              return (
                <ProductCard
                  data={item}
                  text={item.name}
                  img={item?.img[0].img}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreSaleProducts;
