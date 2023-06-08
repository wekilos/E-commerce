import { ArrowForwardIos, Timer3 } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/SideBar";
import card from "../../images/card.png";
import timer1 from "../../images/timer1.svg";
import timer2 from "../../images/timer2.svg";
import timer3 from "../../images/timer3.svg";
import timer4 from "../../images/timer4.svg";
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
import { BASE_URL_IMG, axiosInstance } from "../../utils/axiosIntance";

const Orders = () => {
  const history = useHistory();
  const { dil } = useContext(Context);
  const [orders, setOrders] = useState([]);

  const month = [
    dil === "TM" ? tm.Yanwar : dil === "RU" ? ru.Yanwar : en.Yanwar,
    dil === "TM" ? tm.Fewral : dil === "RU" ? ru.Fewral : en.Fewral,
    dil === "TM" ? tm.Mart : dil === "RU" ? ru.Mart : en.Mart,
    dil === "TM" ? tm.Aprel : dil === "RU" ? ru.Aprel : en.Aprel,
    dil === "TM" ? tm.May : dil === "RU" ? ru.May : en.May,
    dil === "TM" ? tm.Iyun : dil === "RU" ? ru.Iyun : en.Iyun,
    dil === "TM" ? tm.Iyul : dil === "RU" ? ru.Iyul : en.Iyul,
    dil === "TM" ? tm.Awgust : dil === "RU" ? ru.Awgust : en.Awgust,
    dil === "TM" ? tm.Sentyabr : dil === "RU" ? ru.Sentyabr : en.Sentyabr,
    dil === "TM" ? tm.Oktayabr : dil === "RU" ? ru.Oktayabr : en.Oktayabr,
    dil === "TM" ? tm.Noyabr : dil === "RU" ? ru.Noyabr : en.Noyabr,
    dil === "TM" ? tm.Dekabr : dil === "RU" ? ru.Dekabr : en.Dekabr,
  ];
  useEffect(() => {
    getOrders();
  }, [dil]);
  const getOrders = () => {
    axiosInstance
      .get("/api/grocery_orders?lang=" + dil + "&user_id=" + 1 + "&order=DESC")
      .then((data) => {
        console.log(data.data.body);
        setOrders(data.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const returnPrice = (orders) => {
    let sum = 0;
    console.log(orders);
    orders?.order?.map((item) => {
      item?.products?.map((order) => {
        console.log(order);
        !order?.is_discount
          ? (sum = sum + order?.quantity * order.discount_price)
          : (sum = sum + order?.quantity * order.price);
      });
    });

    return sum;
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
            ? tm.Sargytlarym
            : dil === "RU"
            ? ru.Sargytlarym
            : en.Sargytlarym}
        </p>
      </div>
      <div className="w-full my-4 flex justify-between  items-center">
        <div className="flex justify-start">
          <p className="text-[28px] font-bold text-neutral-900 mr-2">
            {dil === "TM"
              ? tm.Sargytlarym
              : dil === "RU"
              ? ru.Sargytlarym
              : en.Sargytlarym}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="min-w-[246px] w-[246px] h-fit">
          <Sidebar />
        </div>
        <div className="w-full px-6">
          <div className="w-full mb-4 ">
            <h1 className="w-full mb-1 text-[20px] font-semi text-neutral-900 text-left">
              {month[5]}
            </h1>
            <div className="w-full flex flex-wrap justify-between">
              {orders?.map((item) => {
                return (
                  <div
                    onClick={() =>
                      history.push({
                        pathname: "/mrt/profile/orders/" + item.id,
                      })
                    }
                    className="w-[48%] mb-4 h-[98px] flex bg-neutral-200 rounded-[8px] p-2 items-stretch"
                  >
                    <div className="w-[83px] flex justify-between flex-wrap mr-4 ">
                      {item?.order?.map((pro) => {
                        return (
                          <div className="bg-white h-[40px] w-[40px] rounded-tl-[4px] mb-[2px]">
                            <img
                              className=" h-[40px] rounded-tl-[4px] object-contain "
                              src={BASE_URL_IMG + pro?.img}
                              alt=""
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className="w-fit ">
                      <div className="w-full flex mb-8">
                        <img
                          src={
                            (item?.status === 1 && timer1) ||
                            (item?.status === 2 && timer2) ||
                            (item?.status === 3 && timer3) ||
                            (item?.status === 4 && timer4)
                          }
                          className="mr-2"
                          alt=""
                        />
                        <p className="text-[16px] text-neutral-900 font-semi ">
                          {item?.status === 1 &&
                            (dil === "TM"
                              ? tm.Garaşylyar
                              : dil === "RU"
                              ? ru.Garaşylyar
                              : en.Garaşylyar)}
                          {item?.status === 2 &&
                            (dil === "TM"
                              ? tm.Taýýarlanylýar
                              : dil === "RU"
                              ? ru.Taýýarlanylýar
                              : en.Taýýarlanylýar)}
                          {item?.status === 3 &&
                            (dil === "TM"
                              ? tm.Gowshuryldy
                              : dil === "RU"
                              ? ru.Gowshuryldy
                              : en.Gowshuryldy)}
                          {item?.status === 4 &&
                            (dil === "TM"
                              ? tm.Yatyryldy
                              : dil === "RU"
                              ? ru.Yatyryldy
                              : en.Yatyryldy)}
                        </p>
                      </div>
                      <div className="w-fit flex">
                        <p className="mr-6 ">
                          {/* {returnPrice(item)} */}
                          {(
                            item?.price +
                            item?.delivery_price +
                            item?.service_price -
                            item.discount_price
                          ).toFixed(2)}
                          TMT
                        </p>
                        <ul>
                          <li className="list-disc">
                            {item?.ordered_time?.slice(0, 10)}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
