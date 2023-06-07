import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Context } from "../../context/context";
import tm from "../../lang/tm/home.json";
import en from "../../lang/en/home.json";
import ru from "../../lang/ru/home.json";

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
      className="p-[20px] hover:bg-green-200  mr-2 text-[18px] min-w-[200px] h-[120px] bg-[#F4F4F6] rounded-[24px]"
    >
      {props.title}
    </div>
  );
};

export default CategoryCard;
