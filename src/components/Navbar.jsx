import React, { useState, useEffect, useRef, useContext } from "react";
import call from "../images/call.svg";
import clock from "../images/clock.svg";
import turkmenistan from "../images/turkmenistan.svg";
import usa from "../images/united-states.svg";
import russia from "../images/russia.svg";
import user from "../images/user.svg";
import arrowDown from "../images/arrowDown.svg";
import logo from "../images/logo.svg";
import catalog from "../images/catalog.svg";
import search from "../images/search.svg";
import heart from "../images/heart-circle-green.svg";
import home from "../images/home.png";
import shoppingCart from "../images/shopping-cart.svg";
import { East } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import { Drawer, Modal } from "antd";

import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { Context } from "../context/context";
import en from "../lang/en/home.json";
import tm from "../lang/tm/home.json";
import ru from "../lang/ru/home.json";

import menu from "../images/menu.svg";
import mainMenu from "../images/mainMenu.svg";
import orderBox from "../images/orderBox.svg";
import location from "../images/location-tick.svg";
import heartMenu from "../images/heartMenu.svg";
import global from "../images/global.svg";
import logout from "../images/logout.svg";
import { axiosInstance } from "../utils/axiosIntance";
import axios from "axios";

function Navbar(props) {
  const history = useHistory();
  const { dil, ChangeDil } = useContext(Context);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [feedBack, setFeedBack] = useState(false);
  const [kategory, setKategory] = useState(false);
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
  function useOutsideAlerterKategory(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setKategory(false);
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
  const kategoryRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  useOutsideAlerterKategory(kategoryRef);

  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = () => {
    axiosInstance
      .get("/api/f-carousel/all")
      .then((data) => {
        console.log("Category", data);
      })
      .catch((err) => {
        console.log("category", err);
      });
  };

  return (
    <div className="w-[95%] mx-auto mb-10">
      <Modal
        className=" p-8"
        width={650}
        open={feedBack}
        onCancel={() => setFeedBack(false)}
        footer={false}
      >
        <h1 className="text-[28px] mb-4 font-bold text-neutral-900 text-left ">
          {dil === "TM"
            ? tm["Teklip bermek"]
            : dil === "RU"
            ? ru["Teklip bermek"]
            : en["Teklip bermek"]}
        </h1>
        <p className="text-[16px] mb-4 font-regular text-neutral-800 text-left ">
          {dil === "TM"
            ? tm[
                "Platforma barada teklipleriñiz, haýyşlaryñyz ýa-da ýalñyslyk bolsa şu ýerden habar ugradyp bilersiñiz!"
              ]
            : dil === "RU"
            ? ru[
                "Platforma barada teklipleriñiz, haýyşlaryñyz ýa-da ýalñyslyk bolsa şu ýerden habar ugradyp bilersiñiz!"
              ]
            : en[
                "Platforma barada teklipleriñiz, haýyşlaryñyz ýa-da ýalñyslyk bolsa şu ýerden habar ugradyp bilersiñiz!"
              ]}
        </p>

        <div className="w-full flex justify-between flex-wrap">
          <input
            className="w-[49%] text-[16px] mb-4 p-4 outline-none font-regular bg-neutral-200 rounded-[8px] text-neutral-600 text-left"
            placeholder={
              dil === "TM"
                ? tm["Doly adyñyz"]
                : dil === "RU"
                ? ru["Doly adyñyz"]
                : en["Doly adyñyz"]
            }
            type="text"
          />
          <input
            className="w-[49%] text-[16px] mb-4 p-4 outline-none font-regular bg-neutral-200 rounded-[8px] text-neutral-600 text-left"
            placeholder={
              dil === "TM"
                ? tm["E-mail belgiňiz"]
                : dil === "RU"
                ? ru["E-mail belgiňiz"]
                : en["E-mail belgiňiz"]
            }
            type="text"
          />
          <textarea
            className="w-full min-h-[180px] text-[16px] mb-4 p-4 outline-none font-regular bg-neutral-200 rounded-[8px] text-neutral-600 text-left"
            placeholder={
              dil === "TM" ? tm.Hatyñyz : dil === "RU" ? ru.Hatyñyz : en.Hatyñyz
            }
            type="text"
          />
        </div>
        <button
          onClick={() => setFeedBack(false)}
          className="h-[50px] w-full bg-green rounded-[9px] text-white text-[16px] font-semi"
        >
          {dil === "TM"
            ? tm.Ugratmak
            : dil === "RU"
            ? ru.Ugratmak
            : en.Ugratmak}
        </button>
      </Modal>

      <Drawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        placement="left"
        width={350}
        closable={false}
      >
        <div className="pt-[100px] w-full">
          <div className="w-full">
            <h1 className="w-full text-neutral-900 font-bold text-[24px]">
              Aman Amonow
            </h1>
            <p className="w-full text-neutral-700 font-semi text-[16px]">
              +993 64 75 48 46
            </p>
          </div>
          <div className="w-full mt-[70px]">
            <div className="w-full flex mb-6">
              <img className="mr-2" src={mainMenu} alt="" />
              <h1 className="text-[18px] text-neutral-800 font-regular">
                {dil === "TM"
                  ? tm["Baş sahypa"]
                  : dil === "RU"
                  ? ru["Baş sahypa"]
                  : en["Baş sahypa"]}
              </h1>
            </div>

            <div className="w-full flex mb-6">
              <img className="mr-2" src={orderBox} alt="" />
              <h1 className="text-[18px] text-neutral-800 font-regular">
                {dil === "TM"
                  ? tm.Sargytlar
                  : dil === "RU"
                  ? ru.Sargytlar
                  : en.Sargytlar}
              </h1>
            </div>

            <div className="w-full flex mb-6">
              <img className="mr-2" src={location} alt="" />
              <h1 className="text-[18px] text-neutral-800 font-regular">
                {dil === "TM"
                  ? tm.Salgylarym
                  : dil === "RU"
                  ? ru.Salgylarym
                  : en.Salgylarym}
              </h1>
            </div>

            <div className="w-full flex mb-6">
              <img className="mr-2" src={heartMenu} alt="" />
              <h1 className="text-[18px] text-neutral-800 font-regular">
                {dil === "TM"
                  ? tm.Halanlarym
                  : dil === "RU"
                  ? ru.Halanlarym
                  : en.Halanlarym}
              </h1>
            </div>

            <div className="w-full flex mb-6">
              <img className="mr-2" src={global} alt="" />
              <h1 className="text-[18px] text-neutral-800 font-regular">
                {dil === "TM"
                  ? "Türkmen"
                  : dil === "RU"
                  ? "Русский"
                  : "English"}
              </h1>
            </div>
          </div>

          <div className="w-full flex mb-6 mt-16">
            <img className="mr-2" src={logout} alt="" />
            <h1 className="text-[18px] text-neutral-800 font-regular">
              {dil === "TM"
                ? tm["Ulgamdan çykmak"]
                : dil === "RU"
                ? ru["Ulgamdan çykmak"]
                : en["Ulgamdan çykmak"]}
            </h1>
          </div>
        </div>
      </Drawer>
      <div className="w-[95%] mx-auto xl:block hidden text-[#2F313F] pt-4">
        <div className="flex items-center justify-between pb-[16px] border-b-[1px] border-b-[#E9EAEE]">
          <div className="flex">
            <div
              onClick={() => history.push({ pathname: "/first" })}
              className="flex gap-[8px] cursor-pointer"
            >
              <img
                className="w-[40px] h-[40px] m-0"
                src={home}
                alt="home_icon"
              />
            </div>
            <div className=" flex justify-between items-center gap-[14px] pt-2 ml-5">
              <div className="min-w-[320px] justify-between flex items-center">
                {/* <div className="w-[2px] h-[28px] bg-[#E9EAEE]"></div> */}
                <div className="flex gap-[10px] cursor-pointer">
                  <img
                    className="w-[24px] h-[24px] m-0"
                    src={call}
                    alt="phone_icon"
                  />

                  <p className="text-[16px] font-semi">+993 12 52 52 12</p>
                </div>

                <div className="w-[2px] h-[28px] bg-[#E9EAEE]"></div>
                <div className="flex gap-[10px] cursor-pointer">
                  <img
                    className="w-[24px] h-[24px] m-0"
                    src={clock}
                    alt="clock_icon"
                  />

                  <p className="text-[16px] font-semi">09:00-21:00</p>
                </div>
              </div>

              {/* <div className="justify-between flex items-center"> */}
              <div className="w-[2px] gap-[12px] h-[28px] bg-[#E9EAEE]"></div>
              <div
                onClick={() => setFeedBack(true)}
                className="flex gap-[8px] cursor-pointer"
              >
                <p className="text-[16px] whitespace-nowrap font-medium">
                  {dil === "TM"
                    ? tm["Teklipler üçin"]
                    : dil === "RU"
                    ? ru["Teklipler üçin"]
                    : en["Teklipler üçin"]}
                </p>
              </div>
              {/* </div> */}

              <div className="w-[2px] h-[28px] bg-[#E9EAEE]"></div>
              <div className="min-w-[250px] xl:min-w-[300px] justify-between mr-2 flex items-center">
                <div
                  onClick={() =>
                    history.push({
                      pathname: "/mrt/markets",
                    })
                  }
                  className="flex cursor-pointer"
                >
                  <p className="text-[16px] font-medium">
                    {dil === "TM"
                      ? tm.Dükanlar
                      : dil === "RU"
                      ? ru.Dükanlar
                      : en.Dükanlar}
                  </p>
                </div>
                <div
                  onClick={() =>
                    history.push({
                      pathname: "/mrt/brends",
                    })
                  }
                  className="flex  cursor-pointer"
                >
                  <p className="text-[16px] font-medium">
                    {dil === "TM"
                      ? tm.Brendler
                      : dil === "RU"
                      ? ru.Brendler
                      : en.Brendler}
                  </p>
                </div>
                <div
                  onClick={() =>
                    history.push({
                      pathname: "/mrt/discount",
                    })
                  }
                  className="flex cursor-pointer"
                >
                  <p className="text-[16px] font-medium">
                    {dil === "TM"
                      ? tm.Arzanladyşlar
                      : dil === "RU"
                      ? ru.Arzanladyşlar
                      : en.Arzanladyşlar}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[16px] w-fit ml-4 select-none">
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
              <p className="text-[16px] font-semi m-0">
                {dil === "TM"
                  ? "Türkmen"
                  : dil === "RU"
                  ? "Русский"
                  : "English"}
              </p>

              <img
                className="w-[18px] h-[18px]"
                src={arrowDown}
                alt="Turkmenistan"
              />
              {open && (
                <div className="absolute z-50 top-12 left-0 w-[180px] gap-[10px] py-[10px] px-[24px] cursor-pointer custom-border bg-white">
                  {dil !== "TM" && (
                    <div
                      onClick={() => ChangeDil("TM")}
                      className="flex items-center py-[10px] px-[14px] border-b-neutral-300 border-b-[1px]"
                    >
                      <p className="text-[16px] whitespace-nowrap m-0">
                        Turkmen
                      </p>
                    </div>
                  )}
                  {dil !== "RU" && (
                    <div
                      onClick={() => ChangeDil("RU")}
                      className="flex items-center py-[10px] px-[14px] border-b-neutral-300 border-b-[1px]"
                    >
                      <p className="text-[16px] whitespace-nowrap m-0">
                        Русский
                      </p>
                    </div>
                  )}
                  {dil !== "EN" && (
                    <div
                      onClick={() => ChangeDil("EN")}
                      className="flex items-center py-[10px] px-[14px] "
                    >
                      <p className="text-[16px] whitespace-nowrap m-0">
                        English
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div
              onClick={() => history.push({ pathname: "/login" })}
              className="custom-border flex h-[50px] items-center gap-[10px]   px-[24px] cursor-pointer"
            >
              <img
                className="w-[24px] h-[24px]"
                src={user}
                alt="Turkmenistan"
              />
              <p className="text-[16px] whitespace-nowrap font-semi m-0">
                {dil === "TM"
                  ? tm["Ulgama girmek"]
                  : dil === "RU"
                  ? ru["Ulgama girmek"]
                  : en["Ulgama girmek"]}
              </p>
            </div>
          </div>
        </div>
        <div className="flex pt-[16px] justify-between">
          <div
            onClick={() => history.push({ pathname: "/mrt/home" })}
            className="cursor-pointer h-[50px] whitespace-nowrap mr-2 text-green text-[28px] select-none"
          >
            {/* Söwda onlaýn */}
            <img src={logo} alt="" />
          </div>

          <div
            onClick={() => setKategory(!kategory)}
            ref={kategoryRef}
            className="relative custom-button text-white rounded-[32px] h-[50px] px-[24px]  "
          >
            <img className="w-[24px] h-[24px]" src={catalog} alt="catalog" />
            <p className="m-0 font-semi">
              {dil === "TM"
                ? tm.Görnüşler
                : dil === "RU"
                ? ru.Görnüşler
                : en.Görnüşler}
            </p>
            {kategory && (
              <div className="absolute min-w-[500px] shadow-sm left-0 z-50 top-[65px] text-black bg-white rounded-[24px] inline-flex p-5">
                <div className="w-[250px] border-r-[1px] border-r-neutral-300 pr-2 ">
                  <p
                    onClick={() =>
                      history.push({
                        pathname: "/mrt/kategory/1",
                      })
                    }
                    className="w-full mb-2 hover:text-green hover:bg-neutral-200 rounded-[8px] p-2 flex justify-between font-medium "
                  >
                    Süýt, ýumurtga peýnir
                    <East className="text-white hover:text-green mr-2" />
                  </p>
                  <p className="w-full mb-2 hover:text-green hover:bg-neutral-200 rounded-[8px] p-2 flex justify-between font-medium ">
                    Gök önümler we miweler
                    <East className="text-white hover:text-green mr-2" />
                  </p>
                  <p className="w-full mb-2 hover:text-green hover:bg-neutral-200 rounded-[8px] p-2 flex justify-between font-medium ">
                    Süýt, ýumurtga peýnir
                    <East className="text-white hover:text-green mr-2" />
                  </p>
                  <p className="w-full mb-2 hover:text-green hover:bg-neutral-200 rounded-[8px] p-2 flex justify-between font-medium ">
                    Gök önümler we miweler
                    <East className="text-white hover:text-green mr-2" />
                  </p>
                  <p className="w-full mb-2 hover:text-green hover:bg-neutral-200 rounded-[8px] p-2 flex justify-between font-medium ">
                    Süýt, ýumurtga peýnir
                    <East className="text-white hover:text-green mr-2" />
                  </p>
                  <p className="w-full mb-2 hover:text-green hover:bg-neutral-200 rounded-[8px] p-2 flex justify-between font-medium ">
                    Gök önümler we miweler
                    <East className="text-white hover:text-green mr-2" />
                  </p>
                </div>
                <div className="px-4 min-w-[500px]">
                  <h1 className="text-[20px] w-full font-semi">
                    Gök önümler we miweler
                  </h1>
                  <div>
                    <p>Miweler</p>
                    <p>Gök otlar</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center border-[1px] h-[50px] border-[#E9EAEE] gap-[10px] p-[8px] rounded-[120px] w-[40%]">
            <img
              className="bg-[#F4F4F6] rounded-[120px] h-[35px] w-[35px]"
              src={search}
              alt="search"
            />
            <input
              className="outline-none font-medium w-full h-[32px]"
              placeholder={
                dil === "TM"
                  ? tm["Şu ýerden gözle"]
                  : dil === "RU"
                  ? ru["Şu ýerden gözle"]
                  : en["Şu ýerden gözle"]
              }
            />
            <div
              onClick={() => history.push({ pathname: "/mrt/search" })}
              className="custom-button font-semi text-white rounded-[32px] h-[40px] px-[24px] py-[10px]"
            >
              {dil === "TM" ? tm.Gözleg : dil === "RU" ? ru.Gözleg : en.Gözleg}
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div
              onClick={() =>
                history.push({
                  pathname: "/mrt/profile/favorites",
                })
              }
              className="custom-border flex items-center gap-[10px] h-[50px] px-[24px] cursor-pointer"
            >
              <img
                className="w-[26px] object-contain"
                src={heart}
                alt="heart"
              />
              <p className="text-[16px] font-semi m-0">
                {dil === "TM"
                  ? tm.Halanlarym
                  : dil === "RU"
                  ? ru.Halanlarym
                  : en.Halanlarym}
              </p>
            </div>
            <div
              onClick={() => history.push({ pathname: "/mrt/basket" })}
              className="custom-border flex items-center gap-[10px] h-[50px] px-[24px] cursor-pointer"
            >
              <img
                className="w-[24px] h-[24px]"
                src={shoppingCart}
                alt="shoppingCart"
              />
              <p className="text-[16px] whitespace-nowrap font-semi m-0">
                5215.00 TMT
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[95%] mx-auto  xl:hidden block text-[#2F313F] pt-4">
        <div className="w-full flex justify-between">
          <div
            onClick={() => setMenuOpen(true)}
            className="h-[56px] w-[58px] rounded-[9px] flex justify-center items-center bg-neutral-200"
          >
            <img src={menu} alt="menu" />
          </div>
          <div className="h-[56px] w-full ml-2 pl-3 rounded-[9px] flex justify-start items-center bg-neutral-200 ">
            <img src={search} alt="search" />
            <input
              className="h-full w-full leading-[25px] ml-[10px] bg-neutral-200 rounded-[9px] outline-none font-[20px] text-neutral-800 font-semi"
              type="text"
              placeholder={
                dil === "TM" ? tm.Gözleg : dil === "RU" ? ru.Gözleg : en.Gözleg
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
