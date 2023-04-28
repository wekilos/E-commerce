import React, { useRef, useState } from "react";
import Slider from "react-slick";
import add1 from "../../images/cardAdd.jpeg";
import add2 from "../../images/cardAdd2.jpg";
import add3 from "../../images/cardAdd3.webp";
import longBanner from "../../images/longBanner.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import ProductCard from "../../components/ProductCard";
import BrandCard from "../../components/BrandCard";
import { useHistory } from "react-router-dom";
import CategoryCard from "./categoryCard";

import brend1 from "../../images/brend1.svg";
import brend2 from "../../images/brend2.svg";
import brend3 from "../../images/brend3.svg";
import brend4 from "../../images/brend4.svg";
import brend5 from "../../images/brend5.svg";

import img1 from "../../images/Image1.svg";
import img2 from "../../images/Image2.svg";
import img3 from "../../images/Image3.svg";
import img4 from "../../images/Image4.svg";
import img5 from "../../images/Image5.svg";

import img6 from "../../images/Image6.svg";
import img7 from "../../images/Image7.svg";
import img8 from "../../images/Image8.svg";

import img9 from "../../images/Image9.svg";
import img10 from "../../images/Image10.svg";
import img11 from "../../images/Image11.svg";
import img12 from "../../images/Image12.svg";
import img13 from "../../images/Image13.svg";

import img14 from "../../images/Image14.svg";
import img15 from "../../images/Image15.svg";
import img16 from "../../images/Image16.svg";
import img17 from "../../images/Image17.svg";
import img18 from "../../images/Image18.svg";

