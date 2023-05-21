import React, { useContext, useState } from "react";
import {
  West,
  ArrowForwardIos,
  FavoriteBorder,
  TimesOneMobiledata,
} from "@mui/icons-material";
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

import img14 from "../../images/Image14.svg";
import img15 from "../../images/Image15.svg";
import img16 from "../../images/Image16.svg";
import img17 from "../../images/Image17.svg";
import img18 from "../../images/Image18.svg";

import { Context } from "../../context/context";
import tm from "../../lang/tm/home.json";
import en from "../../lang/en/home.json";
import ru from "../../lang/ru/home.json";

const Market = () => {
  const history = useHistory();
  const { dil } = useContext(Context);
  const [liked, setLiked] = useState(false);
  const [starOpen, setStarOpen] = useState(false);
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
    <div className="w-full inline-flex pb-10 justify-between select-none">
      <Modal
        className="font-roboto p-8 "
        width={650}
        open={starOpen}
        onCancel={() => setStarOpen(false)}
        footer={false}
      >
        <h1 className="text-[28px] mb-4 font-bold text-neutral-900 text-left ">
          {dil === "TM"
            ? tm["Baha bermek"]
            : dil === "RU"
            ? ru["Baha bermek"]
            : en["Baha bermek"]}
        </h1>

        <div className="w-full overflow-y-auto max-h-[470px]">
          <div className="w-full mb-2 py-2 border-b-[1px] border-b-neutral-300">
            <h1 className="w-full text-left text-[18px] text-neutral-900 font-semi">
              Худайдурды Хожайев
            </h1>
            <p className="w-full text-left text-[14px] text-neutral-700 font-medium">
              12.10.2023 - 13:23
            </p>
            <div className="flex my-2">
              <p className="w-fit mr-2 text-left text-[16px] text-neutral-900 font-semi">
                4.0
              </p>
              <div className="flex">
                <StarOutlined className="text-yellow" />
                <StarOutlined className="text-yellow" />
                <StarOutlined className="text-yellow" />
                <StarOutlined className="text-yellow" />
                <StarOutlined className="text-neutral-400" />
              </div>
            </div>
            <p className="w-full text-left text-[14px] text-neutral-700 font-regular">
              Этот уютный ресторан оставил самые лучшие впечатления!
              Гостеприимные хозяева, вкусные блюда, красивая подача, широкая
              винная карта и прекрасный десерт. Рекомендую всем! Хочется
              возвращаться сюда снова и снова.
            </p>
          </div>
          <div className="w-full mb-2 py-2 border-b-[1px] border-b-neutral-300">
            <h1 className="w-full text-left text-[18px] text-neutral-900 font-semi">
              Худайдурды Хожайев
            </h1>
            <p className="w-full text-left text-[14px] text-neutral-700 font-medium">
              12.10.2023 - 13:23
            </p>
            <div className="flex my-2">
              <p className="w-fit mr-2 text-left text-[16px] text-neutral-900 font-semi">
                4.0
              </p>
              <div className="flex">
                <StarOutlined className="text-yellow" />
                <StarOutlined className="text-yellow" />
                <StarOutlined className="text-yellow" />
                <StarOutlined className="text-yellow" />
                <StarOutlined className="text-neutral-400" />
              </div>
            </div>
            <p className="w-full text-left text-[14px] text-neutral-700 font-regular">
              Этот уютный ресторан оставил самые лучшие впечатления!
              Гостеприимные хозяева, вкусные блюда, красивая подача, широкая
              винная карта и прекрасный десерт. Рекомендую всем! Хочется
              возвращаться сюда снова и снова.
            </p>
          </div>
        </div>
      </Modal>
      <div className="min-w-[245px] w-[245px]">
        <button
          onClick={() => history.push({ pathname: "/mrt/markets" })}
          className="w-full h-[50px]  bg-green-100 text-green text-[18px] font-semi rounded-[8px]"
        >
          <West />{" "}
          {dil === "TM"
            ? tm["Ähli dükanlar"]
            : dil === "RU"
            ? ru["Ähli dükanlar"]
            : en["Ähli dükanlar"]}
        </button>
        <div className="w-full px-4 mt-4 rounded-[8px] border-[1px] border-neutral-300">
          <h1 className="py-3 text-[20px] text-neutral-900 font-semi text-left">
            {dil === "TM"
              ? tm.Kategoriýalar
              : dil === "RU"
              ? ru.Kategoriýalar
              : en.Kategoriýalar}
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
          <p
            onClick={() => history.push({ pathname: "/mrt/markets" })}
            className="text-[16px] cursor-pointer font-regular text-black-secondary mr-2"
          >
            {dil === "TM"
              ? tm.Dükanlar
              : dil === "RU"
              ? ru.Dükanlar
              : en.Dükanlar}
          </p>
          <ArrowForwardIos className="!text-[16px]  font-regular text-black-secondary mr-2" />
          <p className="text-[16px] font-regular text-black-secondary mr-2">
            Ruhubelent market
          </p>
        </div>

        <div className="w-full relative mt-6">
          <div className="absolute top-[20px] cursor-pointer right-[20px] h-[50px] w-[50px] rounded-[100%] bg-neutral-900-50 opacity-100 flex justify-center items-center">
            {/* <FavoriteBorder className="text-white font-semi opacity-100 " /> */}
            {liked ? (
              <img
                onClick={() => setLiked(!liked)}
                className="text-white"
                src={heartLiked}
                alt=""
              />
            ) : (
              <img
                onClick={() => setLiked(!liked)}
                className="text-white"
                src={heart}
                alt=""
              />
            )}
          </div>
          <img
            src={marketImg}
            className="w-full object-contain"
            alt="marketImg"
          />
          <div
            onClick={() => setStarOpen(true)}
            className="absolute cursor-pointer bottom-4 left-4 rounded-[8px] bg-white px-4 py-2 flex items-center "
          >
            <img className="mr-2" src={star} alt="star" />
            <div>
              <h1 className="text-[16px] text-neutral-900 font-semi">
                {dil === "TM"
                  ? tm["Baha bermek"]
                  : dil === "RU"
                  ? ru["Baha bermek"]
                  : en["Baha bermek"]}{" "}
                4.0
              </h1>
              <p className="text-[16px] text-neutral-700 font-medium">
                124 ses
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-6 flex justify-between  items-center">
          <p className="text-[32px] font-semi text-neutral-900 mr-2">
            Ruhubelent market
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
              20 - 120 TMT
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

        <div className="w-full flex items-center justify-start mt-8">
          <h1 className="font-bold text-[20px] text-neutral-900 mr-2">
            Şokolad we süýji önümleri
          </h1>
          <p className="font-medium text-[16px] text-neutral-600"></p>
        </div>
        <div className="w-full mt-4 grid gap-8 place-items-center md:grid-cols-2  lg:grid-cols-3  2xl:grid-cols-4  4xl:grid-cols-5 5xl:grid-cols-6">
          {cake.map((item) => {
            return <ProductCard text={item.name} img={item.img} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Market;
