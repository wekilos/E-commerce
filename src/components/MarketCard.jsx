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
import { BASE_URL, BASE_URL_IMG, axiosInstance } from "../utils/axiosIntance";

function MarketCard(props) {
  const history = useHistory();
  const [is_like, setIs_like] = useState(
    props.is_liked ? props.is_liked : false
  );
  const { dil } = useContext(Context);

  const addToFav = () => {
    axiosInstance
      .post("/api/grocery_favourite_market", {
        user_id: 1,
        market_id: props.data.id,
      })
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="border flex justify-center items-start min-w-[324px] w-[324px] border-[#E9EBED] relative  h-[160px] rounded-[12px]">
      {!is_like ? (
        <div
          onClick={() => {
            setIs_like(!is_like);
            addToFav();
          }}
          className="absolute cursor-pointer top-[10px] p-2 right-[10px] w-[42px] h-[42px] rounded-[100%] bg-white"
        >
          {/* <FavoriteBorder className=" text-neutral-300" /> */}
          <img src={heart} alt="" />
        </div>
      ) : (
        <div
          onClick={() => {
            setIs_like(!is_like);
            addToFav();
          }}
          className="absolute cursor-pointer top-[10px] p-2 right-[10px] w-[42px] h-[42px] rounded-[100%] bg-white"
        >
          {/* <Favorite className=" text-neutral-300" /> */}
          <img src={heartLiked} alt="" />
        </div>
      )}
      <img
        onClick={() =>
          history.push({ pathname: "/mrt/market/" + props.data.id })
        }
        className=" w-full object-cover h-[160px] rounded-[12px]  "
        src={BASE_URL_IMG + props.img}
        // src={"http://119.235.118.211:8181/itda/surat.jpg"}
        alt="brand"
      />
    </div>
  );
}

export default MarketCard;
