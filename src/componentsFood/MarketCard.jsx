import React, { useEffect, useState } from "react";
import resturan from "../images/resturan.svg";
import {
    Favorite,
    FavoriteBorder,
    AccessTimeOutlined,
    LoyaltyOutlined,
    StarOutlined,
} from "@mui/icons-material";
import { useHistory } from "react-router-dom";

function MarketCard(props) {
    const history = useHistory();
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
        <div
            className={
                props.width
                    ? `!min-w-[490px] w-[490px] rounded-[16px] relative`
                    : "!min-w-[411px] w-[440px] rounded-[16px] relative"
            }
        >
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
            <div className="w-fit z-20 h-fit text-[16px] text-white font-semi py-2 px-[15px] absolute cursor-pointer top-4 left-4 rounded-[24px] bg-neutral-100-50">
                <AccessTimeOutlined /> 10:30-22:30
            </div>
            {props.is_discount && (
                <div
                    className={
                        props.width
                            ? "w-fit z-20 h-fit text-[16px] text-white font-semi py-2 px-[15px] absolute cursor-pointer top-[220px] left-4 rounded-[24px] bg-red-700"
                            : "w-fit z-20 h-fit text-[16px] text-white font-semi py-2 px-[15px] absolute cursor-pointer top-[180px] left-4 rounded-[24px] bg-red-700"
                    }
                >
                    <LoyaltyOutlined /> Arzanladyş
                </div>
            )}
            {props.close && (
                <div
                    className={
                        props.width
                            ? "w-full h-[275px] rounded-[16px] z-10 text-[16px] flex flex-wrap items-center justify-center text-white font-semi py-2 px-[15px] absolute cursor-pointer top-0 left-0   bg-black-100"
                            : "w-full h-[231px] rounded-[16px] z-10 text-[16px] flex flex-wrap items-center justify-center text-white font-semi py-2 px-[15px] absolute cursor-pointer top-0 left-0   bg-black-100"
                    }
                >
                    <div className="w-full">
                        <p className="w-full text-center text-[24px] text-white font-semi">
                            Ýapyk
                        </p>
                        <p className="w-full text-center text-[14px] text-neutral-400 font-semi">
                            09:00 -da açylýar
                        </p>
                    </div>
                </div>
            )}
            <img
                onClick={() => history.push({ pathname: "/rtn/market/1" })}
                className={
                    props.width
                        ? "w-full h-[275px] object-cover rounded-[16px] cursor-pointer"
                        : "w-full h-[231px] object-cover rounded-[16px] cursor-pointer"
                }
                src={props.img ? props.img : resturan}
                alt="image"
            />

            <div className="w-full mt-2 flex justify-between items-center">
                <p className=" text-black font-bold text-[20px] ">
                    {props.text ? props.text : "Soltan Restoran"}
                </p>
                <div className="w-fit flex items-center">
                    <StarOutlined className="text-yellow mr-1" />
                    <p className="text-neutral-900 text-[16px] font-semi mr-1">
                        4.8
                    </p>
                    <p className="text-neutral-700 text-[16px] font-semi">
                        (124)
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MarketCard;
