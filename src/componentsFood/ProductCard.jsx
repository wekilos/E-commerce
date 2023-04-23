import React, { useEffect, useState } from "react";
import food from "../images/food.svg";
import { Modal } from "antd";
import {
    Favorite,
    FavoriteBorder,
    AccessTimeOutlined,
    LoyaltyOutlined,
    StarOutlined,
} from "@mui/icons-material";
import { useHistory } from "react-router-dom";

function ProductCard(props) {
    const history = useHistory();
    const [openProduct, setOpenProduct] = useState(false);
    const [is_like, setIs_like] = useState(true);
    const [animation, setAnimation] = useState(false);
    const [count, setCount] = useState(1);
    useEffect(() => {
        const time = setTimeout(() => {
            setAnimation(false);
        }, 2000);
        return () => clearTimeout(time);
    }, [animation]);
    return (
        <div className="!min-w-[320px] w-[330px] rounded-[16px] relative">
            <Modal
                className=" p-8 "
                width={438}
                open={openProduct}
                onCancel={() => setOpenProduct(false)}
                footer={false}
            >
                <div className="!min-w-[320px] w-[330px] rounded-[16px] relative">
                    <div className="w-fit z-20 h-fit p-2 absolute cursor-pointer top-4 right-4 rounded-[100%] bg-neutral-100-50">
                        {is_like ? (
                            <FavoriteBorder
                                onClick={() => setIs_like(!is_like)}
                                className=" text-neutral-300"
                            />
                        ) : (
                            <Favorite
                                onClick={() => setIs_like(!is_like)}
                                className=" text-red"
                            />
                        )}
                    </div>

                    {props.is_discount && (
                        <div className="w-fit z-20 h-fit text-[14px] text-white font-semi px-2 py-[4px] absolute cursor-pointer top-[150px] right-0 rounded-[13px] bg-red">
                            -30%
                        </div>
                    )}

                    <img
                        onClick={() => setOpenProduct(true)}
                        className="w-full h-[179px] object-cover rounded-[16px] cursor-pointer"
                        src={props.img ? props.img : food}
                        alt="food"
                    />

                    <div className="w-full mt-2 flex flex-wrap justify-between items-center">
                        <p className="w-full text-left text-neutral-900 font-semi text-[16px] ">
                            {props.text ? props.text : "Куриный лаваш"}
                        </p>
                        {props.is_discount ? (
                            <div className="w-fit flex items-center mt-2 mb-2">
                                <p className="text-red text-[18px] font-semi mr-2">
                                    24,00 TMT
                                </p>
                                <p className="text-neutral-600 line-through text-[18px] font-semi">
                                    35,00 TMT
                                </p>
                            </div>
                        ) : (
                            <div className="w-fit flex items-center mt-2 mb-2">
                                <p className="text-neutral-900  text-[18px] font-semi">
                                    35,00 TMT
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                {!animation && (
                    <div
                        onClick={() => setAnimation(true)}
                        className="custom-button mt-2 select-none bg-green text-white rounded-[16px] text-[18px] h-[50px]"
                    >
                        Sebede goş
                    </div>
                )}
                {animation && (
                    <div
                        onClick={() => setAnimation(true)}
                        className="select-none mt-2 bg-green-100 flex justify-evenly text-green py-[10px] rounded-[16px] text-[18px] h-[50px]"
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
            </Modal>
            <div className="w-fit z-20 h-fit p-2 absolute cursor-pointer top-4 right-4 rounded-[100%] bg-neutral-100-50">
                {is_like ? (
                    <FavoriteBorder
                        onClick={() => setIs_like(!is_like)}
                        className=" text-neutral-300"
                    />
                ) : (
                    <Favorite
                        onClick={() => setIs_like(!is_like)}
                        className=" text-red"
                    />
                )}
            </div>

            {props.is_discount && (
                <div className="w-fit z-20 h-fit text-[14px] text-white font-semi px-2 py-[4px] absolute cursor-pointer top-[150px] right-0 rounded-[13px] bg-red">
                    -30%
                </div>
            )}

            <img
                onClick={() => setOpenProduct(true)}
                className="w-full h-[179px] object-cover rounded-[16px] cursor-pointer"
                src={props.img ? props.img : food}
                alt="food"
            />

            <div className="w-full mt-2 flex flex-wrap justify-between items-center">
                <p className="w-full text-left text-neutral-900 font-semi text-[16px] ">
                    {props.text ? props.text : "Куриный лаваш"}
                </p>
                {props.is_discount ? (
                    <div className="w-fit flex items-center mt-2 mb-2">
                        <p className="text-red text-[18px] font-semi mr-2">
                            24,00 TMT
                        </p>
                        <p className="text-neutral-600 line-through text-[18px] font-semi">
                            35,00 TMT
                        </p>
                    </div>
                ) : (
                    <div className="w-fit flex items-center mt-2 mb-2">
                        <p className="text-neutral-900  text-[18px] font-semi">
                            35,00 TMT
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductCard;
