import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { West, ArrowForwardIos, FavoriteBorder } from "@mui/icons-material";
import CategoryCard from "../home/categoryCard";

const Categories = () => {
    const history = useHistory();

    return (
        <div className="w-full inline-flex justify-between pb-10 select-none">
            <div className="w-full">
                <div className="w-full flex items-center">
                    <p className="text-[16px] font-regular text-black-secondary mr-2">
                        Baş sahypa
                    </p>
                    <ArrowForwardIos className="!text-[16px] mt-1 font-regular text-black-secondary mr-2" />
                    <p className="text-[16px] font-regular text-black-secondary mr-2">
                        Görnüşler
                    </p>
                </div>

                <div className="w-full my-6 flex justify-between  items-center">
                    <div className="flex justify-start">
                        <p className="text-[32px] font-semi text-neutral-900 mr-2">
                            Görnüşler
                        </p>
                    </div>
                </div>

                <div className="w-full grid place-items-center gap-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 md2:grid-cols-4 lg:grid-cols-5  xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 6xl:grid-cols-9">
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
                </div>
            </div>
        </div>
    );
};

export default Categories;
