import React, { useContext, useState } from "react";
import { West, ArrowForwardIos, FavoriteBorder } from "@mui/icons-material";
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Slider,
} from "@mui/material";
import { Cancel, StarOutlined } from "@mui/icons-material";
import { Modal } from "antd";
import MarketCard from "../../componentsFood/MarketCard";
import marketImg from "../../images/market.png";
import heart from "../../images/heartWhite.svg";
import heartLiked from "../../images/heartLiked.svg";
import star from "../../images/star.svg";
import { useHistory } from "react-router-dom";

import restoran1 from "../../images/restoran1.jpg";
import restoran2 from "../../images/restoran2.jpg";
import restoran3 from "../../images/restoran3.jpg";
import restoran4 from "../../images/restoran4.jpg";
import restoran5 from "../../images/restoran5.jpg";

import { Context } from "../../context/context";
import tm from "../../lang/tm/home.json";
import en from "../../lang/en/home.json";
import ru from "../../lang/ru/home.json";

const DiscountProducts = () => {
	const history = useHistory();
	const { dil } = useContext(Context);
	const [starOpen, setStarOpen] = useState(false);
	const [liked, setLiked] = useState(false);
	const [priceRange, setPriceRange] = useState([0, 1000]);
	const [brends, setBrends] = useState([
		{ id: 1, name: "Mars" },
		{ id: 1, name: "Pepsi" },
		{ id: 1, name: "Colo" },
		{ id: 1, name: "Snicers" },
		{ id: 1, name: "Turan" },
		{ id: 1, name: "Apple" },
		{ id: 1, name: "Fanta" },
		{ id: 1, name: "Sprite" },
	]);
	const [filterBrends, setFilterBrends] = useState(brends);

	const [markets, setMarkets] = useState([
		{ id: 1, name: "Mars" },
		{ id: 1, name: "Pepsi" },
		{ id: 1, name: "Colo" },
		{ id: 1, name: "Snicers" },
		{ id: 1, name: "Turan" },
		{ id: 1, name: "Apple" },
		{ id: 1, name: "Fanta" },
		{ id: 1, name: "Sprite" },
	]);
	const [filterMarkets, setFilterMarkets] = useState(markets);

	const SearchBrends = (value) => {
		let filter = value.toUpperCase();
		let newArray = brends.filter((item) => {
			return item.name.toUpperCase().indexOf(filter) > -1;
		});
		if (value.length === 0) {
			setFilterBrends([...brends]);
		} else {
			setFilterBrends([...newArray]);
		}
	};

	const SearchMarkets = (value) => {
		let filter = value.toUpperCase();
		let newArray = markets.filter((item) => {
			return item.name.toUpperCase().indexOf(filter) > -1;
		});
		if (value.length === 0) {
			setFilterMarkets([...markets]);
		} else {
			setFilterMarkets([...newArray]);
		}
	};

	const marketsimg = [
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
	return (
		<div className="inline-flex justify-between w-full pb-10 select-none">
			<Modal
				className="p-8 font-roboto "
				width={650}
				open={starOpen}
				onCancel={() => setStarOpen(false)}
				footer={false}
			>
				<h1 className="text-[28px] mb-4 font-bold text-neutral-900 text-left ">
					{dil === "TM"
						? tm["Baha bermek"]
						: dil === "RU"
						? ru["Baha bermek"]
						: en["Baha bermek"]}
				</h1>

				<div className="w-full overflow-y-auto max-h-[470px]">
					<div className="w-full mb-2 py-2 border-b-[1px] border-b-neutral-300">
						<h1 className="w-full text-left text-[18px] text-neutral-900 font-semi">
							Худайдурды Хожайев
						</h1>
						<p className="w-full text-left text-[14px] text-neutral-700 font-medium">
							12.10.2023 - 13:23
						</p>
						<div className="flex my-2">
							<p className="w-fit mr-2 text-left text-[16px] text-neutral-900 font-semi">
								4.0
							</p>
							<div className="flex">
								<StarOutlined className="text-yellow" />
								<StarOutlined className="text-yellow" />
								<StarOutlined className="text-yellow" />
								<StarOutlined className="text-yellow" />
								<StarOutlined className="text-neutral-400" />
							</div>
						</div>
						<p className="w-full text-left text-[14px] text-neutral-700 font-regular">
							Этот уютный ресторан оставил самые лучшие впечатления!
							Гостеприимные хозяева, вкусные блюда, красивая подача, широкая
							винная карта и прекрасный десерт. Рекомендую всем! Хочется
							возвращаться сюда снова и снова.
						</p>
					</div>
					<div className="w-full mb-2 py-2 border-b-[1px] border-b-neutral-300">
						<h1 className="w-full text-left text-[18px] text-neutral-900 font-semi">
							Худайдурды Хожайев
						</h1>
						<p className="w-full text-left text-[14px] text-neutral-700 font-medium">
							12.10.2023 - 13:23
						</p>
						<div className="flex my-2">
							<p className="w-fit mr-2 text-left text-[16px] text-neutral-900 font-semi">
								4.0
							</p>
							<div className="flex">
								<StarOutlined className="text-yellow" />
								<StarOutlined className="text-yellow" />
								<StarOutlined className="text-yellow" />
								<StarOutlined className="text-yellow" />
								<StarOutlined className="text-neutral-400" />
							</div>
						</div>
						<p className="w-full text-left text-[14px] text-neutral-700 font-regular">
							Этот уютный ресторан оставил самые лучшие впечатления!
							Гостеприимные хозяева, вкусные блюда, красивая подача, широкая
							винная карта и прекрасный десерт. Рекомендую всем! Хочется
							возвращаться сюда снова и снова.
						</p>
					</div>
				</div>
			</Modal>
			<div className="min-w-[245px] w-[245px]">
				<div className="w-full px-4 mt-0 rounded-[8px] border-[1px] border-neutral-300">
					<h1 className="py-3 text-[20px] text-neutral-900 font-semi text-left">
						{dil === "TM"
							? tm["Nahar kategoriýalary"]
							: dil === "RU"
							? ru["Nahar kategoriýalary"]
							: en["Nahar kategoriýalary"]}
					</h1>
					<p className="py-3 text-[16px] text-neutral-900 font-[300] text-left border-t-[1px] border-t-neutral-300 cursor-pointer">
						Ertirlikler
					</p>
					<p className="py-3 text-[16px] text-neutral-900 font-[300] text-left border-t-[1px] border-t-neutral-300 cursor-pointer">
						Pizza
					</p>
					<p className="py-3 text-[16px] text-neutral-900 font-[300] text-left border-t-[1px] border-t-neutral-300 cursor-pointer">
						Hamyrdan önümler
					</p>
					<p className="py-3 text-[16px] text-neutral-900 font-[300] text-left border-t-[1px] border-t-neutral-300 cursor-pointer">
						Esasy tagamlar
					</p>
				</div>

				<div className="w-full px-4 mt-4 rounded-[8px] border-[1px] border-neutral-300">
					<h1 className="py-3 text-[20px] border-b-[1px] border-b-neutral-300 text-neutral-900 font-semi text-left">
						{dil === "TM" ? tm.Bahasy : dil === "RU" ? ru.Bahasy : en.Bahasy}
					</h1>
					<div className="flex justify-between">
						<input
							className="w-[45%] h-[50px] mt-2 outline-none p-2 rounded-[8px] border-[1px] border-neutral-300"
							type="text"
							placeholder="0 TMT"
							value={priceRange[0] + " TMT"}
						/>
						<input
							className="w-[45%] h-[50px] mt-2 outline-none p-2 rounded-[8px] border-[1px] border-neutral-300"
							type="text"
							placeholder="0 TMT"
							value={priceRange[1] + " TMT"}
						/>
					</div>
					<div className="w-full px-2 mt-4 ">
						<Slider
							sx={{
								"& .MuiSlider-thumb": {
									color: "#32BB78",
								},
								"& .MuiSlider-track": {
									color: "#32BB78",
								},
								"& .MuiSlider-rail": {
									color: "#E9EAEE",
								},
								"& .MuiSlider-active": {
									color: "#32BB78",
								},
							}}
							className="z-10 text-green"
							min={0}
							max={1000}
							getAriaLabel={() => "Minimum distance"}
							defaultValue={priceRange}
							// value={priceRange}
							onChange={(e) => {
								setPriceRange(e.target.value);
							}}
							valueLabelDisplay="auto"
							getAriaValueText={(e) => console.log("value text", e)}
							disableSwap
						/>
					</div>
				</div>
			</div>
			<div className="w-full pl-8">
				<div className="flex items-center w-full">
					<p
						onClick={() => history.push({ pathname: "/rtn/home" })}
						className="text-[16px] cursor-pointer font-regular text-black-secondary mr-2"
					>
						{dil === "TM"
							? tm["Baş sahypa"]
							: dil === "RU"
							? ru["Baş sahypa"]
							: en["Baş sahypa"]}
					</p>
					<ArrowForwardIos className="!text-[16px]  font-regular text-black-secondary mr-2" />
					<p className="text-[16px] font-regular text-black-secondary mr-2">
						{dil === "TM"
							? tm.Arzanladyşlar
							: dil === "RU"
							? ru.Arzanladyşlar
							: en.Arzanladyşlar}
					</p>
				</div>

				<div className="flex items-center justify-between w-full mt-6">
					<p className="text-[32px] font-semi text-neutral-900 mr-2">
						{dil === "TM"
							? tm.Arzanladyşlar
							: dil === "RU"
							? ru.Arzanladyşlar
							: en.Arzanladyşlar}
					</p>
					<div className="w-[200px]">
						<FormControl size="small" fullWidth>
							<InputLabel
								style={{ color: "#32BB78" }}
								id="demo-simple-select-label"
							>
								{dil === "TM"
									? tm.Saýhallamak
									: dil === "RU"
									? ru.Saýhallamak
									: en.Saýhallamak}
							</InputLabel>
							<Select
								labelStyle={{ color: "#32BB78" }}
								sx={{
									borderRadius: "22px",
									color: "#32BB78",
									".MuiOutlinedInput-notchedOutline": {
										borderColor: "#32BB78",
									},
									"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
										borderColor: "#32BB78",
									},
									"&:hover .MuiOutlinedInput-notchedOutline": {
										borderColor: "#32BB78",
									},
									".MuiSvgIcon-root ": {
										fill: "#32BB78 !important",
									},
								}}
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								// value={age}
								label="Saýhallamak"
								// onChange={handleChange}
							>
								<MenuItem value={"Default"}>
									{dil === "TM"
										? tm["Meşhurlygyna görä"]
										: dil === "RU"
										? ru["Meşhurlygyna görä"]
										: en["Meşhurlygyna görä"]}
								</MenuItem>
								<MenuItem value={"Cheep to Expensive"}>
									{dil === "TM"
										? tm["Arzandan gymmada"]
										: dil === "RU"
										? ru["Arzandan gymmada"]
										: en["Arzandan gymmada"]}
								</MenuItem>
								<MenuItem value={"Expensive to Cheep"}>
									{dil === "TM"
										? tm["Gymmatdan arzana"]
										: dil === "RU"
										? ru["Gymmatdan arzana"]
										: en["Gymmatdan arzana"]}
								</MenuItem>
							</Select>
						</FormControl>
					</div>
				</div>

				<div className="flex items-center justify-start w-full mt-5">
					<div className="flex justify-between overflow-x-auto items-center mr-2 rounded-[32px] h-[30px] p-[5px] pl-[10px] bg-green text-white text-[16px] font-medium overflow-y-hidden">
						<p className="mr-2">
							{dil === "TM" ? tm.Bahasy : dil === "RU" ? ru.Bahasy : en.Bahasy}:
							: 20 - 120 TMT
						</p>
						<Cancel className="cursor-pointer" />
					</div>
					<div className="flex cursor-pointer items-center rounded-[32px] h-[30px] p-[5px] px-[10px] bg-neutral-300 text-black-secondary text-[16px] font-medium">
						{dil === "TM"
							? tm["Filtrleri arassalamak"]
							: dil === "RU"
							? ru["Filtrleri arassalamak"]
							: en["Filtrleri arassalamak"]}
					</div>
				</div>

				<div className="w-full">
					<div className="flex items-center justify-start w-full mt-8">
						<h1 className="font-bold text-[20px] text-neutral-900 mr-2">
							{dil === "TM"
								? tm.Arzanladyşlar
								: dil === "RU"
								? ru.Arzanladyşlar
								: en.Arzanladyşlar}
						</h1>
						<p className="font-medium text-[16px] text-neutral-600"> </p>
					</div>
					<div className="grid w-full gap-8 pl-2 mt-8 place-items-center lg:grid-cols-1 xl:grid-cols-2 5xl:grid-cols-3 6xl2:grid-cols-3 ">
						{marketsimg.map((item, index) => {
							return (
								<div key={index} className="mr-6">
									<MarketCard
										width={490}
										is_discount={item.is_discount}
										close={item.close}
										img={item.img}
										name={item.name}
										text={item.text}
										key={"index"}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DiscountProducts;
