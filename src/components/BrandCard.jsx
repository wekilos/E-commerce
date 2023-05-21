import React, { useContext } from "react";
import brand from "../images/brand.png";
import { useHistory } from "react-router-dom";

import en from "../lang/en/home.json";
import tm from "../lang/tm/home.json";
import ru from "../lang/ru/home.json";
import { Context } from "../context/context";

function BrandCard(props) {
  const history = useHistory();
  const { dil } = useContext(Context);

  return (
    <div
      onClick={() => history.push({ pathname: "/mrt/brend/1" })}
      className="border cursor-pointer border-[#E9EBED] w-[196px] h-[196px] rounded-[8px]"
    >
      <div className="flex w-full py-[12px] px-[15px] ">
        <img
          className="w-full object-contain border-b-[1px] border-b-neutral-300"
          src={props.img ? props.img : brand}
          alt="brand"
        />
      </div>
      <p className="w-full text-center font-medium text-[16px]">
        {props.text ? props.text : "Nescafe"}
      </p>
    </div>
  );
}

export default BrandCard;
