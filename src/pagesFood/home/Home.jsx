import React, { useRef, useState } from "react";
import Slider from "react-slick";
import slide from "../../images/slide.jpg";
import longBanner from "../../images/longBanner.png";
import category from "../../images/category.svg";

import restoran1 from "../../images/restoran1.jpg";
import restoran2 from "../../images/restoran2.jpg";
import restoran3 from "../../images/restoran3.jpg";
import restoran4 from "../../images/restoran4.jpg";
import restoran5 from "../../images/restoran5.jpg";

import pizza from "../../images/pizza.jpg";
import ertirlik from "../../images/ertirlik.jpg";
import esasy from "../../images/esasy.jpg";
import hamyr from "../../images/hamyr.jpg";

import food_slide_1 from "../../images/food_slide_1.avif";
import food_slide_2 from "../../images/food_slide_2.avif";
import food_slide_3 from "../../images/food_slide_3.avif";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import ProductCard from "../../componentsFood/ProductCard";
import BrandCard from "../../componentsFood/BrandCard";
import { useHistory } from "react-router-dom";
import MarketCard from "../../componentsFood/MarketCard";
import CategoryCard from "../../componentsFood/CategoryCard";

function Home(props) {
	const history = useHistory();
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
		dots: true,
		infinite: true,
		speed: 500,
		initialSlide: 0.8,
		slidesToShow: 1.2,
		slidesToScroll: 1,
		beforeChange: (prev, next) => {
			setCurrent({ currentSlide: next });
		},
		afterChange: (index) => setCurrent({ currentSlide: index }),
		appendDots: (dots) => {
			return (
				<div className="mt-2">
					<ul>
						{dots.map((item, index) => {
							return (
								<li
									className={
										current.currentSlide == index
											? "bg-green mx-1 w-2 h-2 !text-green rounded-[100%]"
											: "bg-neutral mx-1 rounded-[100%]"
									}
									key={index}
								>
									{/* {item.props.children} */}
								</li>
							);
						})}
					</ul>
				</div>
			);
		},
		customPaging: (index) => {
			return (
				<button
					style={index === current.currentSlide ? testSettings : null}
					className="bg-green"
				>
					{index + 1}
				</button>
			);
		},
	};

	const settingsCategory = {
		dots: false,
		infinite: true,
		speed: 2000,
		autoplay: true,
		slidesToShow: 7,
		initialSlide: 1,
		slidesToScroll: 1,
		arrows: false,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1.2,
					slidesToScroll: 0.5,
					infinite: true,
				},
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};

	const markets = [
		{
			img: restoran1,
			close: false,
			is_discount: true,
			text: "Soltan Restoran",
		},
		{
			img: restoran2,
			close: true,
			is_discount: true,
			text: "Şa kofe",
		},
		{
			img: restoran3,
			close: false,
			is_discount: true,
			text: "Bazzeti",
		},
		{
			img: restoran4,
			close: true,
			is_discount: true,
			text: "Şabaz",
		},
		{
			img: restoran5,
			close: false,
			is_discount: true,
			text: "Tagamçy",
		},
	];

	const categories = [
		{
			name: "Pissa",
			img: pizza,
		},
		{
			name: "Esasy Tagamlar",
			img: esasy,
		},
		{
			name: "Hamyrdan önümler",
			img: hamyr,
		},
		{
			name: "Ertirlikler",
			img: ertirlik,
		},
		{
			name: "Pissa",
			img: pizza,
		},
		{
			name: "Esasy Tagamlar",
			img: esasy,
		},
		{
			name: "Hamyrdan önümler",
			img: hamyr,
		},
		{
			name: "Ertirlikler",
			img: ertirlik,
		},
		{
			name: "Pissa",
			img: pizza,
		},
		{
			name: "Esasy Tagamlar",
			img: esasy,
		},
		{
			name: "Hamyrdan önümler",
			img: hamyr,
		},
		{
			name: "Ertirlikler",
			img: ertirlik,
		},
	];

	const sliderImages = [food_slide_1, food_slide_2, food_slide_3];

	return (
		<div className="w-full pb-10 select-none">
			<div className="w-full h-[320px] relative rounded-[20px] mt-[25px] mb-[50px]">
				<Slider ref={slider} {...settings}>
					{sliderImages.map((item) => {
						return (
							<div className="w-full px-2 outline-none">
								<img
									className=" w-full h-[320px] mb-3  object-cover rounded-[20px]"
									src={item}
									alt="slide"
								/>
							</div>
						);
					})}
				</Slider>
				<div>
					<div
						onClick={() => slider.current.slickPrev(1)}
						className="w-[40px] absolute -left-[15px] cursor-pointer top-[150px] text-right pr-1 shadow-sm leading-[35px] rounded-[100%] h-[40px] bg-white"
					>
						<ArrowBackIos />
					</div>
					<div
						onClick={() => slider.current.slickNext(1)}
						className="w-[40px] absolute -right-[25px] cursor-pointer top-[150px] shadow-sm text-center leading-[35px] rounded-[100%] h-[40px] bg-white"
					>
						<ArrowForwardIos />
					</div>
				</div>
			</div>
			<div className="w-full mt-14">
				<div className="flex items-center justify-between w-full">
					<h2 className="text-[28px] font-bold text-[#2F313F] my-[25px]">
						Nahar kategoriýalara görä
					</h2>
					<div
						onClick={() => history.push({ pathname: "/rtn/categories" })}
						className="border-[1px] hover:bg-green-200 border-[#E9EAEE] text-[#1D965C] cursor-pointer py-[5px] px-[12px] rounded-[24px] text-[16px] font-semi"
					>
						Hemmesini görkez
					</div>
				</div>
				<div className="w-full mt-6">
					<Slider {...settingsCategory}>
						{categories.map((item) => {
							return (
								<div kety={item.name} className="pr-5">
									<CategoryCard text={item.name} img={item.img} />
								</div>
							);
						})}
					</Slider>
				</div>
			</div>
			<div className="w-full mt-10">
				<div className="flex items-center justify-between">
					<h2 className="text-[28px] font-bold text-[#2F313F]">
						Arzanladyşlar
					</h2>
					<div
						onClick={() => history.push({ pathname: "/rtn/discount" })}
						className="border-[1px] hover:bg-green-200 border-[#E9EAEE] text-[#1D965C] cursor-pointer py-[5px] px-[12px] rounded-[24px] text-[16px] font-semi"
					>
						Hemmesini görkez
					</div>
				</div>
				<div className="inline-flex justify-between w-full mt-6 overflow-y-auto scrollbar-hide">
					{markets.map((item, index) => {
						return (
							<div key={index} className="mr-6">
								<MarketCard
									is_discount={item.is_discount}
									close={item.close}
									img={item.img}
									text={item.text}
									key={"index"}
								/>
							</div>
						);
					})}
				</div>
			</div>

			<div className="mt-10">
				<div className="flex items-center justify-between">
					<h2 className="text-[28px] font-bold text-[#2F313F]">
						Kop Satylanlar
					</h2>
					<div
						onClick={() => history.push({ pathname: "/rtn/moreSale" })}
						className="border-[1px] hover:bg-green-200 border-[#E9EAEE] text-[#1D965C] cursor-pointer py-[5px] px-[12px] rounded-[24px] text-[16px] font-semi"
					>
						Hemmesini görkez
					</div>
				</div>
				<div className="inline-flex justify-between w-full mt-6 overflow-y-auto scrollbar-hide">
					{markets.map((item, index) => {
						return (
							<div key={index} className="mr-6">
								<MarketCard
									is_discount={item.is_discount}
									close={item.close}
									img={item.img}
									text={item.text}
									key={"index"}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<div className="w-full mt-10">
				<img
					className="w-full h-[200px] object-cover rounded-[24px] my-[35px]"
					src={sliderImages[1]}
					alt="banner"
				/>
			</div>
			<div className="mt-10">
				<div className="flex items-center justify-between">
					<h2 className="text-[28px] font-bold text-[#2F313F]">Burger</h2>
					<div
						onClick={() => history.push({ pathname: "/rtn/category/1" })}
						className="border-[1px] hover:bg-green-200 border-[#E9EAEE] text-[#1D965C] cursor-pointer py-[5px] px-[12px] rounded-[24px] text-[16px] font-semi"
					>
						Hemmesini görkez
					</div>
				</div>
				<div className="inline-flex justify-between w-full mt-6 overflow-y-auto scrollbar-hide">
					{markets.map((item, index) => {
						return (
							<div key={index} className="mr-6">
								<MarketCard
									is_discount={item.is_discount}
									close={item.close}
									img={item.img}
									text={item.text}
									key={"index"}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<div className="mt-10">
				<div className="flex items-center justify-between">
					<h2 className="text-[28px] font-bold text-[#2F313F]">Pizza</h2>
					<div
						onClick={() => history.push({ pathname: "/rtn/category/1" })}
						className="border-[1px] hover:bg-green-200 border-[#E9EAEE] text-[#1D965C] cursor-pointer py-[5px] px-[12px] rounded-[24px] text-[16px] font-semi"
					>
						Hemmesini görkez
					</div>
				</div>
				<div className="inline-flex justify-between w-full mt-6 overflow-y-auto scrollbar-hide">
					{markets.map((item, index) => {
						return (
							<div key={index} className="mr-6">
								<MarketCard
									is_discount={item.is_discount}
									close={item.close}
									img={item.img}
									text={item.text}
									key={"index"}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Home;
