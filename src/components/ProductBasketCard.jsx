import React, { useEffect, useState } from "react";
import card from "../images/card.png";
import { ExpandMore, Favorite, FavoriteBorder } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import marketImg from "../images/Store.png";
import trash from "../images/trash.svg";
import BasketCard from "./BasketCard";

import img6 from "../images/Image6.svg";
import img7 from "../images/Image7.svg";
import img8 from "../images/Image8.svg";
import img14 from "../images/Image14.svg";
import img15 from "../images/Image15.svg";

function ProductBasketCard(props) {
    const history = useHistory();
    const [animation, setAnimation] = useState(false);
    const [count, setCount] = useState(1);
    useEffect(() => {
        const time = setTimeout(() => {
            setAnimation(false);
        }, 2000);
        return () => clearTimeout(time);
    }, [animation]);

    const kop = [
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
    ];

    return (
        <div className="w-full mb-6 p-4 rounded-[16px] border-[1px] border-neutral-300 shadow-sm">
            <div className="w-full rounded-[16px]">
                <Accordion
                    defaultExpanded={true}
                    style={{
                        borderRadius: "16px",
                        border: "none",
                        boxShadow: "none",
                    }}
                >
                    <AccordionSummary
                        style={{
                            borderRadius: "16px",
                            backgroundColor: "#F4F4F6",
                            padding: "16px",
                        }}
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div className="w-full flex  justify-between ">
                            <div className="flex pl-4 items-center">
                                <img
                                    className="h-[45px] w-[45px] rounded-[12px] object-cover mr-2"
                                    src={marketImg}
                                    alt="Market"
                                />
                                <h1 className="text-[18px] font-semi text-neutral-900">
                                    {props.text ? props.text : "Galam Market"}
                                </h1>
                            </div>
                            <div className="text-[18px] sum relative self-center mr-4 underline font-semi text-neutral-900">
                                Jemi: 242 TMT
                                {
                                    <div className="w-[250px] z-10 detail hidden absolute top-[55px] -right-[55px] bg-white  rounded-[16px] border-[1px] border-neutral-300 p-4 shadow-sm">
                                        <h1 className="w-full text-[20px] font-semi text-black-secondary border-b-[1px] border-b-neutral-300 py-2">
                                            Sargyt barada
                                        </h1>
                                        <div className="w-full border-b-[1px] border-b-neutral-300 py-2 ">
                                            <div className="w-full flex justify-between py-2">
                                                <p className="text-[16px] font-medium text-black-secondary">
                                                    Umumy:
                                                </p>
                                                <p className="text-[16px] font-medium text-black-secondary">
                                                    232351 TMT
                                                </p>
                                            </div>

                                            <div className="w-full flex justify-between py-2">
                                                <p className="text-[16px] font-medium text-red">
                                                    Arzanladyş:
                                                </p>
                                                <p className="text-[16px] font-medium text-red">
                                                    -120 TMT
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-full flex justify-between py-4">
                                            <p className="text-[18px] font-semi text-black-secondary">
                                                Jemi:
                                            </p>
                                            <p className="text-[18px] font-semi text-black-secondary">
                                                156 TMT
                                            </p>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        {kop.map((item) => {
                            return (
                                <BasketCard text={item.name} img={item.img} />
                            );
                        })}
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}

export default ProductBasketCard;
