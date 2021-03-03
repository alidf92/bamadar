import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";

const GlobalContainer = styled.div`
    margin-top: 150px;
    background: rgb(245, 245, 245);
    min-height: 100vh;
    flex-grow: 1;
    width: 100%;
    color: rgb(0, 0, 0);
`;
const CardWrapper = styled.div`
    padding-bottom: 60px;
`;

const Alert = styled.div`
    width: 100%;
    direction: rtl;
`;
const AlertDiv = styled.div`
    color: rgb(13, 60, 97);
    background-color: rgb(232, 244, 253);
    display: flex;
    padding: 6px 16px;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.43;
    border-radius: 4px;
    letter-spacing: 0.01071em;
    box-shadow: none;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const AlertIcon = styled.div`
    color: #2196f3;
    margin-left: 10px;
    display: flex;
    opacity: 0.9;
    padding: 7px 0;
    font-size: 22px;
    margin-right: 12px;
`;

const AlertSvg = styled.svg`
    color: rgb(23, 155, 191);
    font-size: inherit;
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
`;

const AlertMsg = styled.div`
    padding: 8px 0;
`;

const MsgHeader = styled.div`
    margin-top: -2px;
    font-weight: 500;
    margin-bottom: 0.35em;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    font-size: 1rem;
`;

const CardItems = styled.div`
    @media only screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        padding: 8px;
        direction: rtl;
    }
`;

const CardItem = styled.div`
    @media only screen and (min-width: 768px) {
        border: 0.0625rem solid rgb(229, 229, 229);
        box-shadow: rgb(230 230 230 / 5%) 0px 0px 0px 0px;
        padding: 0.5rem 1rem 1rem;
        border-radius: 0.25rem;
        background: rgb(255, 255, 255);
    }
    width: 100%;
    border-bottom: 5px solid rgb(239, 238, 243);
    padding: 15px 10px;
    direction: rtl;
`;

const CardInfo = styled.div`
    line-height: 2rem;
    display: flex;
    padding-bottom: 15px;
`;

const InfoImg = styled.img`
    width: 65px;
    height: 65px;
    margin-left: 8px;
`;
const InfoP = styled.p`
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: rgb(63, 63, 63);
`;

const CardPriceBox = styled.div`
    display: grid;
    grid-template-columns: 135px 1fr;
    padding: 0px 15px;
    margin-top: 10px;
`;

const PriceBtns = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    direction: rtl;
    border: 1px solid rgb(178, 178, 178);
    background: rgb(255, 255, 255);
    border-radius: 5px;
    padding: 3px;
    height: auto;
`;
const CardPrice = styled.div`
    display: flex;
    align-items: center;
    padding-right: 30px !important;
    font-weight: 600;
    padding: 0px 5px;
`;

const OptAdd = styled.div`
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;
const OptNum = styled.div`
    font-size: 15px;
    position: relative;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
    padding: 0px 12px;
    border-radius: 5px;
    font-weight: bolder;
    color: rgb(236, 59, 79);
`;

const AddSvg = styled.svg`
    fill: rgb(236, 59, 79);
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
`;
const OptRemove = styled.div`
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

const RemoveSvg = styled.svg`
    fill: rgb(236, 59, 79);
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
`;

function Cart() {
    return (
        <div>
            <Header />
            <GlobalContainer>
                <div>
                    <CardWrapper>
                        <Alert>
                            <AlertDiv>
                                <AlertIcon>
                                    <AlertSvg
                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
                                    </AlertSvg>
                                </AlertIcon>
                                <AlertMsg>
                                    <MsgHeader>زمان دریافت سفارش</MsgHeader>
                                    مدت زمان ثبت سفارش تا دریافت سفارش 2ساعت
                                    خواهد بود
                                </AlertMsg>
                            </AlertDiv>
                        </Alert>
                        <CardItems>
                            <div style={{ cursor: "pointer" }}>
                                <CardItem>
                                    <CardInfo>
                                        <InfoImg src="https://www.bamadar.com/data/uploads/images/2020/3/GH8tEpT7nLساقه طلایی-300.jpg" />
                                        <InfoP>
                                            بیسکوییت ساقه طلایی لیوانی مینو 200
                                            گرمی
                                        </InfoP>
                                    </CardInfo>
                                    <CardPriceBox>
                                        <PriceBtns>
                                            <OptAdd>
                                                <AddSvg
                                                    class="MuiSvgIcon-root"
                                                    focusable="false"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                                                </AddSvg>
                                            </OptAdd>
                                            <OptNum>1</OptNum>
                                            <div>
                                                <OptRemove>
                                                    <RemoveSvg
                                                        class="MuiSvgIcon-root"
                                                        focusable="false"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"></path>
                                                    </RemoveSvg>
                                                </OptRemove>
                                            </div>
                                        </PriceBtns>
                                        <CardPrice>
                                        28,900
                                        ریال
                                        </CardPrice>
                                    </CardPriceBox>
                                </CardItem>
                            </div>
                        </CardItems>
                    </CardWrapper>
                </div>
            </GlobalContainer>
        </div>
    );
}

export default Cart;
