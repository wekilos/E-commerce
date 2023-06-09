import React, { useEffect, useState, useRef, useContext } from "react";
import card from "../images/card.png";
import brend from "../images/brand.png";
import {
  ArrowBackIos,
  ArrowForwardIos,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";

import en from "../lang/en/home.json";
import tm from "../lang/tm/home.json";
import ru from "../lang/ru/home.json";
import { Context } from "../context/context";
import { useParams } from "react-router-dom";
import { BASE_URL, BASE_URL_IMG, axiosInstance } from "../utils/axiosIntance";

function ProductCard(props) {
  const history = useHistory();
  const [animation, setAnimation] = useState(false);
  const [count, setCount] = useState(1);

  const [product, setProduct] = useState({});
  const { id } = useParams();

  const { dil, decPro, addPro } = useContext(Context);

  useEffect(() => {
    const time = setTimeout(() => {
      setAnimation(false);
    }, 2000);
    return () => clearTimeout(time);
  }, [animation]);

  const slider = useRef(null);
  const [current, setCurrent] = useState({ currentSlide: 0 });
  const testSettings = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    outline: "0",
  };
  const settings = {
    className: "center",
    // centerMode: true,
    autoplay: true,
    swipeToSlide: true,
    // autoplaySpeed: 2000,
    pauseOnHover: true,
    Infinity: true,
    dots: false,
    infinite: true,
    speed: 500,
    initialSlide: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    // beforeChange: (prev, next) => {
    //     setCurrent({ currentSlide: next });
    // },
    // afterChange: (index) => setCurrent({ currentSlide: index }),
    // appendDots: (dots) => {
    //     return (
    //         <div className="mt-2">
    //             <ul>
    //                 {dots.map((item, index) => {
    //                     return (
    //                         <li
    //                             className={
    //                                 current.currentSlide == index
    //                                     ? "bg-green mx-1 w-2 h-2 !text-green rounded-[100%]"
    //                                     : "bg-neutral mx-1 rounded-[100%]"
    //                             }
    //                             key={index}
    //                         >
    //                             <img
    //                                 className="h-[72px] object-contain mr-4"
    //                                 src={card}
    //                                 alt="card"
    //                             />
    //                         </li>
    //                     );
    //                 })}
    //             </ul>
    //         </div>
    //     );
    // },
    // customPaging: (index) => {
    //     return (
    //         <button
    //             style={index === current.currentSlide ? testSettings : null}
    //             className="bg-green"
    //         >
    //             {index + 1}
    //         </button>
    //     );
    // },
  };

  useEffect(() => {
    getProduct();
  }, [id, dil]);

  const getProduct = () => {
    axiosInstance
      .get("/api/grocery_product", {
        params: {
          lang: dil,
          product_id: id,
        },
      })
      .then((data) => {
        console.log(data.data.body[0]);
        setProduct(data.data.body.length > 0 ? data.data.body[0] : {});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addToFav = () => {
    axiosInstance
      .post("/api/grocery_favourite_product", {
        user_id: 1,
        product_id: id,
      })
      .then((data) => {
        console.log(data.data);
        getProduct();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full flex justify-between rounded-[24px] border-[1px] border-neutral-300 shadow-sm p-6">
      <div className="w-1/3 border-r-[1px] border-r-neutral-300 p-8">
        <div className="w-full h-[320px] relative rounded-[20px] my-[25px] mb-[50px]">
          <Slider ref={slider} {...settings}>
            {product?.img?.map((item, i) => {
              return (
                <div key={item.img + i} className="w-full px-2   outline-none">
                  <img
                    className=" w-full h-[320px]  object-cover rounded-[20px]"
                    src={BASE_URL_IMG + item.img}
                    alt="slide"
                  />
                </div>
              );
            })}
          </Slider>
          <div>
            <div
              onClick={() => slider.current.slickPrev(1)}
              className="w-[32px] absolute -left-[10px] cursor-pointer pl-2 top-[150px] shadow-sm text-center leading-[30px] rounded-[8px] h-[32px] bg-neutral-200"
            >
              <ArrowBackIos className="text-neutral-400  font-bold" />
            </div>
            <div
              onClick={() => slider.current.slickNext(1)}
              className="w-[32px] absolute -right-[10px] cursor-pointer top-[150px] shadow-sm text-center leading-[30px] rounded-[8px] h-[32px] bg-neutral-200"
            >
              <ArrowForwardIos className="text-neutral-400 font-bold" />
            </div>
          </div>
          <div className="w-full mt-[10px] flex justify-center">
            {product?.img?.map((item) => {
              return (
                <img
                  key={"mini" + item.img}
                  className="h-[72px] cursor-pointer object-contain mr-3"
                  src={BASE_URL_IMG + item?.img}
                  alt="card"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-2/3 px-8 flex flex-wrap justify-between flex-row">
        <div className="w-full">
          {product?.is_discount && (
            <div className="h-[41px] mb-4 w-fit rounded-[32px] px-4 py-2 bg-red text-white font-semi text[20px]">
              -{product?.discount_percentage}%
              {dil === "TM"
                ? tm.Arzanladyş
                : dil === "RU"
                ? ru.Arzanladyş
                : en.Arzanladyş}
            </div>
          )}
          <div className="text-[24px] font-medium text-black-secondary ">
            {product?.name}
          </div>
        </div>
        <div className="w-full mt-4">
          <h1 className="text-[16px] mb-3 font-semi text-neutral-900">
            {dil === "TM"
              ? tm["Esasy maglumatlar"]
              : dil === "RU"
              ? ru["Esasy maglumatlar"]
              : en["Esasy maglumatlar"]}
            :
          </h1>
          <div className="w-full flex justify-between flex-wrap">
            <div className="w-[48%] mb-4 bg-neutral-200 rounded-[8px] p-[15px] flex items-center justify-between">
              <p className="text-[16px] font-medium text-neutral-800">
                {dil === "TM"
                  ? tm["Önümiň kody"]
                  : dil === "RU"
                  ? ru["Önümiň kody"]
                  : en["Önümiň kody"]}
                :
              </p>
              <p className="text-[16px] font-medium text-neutral-900">
                {product?.code}
              </p>
            </div>
            <div className="w-[48%] mb-4 bg-neutral-200 rounded-[8px] p-[15px] flex items-center justify-between">
              <p className="text-[16px] font-medium text-neutral-800">
                {dil === "TM" ? tm.Brend : dil === "RU" ? ru.Brend : en.Brend}:
              </p>
              <div
                onClick={() =>
                  history.push({
                    pathname: "/mrt/brend/" + product?.brands?.id,
                  })
                }
                className="flex cursor-pointer items-center"
              >
                <p className="text-[16px] mr-2 font-medium text-green">
                  {product?.brands?.name}
                </p>
                <p className="!text-[12px] h-[20px] w-[20px] pl-1 flex items-center rounded-[4px] text-green border-[1px] border-green">
                  <ArrowForwardIos className="!text-[12px]" />
                </p>
              </div>
            </div>
            <div className="w-[48%] mb-4 bg-neutral-200 rounded-[8px] p-[15px] flex items-center justify-between">
              <p className="text-[16px] font-medium text-neutral-800">
                {dil === "TM"
                  ? tm.Kategoriýa
                  : dil === "RU"
                  ? ru.Kategoriýa
                  : en.Kategoriýa}
                :
              </p>
              <div
                onClick={() =>
                  history.push({
                    pathname: "/mrt/kategory/" + product?.categories?.id,
                  })
                }
                className="flex cursor-pointer items-center"
              >
                <p className="text-[16px] mr-2 font-medium text-green">
                  {product?.categories?.name}
                </p>
                <p className="!text-[12px] h-[20px] w-[20px] pl-1 flex items-center rounded-[4px] text-green border-[1px] border-green">
                  <ArrowForwardIos className="!text-[12px]" />
                </p>
              </div>
            </div>
            <div className="w-[48%] mb-4 bg-neutral-200 rounded-[8px] p-[15px] flex items-center justify-between">
              <p className="text-[16px] font-medium text-neutral-800">
                {dil === "TM" ? tm.Dükan : dil === "RU" ? ru.Dükan : en.Dükan}:
              </p>
              <div
                onClick={() =>
                  history.push({
                    pathname: "/mrt/market/" + product?.market?.id,
                  })
                }
                className="flex cursor-pointer items-center"
              >
                <p className="text-[16px] mr-2 font-medium text-green">
                  {product?.market?.name}
                </p>
                <p className="!text-[12px] h-[20px] w-[20px] pl-1 flex items-center rounded-[4px] text-green border-[1px] border-green">
                  <ArrowForwardIos className="!text-[12px]" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="w-full text-left text-[24px] font-bold text-neutral-900">
            {!product?.is_discount
              ? product?.discount_price?.toFixed(2)
              : product?.price?.toFixed(2)}
            TMT
          </h1>
          {!product?.is_discount && (
            <div className="flex items-center">
              <p className="mr-2 text-white bg-red h-[22px] px-[3px] text-[14px] font-semi rounded-[8px]">
                -{product?.discount_percentage?.toFixed(2)}%
              </p>
              <p className="mr-2 text-passive  text-[14px] font-semi line-through decoration-red">
                {product?.price?.toFixed(2)} TMT
              </p>
            </div>
          )}
        </div>

        <div className="w-full mt-4 flex justify-between">
          <div className="flex items-center w-1/2">
            {!animation && (
              <div
                onClick={() => setAnimation(true)}
                className="custom-button w-[200px] select-none bg-green text-white rounded-[16px] text-[18px] h-[50px]"
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
                className="select-none w-[200px] bg-green-100 flex justify-evenly text-green py-[10px] rounded-[16px] text-[18px] h-[50px]"
              >
                <button
                  onClick={() => {
                    decPro(product);
                    count > 1 && setCount(count - 1);
                    setAnimation(true);
                  }}
                  className="text-green bg-green-200 h-[30px] w-[30px] leading-[9px] rounded-[100%] p-2"
                >
                  -
                </button>
                <p className="text-[16px] text-green">{count}</p>
                <button
                  onClick={() => {
                    addPro(product);
                    setCount(count + 1);
                    setAnimation(true);
                  }}
                  className="text-green bg-green-200 h-[30px] w-[30px] leading-[9px] rounded-[100%] p-2"
                >
                  +
                </button>
              </div>
            )}
            {product?.is_liked ? (
              <div
                onClick={() => addToFav()}
                className="h-[50px] cursor-pointer w-[50px] flex items-center justify-center rounded-[16px] bg-neutral-300 ml-4"
              >
                <FavoriteBorder className="text-neutral-900" />
              </div>
            ) : (
              <div
                onClick={() => addToFav()}
                className="h-[50px] cursor-pointer w-[50px] flex items-center justify-center rounded-[16px] bg-neutral-300 ml-4"
              >
                <Favorite className=" text-red" />
              </div>
            )}
          </div>
          {/* <div className="flex items-center h-[50px] rounded-[16px] bg-neutral-200 p-4">
                        <img
                            className="h-[35px] object-contain mr-2"
                            src={brend}
                            alt=""
                        />
                        <div className="w-full text-left">
                            <h1 className="text-[14px] w-full text-left font-semi text-neutral-900">
                                Ter önümler
                            </h1>
                            <p className="text-[14px] w-full text-left font-medium text-neutral-700">
                                Brend
                            </p>
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