import grocery_slide_1 from "../../images/grocery_slide_1.avif";
import grocery_slide_2 from "../../images/grocery_slide_2.avif";
import grocery_slide_3 from "../../images/grocery_slide_3.avif";

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
		center: true,
		autoplay: true,
		swipeToSlide: true,
		// autoplaySpeed: 2000,
		pauseOnHover: true,
		Infinity: true,
		dots: true,
		infinite: true,
		speed: 2000,
		initialSlide: 0.8,
		slidesToShow: 1.2,
		slidesToScroll: 1,
		beforeChange: (prev, next) => {
			setCurrent({ currentSlide: next });
		},
		afterChange: (index) => setCurrent({ currentSlide: index }),
		appendDots: (dots) => {
			return (
				<div className="mt-4">
					<ul>
						{dots.map((item, index) => {
							return (
								<li
									className={
										current.currentSlide == index
											? "bg-green mt-4 mx-1 w-1 h-1 !text-green rounded-[100%]"
											: "bg-neutral mt-4 mx-1 rounded-[100%]"
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
					className="mt-4 bg-green"
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

	const brends = [
		{
			name: "Nescafe",
		},
		{
			name: "Her gün",
			img: brend1,
		},
		{
			name: "Elwan",
			img: brend2,
		},
		{
			name: "Şuwat",
			img: brend3,
		},
		{
			name: "7 gün",
			img: brend4,
		},
		{
			name: "Eçil",
			img: brend5,
		},
		{
			name: "Nescafe",
		},
		{
			name: "Her gün",
			img: brend1,
		},
		{
			name: "Elwan",
			img: brend2,
		},
		{
			name: "Şuwat",
			img: brend3,
		},
		{
			name: "7 gün",
			img: brend4,
		},
		{
			name: "Eçil",
			img: brend5,
		},
	];

	const products = {
		un: [
			{
				name: "Patraklar Агро-Альянс 4 däneli 400 g",
				img: img9,
			},
			{
				name: "Greçka Агро-Альянс ýaşyl 450 g",
				img: img10,
			},
			{
				name: "Patraklar Агро-Альянс süle 400 g",
				img: img11,
			},
			{
				name: "Un Beles 5 kg",
				img: img12,
			},
			{
				name: "Nohut iri 1kg",
				img: img13,
			},
			{
				name: "Patraklar Агро-Альянс 4 däneli 400 g Patraklar Агро-Альянс 4 däneli 400 g",
				img: img9,
			},
			{
				name: "Greçka Агро-Альянс ýaşyl 450 g",
				img: img10,
			},
			{
				name: "Patraklar Агро-Альянс süle 400 g",
				img: img11,
			},
			{
				name: "Un Beles 5 kg",
				img: img12,
			},
			{
				name: "Nohut iri 1kg",
				img: img13,
			},
		],
		cake: [
			{
				name: "Batonçiik şokoladly Twix Extra kökeler we karamel bilen 82 gr",
				img: img14,
			},
			{
				name: "Şokoladly batonçik Bounty Trio süýt şokolady bilen örtülen",
				img: img15,
			},
			{
				name: "Mini wafli Kinder Bueno 18 sany 108 g",
				img: img16,
			},
			{
				name: "Süýjüler Коркунов şokoladlaryň ýygyndysy gara",
				img: img17,
			},
			{
				name: "Süýji sowgat Snickers Twix MilkyWay 81 g",
				img: img18,
			},
			{
				name: "Batonçiik şokoladly Twix Extra kökeler we karamel bilen 82 gr",
				img: img14,
			},
			{
				name: "Şokoladly batonçik Bounty Trio süýt şokolady bilen örtülen",
				img: img15,
			},
			{
				name: "Mini wafli Kinder Bueno 18 sany 108 g",
				img: img16,
			},
			{
				name: "Süýjüler Коркунов şokoladlaryň ýygyndysy gara",
				img: img17,
			},
			{
				name: "Süýji sowgat Snickers Twix MilkyWay 81 g",
				img: img18,
			},
		],
		arzan: [
			{
				name: "Gök bulgar Obam parnikden 1 kg",
				img: img1,
			},
			{
				name: "Sogan Obam 1 kg",
				img: img2,
			},
			{
				name: "Badamjan parnik Obam 1 kg",
				img: img3,
			},
			{
				name: "Doňdurylan ýertudana Мираторг 300 g",
				img: img4,
			},
			{
				name: "Göle gapyrgasy Emin Et 1 kg",
				img: img5,
			},
			{
				name: "Gök bulgar Obam parnikden 1 kg",
				img: img1,
			},
			{
				name: "Sogan Obam 1 kg",
				img: img2,
			},
			{
				name: "Badamjan parnik Obam 1 kg",
				img: img3,
			},
			{
				name: "Doňdurylan ýertudana Мираторг 300 g",
				img: img4,
			},
			{
				name: "Göle gapyrgasy Emin Et 1 kg",
				img: img5,
			},
		],
		kop: [
			{
				name: "Maýonez Nur Näzli 30% 800 g",
				img: img6,
			},
			{
				name: "Ketçup Mr.Ricco Grill Menu Towuk karri üçin 350 gr",
				img: img7,
			},
			{
				name: "Limon sousy Arslan Küpü 500 ml",
				img: img8,
			},
			{
				name: "Batonçiik şokoladly Twix Extra kökeler we karamel bilen 82 gr",
				img: img14,
			},
			{
				name: "Şokoladly batonçik Bounty Trio süýt şokolady bilen örtülen",
				img: img15,
			},
			{
				name: "Maýonez Nur Näzli 30% 800 g",
				img: img6,
			},
			{
				name: "Ketçup Mr.Ricco Grill Menu Towuk karri üçin 350 gr",
				img: img7,
			},
			{
				name: "Limon sousy Arslan Küpü 500 ml",
				img: img8,
			},
			{
				name: "Batonçiik şokoladly Twix Extra kökeler we karamel bilen 82 gr",
				img: img14,
			},
			{
				name: "Şokoladly batonçik Bounty Trio süýt şokolady bilen örtülen",
				img: img15,
			},
		],
	};

	const images = [grocery_slide_1, grocery_slide_2, grocery_slide_3];
	return (
		<div className="w-full pb-10 select-none">
			<div className="w-full h-[320px] relative rounded-[20px] mt-[25px] mb-[50px]">
				<Slider ref={slider} {...settings}>
					{images.map((item) => {
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
			<div className="w-full select-none mt-14 ">
				<div className="flex items-center justify-between">
					<h2 className="text-[28px] font-bold text-[#2F313F]">
						Kategoriýalar
					</h2>
					<div
						onClick={() => history.push({ pathname: "/mrt/kategories" })}
						className="border-[1px] hover:bg-green-200 border-[#E9EAEE] text-[#1D965C] cursor-pointer py-[5px] px-[12px] rounded-[24px] text-[16px] font-semi"
					>
						Hemmesini görkez
					</div>
				</div>
				<div className="w-full mt-6">
					<Slider {...settingsCategory}>
						<div className="pr-5">
							<CategoryCard title="Süýt, ýumurtga peýnir" />
						</div>
						<div className="pr-5">
							<CategoryCard title="Çörek we konditer önümleri" />
						</div>
						<div className="pr-5">
							<CategoryCard title="Gök önümler we miweler" />
						</div>
						<div className="pr-5">
							<CategoryCard title="Et we balyk önümleri" />
						</div>
						<div className="pr-5">
							<CategoryCard title="Şokolad we süýji önümleri" />
						</div>
						<div className="pr-5">
							<CategoryCard title="Gazly suw we içgiler" />
						</div>
						<div className="pr-5">
							<CategoryCard title="Süýt, ýumurtga peýnir" />
						</div>
						<div className="pr-5">
							<CategoryCard title="Çörek we konditer önümleri" />
						</div>
						<div className="pr-5">
							<CategoryCard title="Gök önümler we miweler" />
						</div>
						<div className="pr-5">
							<CategoryCard title="Et we balyk önümleri" />
						</div>
						<div className="pr-5">
							<CategoryCard title="Şokolad we süýji önümleri" />
						</div>
						<div className="pr-5">
							<CategoryCard title="Gazly suw we içgiler" />
						</div>
					</Slider>
				</div>
			</div>

			<div className="mt-10 ">
				<div className="flex items-center justify-between">
					<h2 className="text-[28px] font-bold text-[#2F313F]">
						Arzanladyşlar
					</h2>
					<div
						onClick={() => history.push({ pathname: "/mrt/discount" })}
						className="border-[1px] hover:bg-green-200 border-[#E9EAEE] text-[#1D965C] cursor-pointer py-[5px] px-[12px] rounded-[24px] text-[16px] font-semi"
					>
						Hemmesini görkez
					</div>
				</div>
				<div className="inline-flex justify-between w-full mt-6 overflow-y-auto scrollbar-hide">
					{products.arzan.map((item) => {
						return (
							<div key={item.name} className="mr-6">
								<ProductCard text={item.name} img={item.img} key={"index"} />
							</div>
						);
					})}
				</div>
			</div>

			<div className="inline-flex justify-between w-full mt-12 overflow-y-auto">
				<img
					className="rounded-[32px] w-[400px] h-[220px] object-cover mr-2"
					src={add1}
					alt="slide"
				/>
				<img
					className="rounded-[32px] w-[400px]  h-[220px] object-cover mr-2"
					src={add2}
					alt="slide"
				/>
				<img
					className="rounded-[32px] w-[400px]  h-[220px] object-cover mr-2"
					src={add3}
					alt="slide"
				/>
			</div>
			{/* <ProductGroup name={"Maýonez,üwmeçler we souslar"} /> */}
			<div className="mt-10 ">
				<div className="flex items-center justify-between">
					<h2 className="text-[28px] font-bold text-[#2F313F]">
						Köp Satylanlar
					</h2>
					<div
						onClick={() => history.push({ pathname: "/mrt/moreSale" })}
						className="border-[1px] hover:bg-green-200 border-[#E9EAEE] text-[#1D965C] cursor-pointer py-[5px] px-[12px] rounded-[24px] text-[16px] font-semi"
					>
						Hemmesini görkez
					</div>
				</div>
				<div className="inline-flex justify-between w-full mt-6 overflow-y-auto scrollbar-hide">
					{products.kop.map((item) => {
						return (
							<div key={item.name} className="mr-6">
								<ProductCard text={item.name} img={item.img} key={"index"} />
							</div>
						);
					})}
				</div>
			</div>

			<div className="w-full mt-10 ">
				<img
					className="w-full h-[200px] rounded-[24px] object-cover my-[35px]"
					src={longBanner}
					alt="banner"
				/>
			</div>

			<div className="mt-10">
				<div className="flex items-center justify-between w-full">
					<h2 className="text-[28px] font-bold text-[#2F313F]">Brendlar</h2>
					<div
						onClick={() => history.push({ pathname: "/mrt/brends" })}
						className="border-[1px] hover:bg-green-200 border-[#E9EAEE] text-[#1D965C] cursor-pointer py-[5px] px-[12px] rounded-[24px] text-[16px] font-semi"
					>
						Hemmesini görkez
					</div>
				</div>
				<div className="inline-flex justify-between w-full mt-6 overflow-y-auto scrollbar-hide">
					{brends.map((item) => {
						return (
							<div key={item.name} className="mr-6">
								<BrandCard text={item.name} img={item?.img} key={"index"} />
							</div>
						);
					})}
				</div>
			</div>

			<div className="my-10">
				<div className="flex items-center justify-between">
					<h2 className="text-[28px] font-bold text-[#2F313F]">
						Şokolad we süýji önümleri
					</h2>
					<div
						onClick={() => history.push({ pathname: "/mrt/kategory/1" })}
						className="border-[1px] hover:bg-green-200 border-[#E9EAEE] text-[#1D965C] cursor-pointer py-[5px] px-[12px] rounded-[24px] text-[16px] font-semi"
					>
						Hemmesini görkez
					</div>
				</div>
				<div className="inline-flex justify-between w-full mt-6 overflow-y-auto scrollbar-hide">
					{products.cake.map((item) => {
						return (
							<div key={item.name} className="mr-6">
								<ProductCard text={item.name} img={item.img} key={"index"} />
							</div>
						);
					})}
				</div>
			</div>

			<div className="mt-10">
				<div className="flex items-center justify-between">
					<h2 className="text-[28px] font-bold text-[#2F313F]">
						Unaş, däneler we unlar
					</h2>
					<div
						onClick={() => history.push({ pathname: "/mrt/kategory/1" })}
						className="border-[1px] hover:bg-green-200 border-[#E9EAEE] text-[#1D965C] cursor-pointer py-[5px] px-[12px] rounded-[24px] text-[16px] font-semi"
					>
						Hemmesini görkez
					</div>
				</div>
				<div className="inline-flex justify-between w-full mt-6 overflow-y-auto scrollbar-hide">
					{products.un.map((item) => {
						return (
							<div key={item.name} className="mr-6">
								<ProductCard text={item.name} img={item.img} key={"index"} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Home;
