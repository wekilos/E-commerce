import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { West, ArrowForwardIos, FavoriteBorder } from "@mui/icons-material";
import CategoryCard from "../home/categoryCard";
import { Context } from "../../context/context";
import tm from "../../lang/tm/home.json";
import en from "../../lang/en/home.json";
import ru from "../../lang/ru/home.json";
import { axiosInstance } from "../../utils/axiosIntance";

const Categories = () => {
  const history = useHistory();
  const { dil } = useContext(Context);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, [dil]);

  const getCategories = () => {
    axiosInstance
      .get("/api/grocery_categories", {
        params: {
          lang: dil,
        },
      })
      .then((data) => {
        console.log(data.data);
        setCategories(data.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full inline-flex justify-between pb-10 select-none">
      <div className="w-full">
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
          <ArrowForwardIos className="!text-[16px] mt-1 font-regular text-black-secondary mr-2" />
          <p className="text-[16px] font-regular text-black-secondary mr-2">
            {dil === "TM"
              ? tm.Görnüşler
              : dil === "RU"
              ? ru.Görnüşler
              : en.Görnüşler}
          </p>
        </div>

        <div className="w-full my-6 flex justify-between  items-center">
          <div className="flex justify-start">
            <p className="text-[32px] font-semi text-neutral-900 mr-2">
              {dil === "TM"
                ? tm.Görnüşler
                : dil === "RU"
                ? ru.Görnüşler
                : en.Görnüşler}
            </p>
          </div>
        </div>

        <div className="w-full grid place-items-center gap-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 md2:grid-cols-4 lg:grid-cols-5  xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 6xl:grid-cols-9">
          {categories?.map((item, i) => {
            return (
              <div key={"cats" + i} className="pr-5">
                <CategoryCard data={item} title={item.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
