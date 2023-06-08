import React, { useContext, useState } from "react";
import cardImg from "../images/card.png";
import trash from "../images/trash.svg";
import heart from "../images/heartBlack.svg";
import heartLiked from "../images/heartLiked.svg";
import { FavoriteBorder, DeleteForever } from "@mui/icons-material";
import en from "../lang/en/home.json";
import tm from "../lang/tm/home.json";
import ru from "../lang/ru/home.json";
import { Context } from "../context/context";
import { BASE_URL_IMG } from "../utils/axiosIntance";

const OrderCard = (props) => {
  const [count, setCount] = useState(1);
  const [liked, setLiked] = useState(false);
  const { dil } = useContext(Context);
  return (
    <div className="w-full flex justify-between items-center border-b-[1px] border-b-neutral-300 py-4">
      <div className="flex items-center">
        <img
          className="h-[90px] object-contain rounded-[8px] shadow-sm mr-4"
          src={BASE_URL_IMG + props?.data?.img}
          alt="cardImg"
        />
        <div className="max-w-[300px]">
          <p className="text-[18px] min-w-[300px]  text-neutral-900 font-regular">
            {props.text
              ? props.text
              : "Батончик Ülker Metro шоколадный с карамелью и нугой 300 г"}
          </p>
          {/* <p className="text-[16px] text-neutral-900 font-semi">{props?.data}</p> */}
        </div>
      </div>
      <div className="max-w-[162px]">
        <h1 className="w-full text-left text-[16px] font-bold text-neutral-900">
          {props?.data?.price * props?.data?.quantity} TMT
        </h1>
        {props?.data?.is_discount && (
          <div className="flex items-center">
            <p className="mr-2 text-white bg-red h-[18px] px-[3px] text-[12px] font-semi rounded-[8px]">
              -{100 - (props?.data?.discount_price * 100) / props?.data?.price}%
            </p>
            <p className="mr-2 text-passive  text-[14px] font-semi line-through decoration-red">
              {props?.data?.discount_price * props?.data?.quantity} TMT
            </p>
          </div>
        )}
      </div>
      <div className="select-none w-[162px]   flex justify-evenly   py-[10px] rounded-[16px] text-[18px] h-[50px]">
        <p className="text-[16px] font-semi text-neutral-900">
          {props?.data?.quantity} sany
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
