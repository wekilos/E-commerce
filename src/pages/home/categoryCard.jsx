import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Context } from "../../context/context";
import tm from "../../lang/tm/home.json";
import en from "../../lang/en/home.json";
import ru from "../../lang/ru/home.json";
import { BASE_URL_IMG } from "../../utils/axiosIntance";

const CategoryCard = (props) => {
  const history = useHistory();
  const { dil } = useContext(Context);
  return (
    <div
      onClick={() =>
        history.push({
          pathname: "/mrt/kategory/" + props.data.id,
        })
      }
      className="  hover:bg-green-200  mr-2 text-[18px] max-w-[300px] w-[200px] h-[120px] bg-[#F4F4F6] rounded-[24px]"
    >
      <div className="absolute z-10 max-w-[300px] w-[200px]   h-[120px] bg-black-100  rounded-[24px]"></div>
      <img
        className="absolute max-w-[300px] w-[200px] h-[120px] z-0  rounded-[24px]"
        src={BASE_URL_IMG + props?.data?.img}
        alt="category_surat"
      />

      <div className="absolute p-[20px] !z-20 max-w-[300px] w-[200px] text-white font-semi  text-[18px]    ">
        {props.title}
      </div>
    </div>
  );
};

export default CategoryCard;
