import React from "react";
import { useHistory } from "react-router-dom";
const CategoryCard = (props) => {
    const history = useHistory();
    return (
        <div
            onClick={() =>
                history.push({
                    pathname: "/mrt/kategory/1",
                })
            }
            className="p-[20px] hover:bg-green-200  mr-2 text-[18px] min-w-[200px] h-[120px] bg-[#F4F4F6] rounded-[24px]"
        >
            {props.title}
        </div>
    );
};

export default CategoryCard;
