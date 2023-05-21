import React, { useContext, useState } from "react";
import marketimg from "../images/Store.png";
import heart from "../images/heart.svg";
import heartLiked from "../images/heartLiked.svg";

import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useHistory } from "react-router-dom";

import en from "../lang/en/home.json";
import tm from "../lang/tm/home.json";
import ru from "../lang/ru/home.json";
import { Context } from "../context/context";

function MarketCard(props) {
  const history = useHistory();
  const [is_like, setIs_like] = useState(true);
  const { dil } = useContext(Context);
  return (
    <div className="border flex justify-center items-start min-w-[324px] w-[324px] border-[#E9EBED] relative  h-[160px] rounded-[12px]">
      {is_like ? (
        <div
          onClick={() => setIs_like(!is_like)}
          className="absolute cursor-pointer top-[10px] p-2 right-[10px] w-[42px] h-[42px] rounded-[100%] bg-white"
        >
          {/* <FavoriteBorder className=" text-neutral-300" /> */}
          <img src={heart} alt="" />
        </div>
      ) : (
        <div
          onClick={() => setIs_like(!is_like)}
          className="absolute cursor-pointer top-[10px] p-2 right-[10px] w-[42px] h-[42px] rounded-[100%] bg-white"
        >
          {/* <Favorite className=" text-neutral-300" /> */}
          <img src={heartLiked} alt="" />
        </div>
      )}
      <img
        onClick={() => history.push({ pathname: "/mrt/market/1" })}
        className=" w-full object-contain   "
        src={props.img ? props.img : marketimg}
        alt="brand"
      />
    </div>
  );
}

export default MarketCard;
