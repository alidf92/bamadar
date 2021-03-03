import React from "react";
import Banner from "./../../../images/Banner.jpg";
import FreeSend from "./../../../images/FreeSend.jpg";
import HotFood from "./../../../images/HotFood.jpg";
import styled from "styled-components";

const SliderMain = styled.div`
    padding-top: 140px;
    max-width: 1280px;
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    flex-wrap: wrap;
`;
const SliderD = styled.div`
    direction: ltr !important;
    width: calc(100% + 16px);
    margin: -8px;
    padding: 30px 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
const LeftImg = styled.div`
    flex-grow: 0;
    max-width: 33.333333%;
    flex-basis: 33.333333%;
    margin: -8px;
    padding: 8px;

    width: calc(100% + 16px);
    display: flex;
    flex-wrap: wrap;
`;
const LeftImgStyle = styled.div`
    padding: 8px;
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
    margin: 0;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 4px;
`;

const RightImg = styled.div`
    padding: 8px 0px 0px 12px;
    display: flex;
    flex-grow: 0;
    max-width: 66.666667%;
    flex-basis: 66.666667%;
    cursor: pointer;
    height: 100%;
`;
const SliderHotFood = styled.img`
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
        0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const SliderFreeSend = styled.img`
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
        0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;
const SliderBanner = styled.img`
    border-radius: 4px;
    width: 100% !important;
    height: 100% !important;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
        0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const SliderMob = styled.div``;

const Slider = () => {
    return (
        <>
            <SliderMain className="slider-main">
                <SliderD>
                    <LeftImg>
                        <LeftImgStyle>
                            <SliderHotFood src={HotFood} />
                        </LeftImgStyle>
                        <LeftImgStyle>
                            <SliderFreeSend src={FreeSend} />
                        </LeftImgStyle>
                    </LeftImg>
                    <RightImg>
                        <SliderBanner src={Banner} />
                    </RightImg>
                </SliderD>
            </SliderMain>
            <SliderMob className="slider-mob">
                <SliderBanner src={Banner} />
            </SliderMob>
        </>
    );
};

export default Slider;
