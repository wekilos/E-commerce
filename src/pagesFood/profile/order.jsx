import { ArrowForwardIos } from "@mui/icons-material";
import React, { useContext } from "react";
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
import { useHistory } from "react-router-dom";
import { Context } from "../../context/context";
import tm from "../../lang/tm/home.json";
import en from "../../lang/en/home.json";
import ru from "../../lang/ru/home.json";

const Order = () => {
  const history = useHistory();
  const { dil } = useContext(Context);
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
            ? tm.Sargytlarym
            : dil === "RU"
            ? ru.Sargytlarym
            : en.Sargytlarym}
        </p>
        <ArrowForwardIos className="!text-[16px]  font-regular text-black-secondary mr-2" />
        <p className="text-[16px] font-regular text-black-secondary mr-2">
          {dil === "TM"
            ? tm["Sargyt barada maglumatlar"]
            : dil === "RU"
            ? ru["Sargyt barada maglumatlar"]
            : en["Sargyt barada maglumatlar"]}
        </p>
      </div>
      <div className="w-full my-4 flex justify-between  items-center">
        <div className="flex justify-start">
          <p className="text-[28px] font-bold text-neutral-900 mr-2">
            {dil === "TM"
              ? tm["Sargyt barada maglumatlar"]
              : dil === "RU"
              ? ru["Sargyt barada maglumatlar"]
              : en["Sargyt barada maglumatlar"]}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="min-w-[246px] w-[246px] h-fit">
          <Sidebar />
        </div>
        <div className="w-full px-6">
          {false && (
            <div className="w-full flex justify-between rounded-[16px] p-6 border-[1px] border-neutral-300">
              <div className="w-full flex items-center">
                <img
                  src={timer1}
                  className="mr-2 h-[48px] object-contain"
                  alt=""
                />
                <p className="text-[18px] text-neutral-900 font-semi ">
                  Garaşylýar
                </p>
              </div>
              <div className="w-fit flex">
                <button
                  onClick={() =>
                    history.push({
                      pathname: "/rtn/basket",
                    })
                  }
                  className="text-white h-[42px] rounded-[9px] whitespace-nowrap px-6 bg-red text-[16px] font-semi "
                >
                  <DoNotDisturbOnOutlined /> Sargydy ýatyrmak
                </button>
              </div>
            </div>
          )}
          {true && (
            <div className="w-full flex justify-between rounded-[16px] p-6 border-[1px] border-neutral-300">
              <div className="w-full flex items-center">
                <img
                  src={timer3}
                  className="mr-2 h-[48px] object-contain"
                  alt=""
                />
                <p className="text-[18px] text-neutral-900 font-semi ">
                  {dil === "TM"
                    ? tm["Eltip berildi"]
                    : dil === "RU"
                    ? ru["Eltip berildi"]
                    : en["Eltip berildi"]}
                </p>
              </div>
              <div className="w-fit flex">
                <button
                  onClick={() =>
                    history.push({
                      pathname: "/rtn/basket",
                    })
                  }
                  className="text-neutral-900 h-[42px] mr-4 rounded-[9px] whitespace-nowrap px-6 bg-neutral-200 text-[16px] font-semi "
                >
                  <RefreshOutlined />
                  {dil === "TM"
                    ? tm["Sargydy gaýtalamak"]
                    : dil === "RU"
                    ? ru["Sargydy gaýtalamak"]
                    : en["Sargydy gaýtalamak"]}
                </button>
                {/* <button className="text-neutral-900 h-[42px] rounded-[9px] whitespace-nowrap px-6 bg-yellow text-[16px] font-semi ">
                                    <StarBorderOutlined /> Baha bermek
                                </button> */}
              </div>
            </div>
          )}
          {false && (
            <div className="w-full flex justify-between rounded-[16px] p-6 border-[1px] border-neutral-300">
              <div className="w-full flex items-center">
                <img
                  src={timer2}
                  className="mr-2 h-[48px] object-contain"
                  alt=""
                />
                <p className="text-[18px] text-neutral-900 font-semi ">
                  Taýýarlanylýar
                </p>
              </div>
              {/* <div className="w-fit flex">
                                <button className="text-white h-[42px] rounded-[9px] whitespace-nowrap px-6 bg-red text-[16px] font-semi ">
                                    <DoNotDisturbOnOutlined /> Sargydy ýatyrmak
                                </button>
                            </div> */}
            </div>
          )}
          {false && (
            <div className="w-full flex justify-between rounded-[16px] p-6 border-[1px] border-neutral-300">
              <div className="w-full flex items-center">
                <img
                  src={timer4}
                  className="mr-2 h-[48px] object-contain"
                  alt=""
                />
                <p className="text-[18px] text-neutral-900 font-semi ">
                  Inkär edilen
                </p>
              </div>
              {/* <div className="w-fit flex">
                                <button className="text-white h-[42px] rounded-[9px] whitespace-nowrap px-6 bg-red text-[16px] font-semi ">
                                    <DoNotDisturbOnOutlined /> Sargydy ýatyrmak
                                </button>
                            </div> */}
            </div>
          )}
          <h1 className="w-full text-left text-[18px] font-semi text-neutral-900 mt-6">
            {dil === "TM"
              ? tm["Sargyt edilen önümler"]
              : dil === "RU"
              ? ru["Sargyt edilen önümler"]
              : en["Sargyt edilen önümler"]}
          </h1>
          <div className="w-full mt-6">
            <ProductOrderCard />
          </div>
          <div className="w-full flex justify-between mt-6">
            <div className="w-[49%]">
              <h1 className="w-full text-left text-[18px] text-neutral-900 font-semi">
                {dil === "TM"
                  ? tm["Sargytyň bahasy"]
                  : dil === "RU"
                  ? ru["Sargytyň bahasy"]
                  : en["Sargytyň bahasy"]}
                :
              </h1>
              <div className="w-full mt-4 rounded-[16px] border-[1px] border-neutral-300 shadow-sm p-6">
                <div className="flex pb-2 justify-between">
                  <p className="text-[16px] text-neutral-900 font-regular">
                    {dil === "TM"
                      ? tm["Umumy baha"]
                      : dil === "RU"
                      ? ru["Umumy baha"]
                      : en["Umumy baha"]}
                    :
                  </p>
                  <p className="text-[16px] text-neutral-900 font-regular">
                    260.00 TMT
                  </p>
                </div>
                <div className="flex pb-2 justify-between">
                  <p className="text-[16px] text-neutral-900 font-regular">
                    {dil === "TM"
                      ? tm["Hyzmat üçin"]
                      : dil === "RU"
                      ? ru["Hyzmat üçin"]
                      : en["Hyzmat üçin"]}
                    :
                  </p>
                  <p className="text-[16px] text-neutral-900 font-regular">
                    +5.00 TMT
                  </p>
                </div>
                <div className="flex pb-2 justify-between">
                  <p className="text-[16px] text-red font-regular">
                    {dil === "TM"
                      ? tm.Arzanladyş
                      : dil === "RU"
                      ? ru.Arzanladyş
                      : en.Arzanladyş}
                    (-30%)
                  </p>
                  <p className="text-[16px] text-red font-regular">
                    -78.00 TMT
                  </p>
                </div>
                <div className="flex pb-2 border-b-[1px] border-b-neutral-300 justify-between">
                  <p className="text-[16px] text-neutral-900 font-regular">
                    {dil === "TM"
                      ? tm["Eltip bermek hyzmaty"]
                      : dil === "RU"
                      ? ru["Eltip bermek hyzmaty"]
                      : en["Eltip bermek hyzmaty"]}
                    :
                  </p>
                  <p className="text-[16px] text-neutral-900 font-regular">
                    +25.00 TMT
                  </p>
                </div>
                <div className="flex pt-4 justify-between">
                  <p className="text-[16px] text-neutral-900 font-semi">
                    {dil === "TM" ? tm.Jemi : dil === "RU" ? ru.Jemi : en.Jemi}:
                  </p>
                  <p className="text-[16px] text-neutral-900 font-semi">
                    207.00 TMT
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[49%]">
              <h1 className="w-full text-left text-[18px] text-neutral-900 font-semi">
                {dil === "TM"
                  ? tm["Sargyt barada maglumat"]
                  : dil === "RU"
                  ? ru["Sargyt barada maglumat"]
                  : en["Sargyt barada maglumat"]}
              </h1>
              <div className="w-full mt-4 ">
                <div className="flex h-[48px] mb-2 bg-neutral-200 rounded-[8px] px-4 items-center justify-between">
                  <p className="text-[16px] text-neutral-800 font-regular">
                    {dil === "TM"
                      ? tm["Sargydyn kody"]
                      : dil === "RU"
                      ? ru["Sargydyn kody"]
                      : en["Sargydyn kody"]}
                    :
                  </p>
                  <p className="text-[16px] text-neutral-900 font-semi">
                    521582
                  </p>
                </div>
                <div className="flex h-[48px] mb-2 bg-neutral-200 rounded-[8px] px-4 items-center justify-between">
                  <p className="text-[16px] text-neutral-800 font-regular">
                    {dil === "TM"
                      ? tm["Sargyt berlen wagty"]
                      : dil === "RU"
                      ? ru["Sargyt berlen wagty"]
                      : en["Sargyt berlen wagty"]}
                  </p>
                  <p className="text-[16px] text-neutral-900 font-semi">
                    12.10.2023 - 13:23
                  </p>
                </div>
                <div className="flex h-[48px] mb-2 bg-neutral-200 rounded-[8px] px-4 items-center justify-between">
                  <p className="text-[16px] text-neutral-800 font-regular">
                    {dil === "TM"
                      ? tm["Eltip berlen wagty"]
                      : dil === "RU"
                      ? ru["Eltip berlen wagty"]
                      : en["Eltip berlen wagty"]}
                    :
                  </p>
                  <p className="text-[16px] text-neutral-900 font-semi">
                    12.10.2023 - 13:51
                  </p>
                </div>
                <div className="flex h-[48px] bg-neutral-200 rounded-[8px] px-4 items-center justify-between">
                  <p className="text-[16px] text-neutral-900 font-regular">
                    {dil === "TM"
                      ? tm["Eltip berlen yeri"]
                      : dil === "RU"
                      ? ru["Eltip berlen yeri"]
                      : en["Eltip berlen yeri"]}
                  </p>
                  <p className="text-[16px] text-neutral-900 font-semi">
                    Ataturk street 80
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
