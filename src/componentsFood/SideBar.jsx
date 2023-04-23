import React, { useState } from "react";
import box from "../images/box.svg";
import boxgreen from "../images/boxgreen.svg";
import location from "../images/location.svg";
import locationgreen from "../images/locationgreen.svg";
import heart from "../images/heart.svg";
import heartgreen from "../images/heartgreen.svg";
import profileCircle from "../images/profile-circle.svg";
import profileCirclegreen from "../images/profile-circlegreen.svg";
import logoutimg from "../images/logout.svg";
import trash from "../images/trash.svg";
import { useHistory, useLocation } from "react-router-dom";
import { Modal } from "antd";
const Sidebar = (props) => {
    const history = useHistory();
    const path = useLocation();
    const [open, setOpen] = useState(false);
    const [deleteAc, setDeleteAc] = useState(false);
    return (
        <div className="w-full  ">
            <Modal
                className="font-roboto rounded-[32px] p-8"
                width={500}
                open={open}
                onCancel={() => setOpen(false)}
                footer={false}
            >
                <h1 className="text-[28px] mb-4 font-bold text-neutral-900 text-center ">
                    Siz ulgamdan çykmak isleýärsiňizmi?
                </h1>
                <button
                    onClick={() => history.push({ pathname: "/first" })}
                    className="h-[50px] mb-4 w-full bg-red rounded-[8px] text-white text-[16px] font-semi"
                >
                    Ulgamdan çykmak
                </button>
                <button
                    onClick={() => setOpen(false)}
                    className="h-[50px] w-full bg-green rounded-[8px] text-white text-[16px] font-semi"
                >
                    Yza gaýt
                </button>
            </Modal>
            <Modal
                className="font-roboto rounded-[32px] p-8"
                width={640}
                open={deleteAc}
                onCancel={() => setDeleteAc(false)}
                footer={false}
            >
                <h1 className="text-[28px] mb-4 font-bold text-neutral-900 text-left ">
                    Hasaby öçürmek
                </h1>
                <p className="text-[16px] mb-4 font-regular text-neutral-800 text-left ">
                    Hasabyňyzy öçürmek üçin aşakdaky öýjüge{" "}
                    <b className="!font-bold !text-red">“Öçürmek”</b>
                    diýip ýazyň we tassyklaň
                </p>
                <input
                    placeholder="Şu ýere ýazyň"
                    type="text"
                    className="h-[50px] mb-4 w-full bg-neutral-200 outline-none p-4 rounded-[8px] text-neutral-600 text-[16px] font-regular"
                />
                <div className="w-full flex justify-between">
                    <button
                        onClick={() => setDeleteAc(false)}
                        className="h-[50px] w-[49%] bg-green-100 rounded-[8px] text-green text-[16px] font-semi"
                    >
                        Yza gaýt
                    </button>
                    <button className="h-[50px] mb-4 w-[49%] bg-red rounded-[8px] text-white text-[16px] font-semi">
                        Hasaby öçürmek
                    </button>
                </div>
            </Modal>
            <div className="w-full rounded-[8px] py-2 px-4 border-[1px] border-neutral-300 shadow-sm">
                <div
                    onClick={() =>
                        history.push({ pathname: "/rtn/profile/orders" })
                    }
                    className="w-full cursor-pointer flex py-3 border-b-[1px] border-b-neutral-300"
                >
                    <img
                        className="mr-2 "
                        src={
                            path.pathname.match("/rtn/profile/orders")
                                ? boxgreen
                                : box
                        }
                        alt="box"
                    />
                    <p
                        className={
                            path.pathname.match("/rtn/profile/orders")
                                ? " text-green font-semi text-[18px]"
                                : "text-[18px] text-neutral-900 font-semi "
                        }
                    >
                        Sargytlarym
                    </p>
                </div>
                <div
                    onClick={() =>
                        history.push({ pathname: "/rtn/profile/address" })
                    }
                    className="w-full cursor-pointer flex py-3 border-b-[1px] border-b-neutral-300"
                >
                    <img
                        className="mr-2"
                        src={
                            path.pathname.match("/rtn/profile/address")
                                ? locationgreen
                                : location
                        }
                        alt="box"
                    />
                    <p
                        className={
                            path.pathname.match("/rtn/profile/address")
                                ? " text-green font-semi text-[18px]"
                                : "text-[18px] text-neutral-900 font-semi "
                        }
                    >
                        Adreslerim
                    </p>
                </div>
                <div
                    onClick={() =>
                        history.push({ pathname: "/rtn/profile/favorites" })
                    }
                    className="w-full cursor-pointer flex py-3 border-b-[1px] border-b-neutral-300"
                >
                    <img
                        className="mr-2"
                        src={
                            path.pathname.match("/rtn/profile/favorites")
                                ? heartgreen
                                : heart
                        }
                        alt="box"
                    />
                    <p
                        className={
                            path.pathname.match("/rtn/profile/favorites")
                                ? " text-green font-semi text-[18px]"
                                : "text-[18px] text-neutral-900 font-semi "
                        }
                    >
                        Halanlarym
                    </p>
                </div>
                <div
                    onClick={() =>
                        history.push({ pathname: "/rtn/profile/info" })
                    }
                    className="w-full cursor-pointer flex py-3  "
                >
                    <img
                        className="mr-2"
                        src={
                            path.pathname.match("/rtn/profile/info")
                                ? profileCirclegreen
                                : profileCircle
                        }
                        alt="box"
                    />
                    <p
                        className={
                            path.pathname.match("/rtn/profile/info")
                                ? " text-green font-semi text-[18px]"
                                : "text-[18px] text-neutral-900 font-semi "
                        }
                    >
                        Hasabym
                    </p>
                </div>
            </div>
            <div className="w-full rounded-[8px] py-2 px-4 mt-4 border-[1px] border-neutral-300 shadow-sm">
                <div
                    onClick={() => setOpen(true)}
                    className="w-full cursor-pointer flex py-3 border-b-[1px] border-b-neutral-300"
                >
                    <img
                        className="mr-2 !text-green"
                        src={logoutimg}
                        alt="box"
                    />
                    <p className="text-[18px] text-neutral-900 font-semi">
                        Ulgamdan çykmak
                    </p>
                </div>
                <div
                    onClick={() => setDeleteAc(true)}
                    className="w-full cursor-pointer flex py-3  "
                >
                    <img className="mr-2" src={trash} alt="box" />
                    <p className="text-[18px] text-red font-semi">
                        Hasaby öçürmek
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
