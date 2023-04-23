import { Modal } from "antd";
import React, { useState } from "react";
import {
    DoNotDisturbOnOutlined,
    RefreshOutlined,
    StarBorderOutlined,
    WhereToVoteOutlined,
    AddOutlined,
    ArrowForwardIosOutlined,
} from "@mui/icons-material";
import carta from "../images/carta.svg";

const AddressCardCreate = (props) => {
    const [add, setAdd] = useState(false);
    return (
        <div className="w-[49%]">
            <Modal
                className="  p-8"
                width={650}
                open={add}
                onCancel={() => setAdd(false)}
                footer={false}
            >
                <h1 className="text-[28px] mb-4 font-bold text-neutral-900 text-left ">
                    Adres girizmek
                </h1>

                <div className="w-full flex justify-between flex-wrap">
                    <input
                        className="w-[85%] text-[16px] mb-4 p-4 outline-none font-regular bg-neutral-200 rounded-[8px] text-neutral-600 text-left"
                        placeholder="Adresňiziň ady, Mysal öý"
                        type="text"
                    />
                    <div className="w-[55px] text-[16px] mb-4 p-4 outline-none font-regular bg-neutral-200 rounded-[8px] text-neutral-600 text-left">
                        <img src={carta} alt="carta" />
                    </div>
                    <input
                        className="w-full text-[16px] mb-4 p-4 outline-none font-regular bg-neutral-200 rounded-[8px] text-neutral-600 text-left"
                        placeholder="Adres"
                        type="text"
                    />
                </div>
                <button
                    onClick={() => setAdd(false)}
                    className="h-[50px] w-full bg-green rounded-[9px] text-white text-[16px] font-semi"
                >
                    Ugratmak
                </button>
            </Modal>
            <div
                onClick={() => setAdd(true)}
                className="w-full mb-4 cursor-pointer bg-green-100 rounded-[8px] h-[65px] flex items-center justify-center text-green text-[16px] font-bold"
            >
                <AddOutlined className="mr-2 rounded-[8px] bg-green-200 text-[14px]" />
                Täze adres goşmak
            </div>
        </div>
    );
};

export default AddressCardCreate;
