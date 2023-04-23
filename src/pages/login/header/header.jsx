import React, { useState, useRef, useEffect } from "react";
import logo from "../../../images/firstPageLogo.svg";
import turkmenistan from "../../../images/turkmenistan.svg";
import arrowDown from "../../../images/arrowDown.svg";
import { useHistory } from "react-router-dom";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
const Header = (props) => {
    const history = useHistory();
    const [open, setOpen] = useState(false);
    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpen(false);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <div className="w-[85%] mx-auto h-[116px] flex items-center justify-between">
            <div className="logo-div flex items-center">
                <img
                    className="h-[70px] object-contain mr-2"
                    src={logo}
                    alt=""
                />
                <h1 className="w-fit text-center leading-[27px] text-neutral-900 font-bold text-[22px]">
                    Arkadag şäheriniň <br /> Söwda onlaýn platformasy
                </h1>
            </div>
            <div className="w-fit flex items-center">
                {props.first === true ? (
                    <button
                        onClick={() => history.push({ pathname: "/login" })}
                        className="custom-border font-semi mr-6  w-[180px] h-[50px] flex justify-center items-center gap-[10px] py-[13px] px-[24px] cursor-pointer"
                    >
                        Ulgama girmek
                    </button>
                ) : (
                    <button
                        onClick={() => history.push({ pathname: "/first" })}
                        className="custom-border  font-semi mr-6 w-[180px] h-[50px] flex justify-center items-center gap-[10px] py-[13px] px-[24px] cursor-pointer"
                    >
                        Baş sahypa
                    </button>
                )}
                <div
                    onClick={() => setOpen(!open)}
                    ref={wrapperRef}
                    className="custom-border justify-center relative w-[180px] h-[50px] flex items-center gap-[10px] py-[13px] px-[24px] cursor-pointer"
                >
                    {/* <img
                                className="w-[24px] h-[24px]"
                                src={turkmenistan}
                                alt="Turkmenistan"
                            /> */}
                    <LanguageOutlinedIcon className=" text-[16px] font-semi" />
                    <p className="text-[16px] font-semi m-0">Türkmen</p>

                    <img
                        className="w-[18px] h-[18px]"
                        src={arrowDown}
                        alt="Turkmenistan"
                    />
                    {open && (
                        <div className="absolute font-semi z-50 top-12 left-0 w-[180px] gap-[10px] py-[10px] px-[24px] cursor-pointer custom-border bg-white">
                            {/* <div className="flex items-center py-[10px] px-[14px] border-b-neutral-300 border-b-[1px]">
                              
                                <p className="text-[16px] whitespace-nowrap m-0">
                                    Türkmen dili
                                </p>
                            </div> */}
                            <div className="flex items-center py-[10px] px-[14px] border-b-neutral-300 border-b-[1px]">
                                {/* <img
                                            className="w-[24px] h-[24px] mr-2"
                                            src={russia}
                                            alt="Turkmenistan"
                                        /> */}
                                <p className="text-[16px] whitespace-nowrap m-0">
                                    Русский
                                </p>
                            </div>
                            <div className="flex items-center py-[10px] px-[14px] ">
                                {/* <img
                                            className="w-[24px] h-[24px] mr-2"
                                            src={usa}
                                            alt="Turkmenistan"
                                        /> */}
                                <p className="text-[16px] whitespace-nowrap m-0">
                                    English
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Header;
