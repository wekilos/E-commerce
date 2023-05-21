import React, { useContext, useEffect, useState } from "react";
import card from "../images/card.png";
import heart from "../images/heart.svg";
import heartLiked from "../images/heartLiked.svg";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useHistory } from "react-router-dom";

import en from "../lang/en/home.json";
import tm from "../lang/tm/home.json";
import ru from "../lang/ru/home.json";
import { Context } from "../context/context";

function ProductCard(props) {
  const history = useHistory();
  const [liked, setLiked] = useState(true);
  const [animation, setAnimation] = useState(false);
  const [count, setCount] = useState(1);
  const { dil } = useContext(Context);

  useEffect(() => {
    const time = setTimeout(() => {
      setAnimation(false);
    }, 2000);
    return () => clearTimeout(time);
  }, [animation]);
  return (
    <div className="w-[236px] min-h-[460px] flex flex-col justify-between flex-wrap relative">
      {liked ? (
        // <FavoriteBorder className="absolute top-4 right-4 text-neutral-300" />
        <img
          onClick={() => setLiked(!liked)}
          className="absolute cursor-pointer top-4 right-4 "
          src={heart}
          alt=""
        />
      ) : (
        // <Favorite className="absolute top-4 right-4 text-red" />
        <img
          onClick={() => setLiked(!liked)}
          className="absolute cursor-pointer top-4 right-4 "
          src={heartLiked}
          alt=""
        />
      )}
      <img
        onClick={() => history.push({ pathname: "/mrt/product/1" })}
        className="h-[236px] object-contain cursor-pointer"
        src={props.img ? props.img : card}
        alt="image"
      />
      <p className="font-semi mt-2 text-[20px] text-neutral-900">13.90 TMT</p>
      <div className="flex gap-[8px] my-[8px]">
        <div className="bg-red px-[3px] py-[3px] rounded-[8px]">
          <p className="text-white m-0 font-semi">-30%</p>
        </div>
        <p className="text-passive font-regular text-[16px] line-through decoration-red">
          11.90 TMT
        </p>
      </div>
      <p
        onClick={() => history.push({ pathname: "/mrt/product/1" })}
        className="line-clamp-2 cursor-pointer text-neutral-900 font-regular text-[18px] h-[52px] leading-6 mt-3"
      >
        {props.text ? props.text : "Üwmeç 3 желания klassyk 250 g"}
      </p>

      <p className="line-clamp-2 text-neutral-900 font-semi mt-2  text-[16px] leading-6 ">
        Ynamdar
      </p>
      {!animation && (
        <div
          onClick={() => setAnimation(true)}
          className="custom-button mt-2  select-none bg-green text-white rounded-[16px] text-[18px] h-[50px]"
        >
          {dil === "TM"
            ? tm["Sebede goş"]
            : dil === "RU"
            ? ru["Sebede goş"]
            : en["Sebede goş"]}
        </div>
      )}
      {animation && (
        <div
          onClick={() => setAnimation(true)}
          className="select-none mt-2  bg-green-100 flex justify-evenly text-green py-[10px] rounded-[16px] text-[18px] h-[50px]"
        >
          <button
            onClick={() => {
              setCount(count - 1);
              setAnimation(true);
            }}
            className="text-green bg-green-200 h-[30px] w-[30px] leading-[9px] rounded-[100%] p-2"
          >
            -
          </button>
          <p className="text-[16px] text-green">{count}</p>
          <button
            onClick={() => {
              setCount(count + 1);
              setAnimation(true);
            }}
            className="text-green bg-green-200 h-[30px] w-[30px] leading-[9px] rounded-[100%] p-2"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
