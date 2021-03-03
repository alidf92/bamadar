import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SwiperCore, { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";
import Card from "./Card";
import axios from "axios";

const Slider = styled.div`
    @media only screen and (min-width: 768px) {
        box-shadow: rgb(0 0 0 / 10%) 0px 2px 4px 0px;
        border-radius: 8px;
        background: rgb(255, 255, 255);
        margin: 16px 0px;
        padding-bottom: 20px;
    }
    width: 100%;
    padding-bottom: 15px;
`;
const SliderPar = styled.p`
    direction: ltr !important;

    display: flex;
    justify-content: flex-end;
    padding: 15px 5px 5px;
    margin-bottom: 15px;
`;
const SliderParSvg = styled.svg`
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
    margin-left: 10px;
`;
const SliderDiv = styled.div``;

SwiperCore.use([Navigation, Scrollbar, A11y]);
function BestSeller(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("https://www.bamadar.com/data/api/top_products")
            .then((res) => {
                setData(res.data.data);
            })
            .catch((e) => console.log(e));
    }, []);
    return (
        <Slider>
            <SliderPar>
                پرفروش ترین ها
                <SliderParSvg
                    className="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M18.36 9l.6 3H5.04l.6-3h12.72M20 4H4v2h16V4zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z"></path>
                </SliderParSvg>
            </SliderPar>
            <SliderDiv>
                <Swiper
                    style={{ marginRight: "48px" }}
                    navigation
                    Scrollbar
                    spaceBetween={50}
                    slidesPerView={5}
                >
                    {data.map((item) => {
                        return (
                            <>
                                <SwiperSlide key={item.id}>
                                    <Card
                                        discount={item.discount}
                                        name={item.name}
                                        price={item.price}
                                        sellprice={item.sell_price}
                                        img={item.images.images.original}
                                    />
                                </SwiperSlide>
                            </>
                        );
                    })}
                </Swiper>
            </SliderDiv>
        </Slider>
    );
}

export default BestSeller;
