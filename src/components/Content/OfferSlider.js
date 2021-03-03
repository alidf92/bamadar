import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";
import Card from "./Card";
import Promo from "./../../images/promo1.png";
import styled from "styled-components";
import axios from "axios";

SwiperCore.use([Navigation, Scrollbar, A11y]);
const PromoDiv = styled.div`
    margin-top: -18px;
    background: rgb(0, 48, 88);
    width: 100%;
    padding: 15px 10px;
`;
const PromoImg = styled.img`
    width: 160px;
    height: 250px;
`;

function OfferSlider() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("https://www.bamadar.com/data/api/get_promotions")
            .then((res) => {
                setData(res.data.data);
            })
            .catch((e) => console.log(e));
    }, []);
    return (
        <PromoDiv>
            <Swiper navigation Scrollbar spaceBetween={5} slidesPerView={6}>
                <SwiperSlide>
                    <PromoImg src={Promo} alt="Promo" />
                </SwiperSlide>

                {data.map((item) => {
                        return (
                                <SwiperSlide key={item.id}>
                                <Card
                                    discount={item.discount}
                                    name={item.name}
                                    price={item.price}
                                    sellprice={item.sell_price}
                                    img={item.images.images.original}
                                />
                            </SwiperSlide>
                    );
                })}

            </Swiper>
        </PromoDiv>
    );
}
export default OfferSlider;
