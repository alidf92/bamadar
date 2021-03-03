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
function Favorites(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("https://www.bamadar.com/data/api/top_user_sells")
            .then((res) => {
                setData(res.data.data);
            })
            .catch((e) => console.log(e));
    }, []);
    return (
        <Slider>
            <SliderPar>
                محبوب ترین ها
                <SliderParSvg
                    className="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z"></path>
                    <circle cx="6.5" cy="6.5" r="1.5"></circle>
                    <path d="M8.9 12.55c0 .57.23 1.07.6 1.45l3.5 3.5 3.5-3.5c.37-.37.6-.89.6-1.45 0-1.13-.92-2.05-2.05-2.05-.57 0-1.08.23-1.45.6l-.6.6-.6-.59c-.37-.38-.89-.61-1.45-.61-1.13 0-2.05.92-2.05 2.05z"></path>
                </SliderParSvg>
            </SliderPar>
            <SliderDiv>
                <Swiper
                    style={{ marginRight: "48px" }}
                    navigation
                    Scrollbar
                    spaceBetween={5}
                    slidesPerView={5}
                >
                    {data.map((item) => {
                        return (
                            <>
                                <SwiperSlide key={item.id}>
                                    <Card
                                        id={item.id}
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

export default Favorites;
