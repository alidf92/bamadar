import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Man from "./../images/man.svg";

const BgColor = styled.div`
    background: rgb(245, 245, 245);
`;
const ProfileMain = styled.div`
    @media only screen and (min-width: 768px) {
        padding-top: 153px;
    }
    display: flex;
    max-width: 1000px;
    margin: auto;
    background: rgb(245, 245, 245);
`;
const ProfLeft = styled.div`
    @media only screen and (min-width: 768px) {
        padding: 8px 16px;
        width: 250px;
        -webkit-box-pack: center;
        justify-content: center;
        background: rgb(255, 255, 255);
    }
    display: grid;
    column-gap: 10px;
    margin: 15px;
    position: relative;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 8%) 0px 1px 15px;
    justify-content: space-between;
    padding: 10px 0px;
`;
const LeftItem = styled.div`
    cursor: pointer;
`;
const SvgDiv = styled.div`
    width: 100%;
    height: 90px;
    border-radius: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
const LeftItemSvg = styled.svg`
    width: 45px;
    height: 90px;
    fill: rgb(23, 155, 191);
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
const LeftP = styled.p`
    text-align: center;
    font-size: 0.8rem;
    margin-top: 5px;
`;
const ProfRight = styled.div`
    @media only screen and (min-width: 768px) {
        width: 100%;
        padding: 16px;
        background: rgb(255, 255, 255);
    }
    line-height: 2rem;
    box-shadow: rgb(0 0 0 / 8%) 0px 1px 15px;
    border-radius: 10px;
    padding: 10px;
    margin: 15px;
    order: -1;
`;
const RightImgDiv = styled.div`
    display: flex;
    justify-content: center;
`;
const RightImg = styled.img``;
const RightDivOne = styled.div``;
const RightDivTwo = styled.div`
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
        0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
    margin: 10px 0px;
`;

const Login = styled.div`
    display: flex;
    padding: 0px 16px;
    min-height: 48px;
    transition: min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: inherit;
    border: 0;
    cursor: pointer;
    margin: 0;
    display: inline-flex;
    outline: 0;
    padding: 0;
    position: relative;
    align-items: center;
    user-select: none;
    border-radius: 0;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
`;

const LoginpDiv = styled.div`
    margin: 12px 0;
    display: flex;
    flex-grow: 1;
    transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const LoginP = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
`;
const LoginSvgDiv = styled.div`
    transform: rotate(0deg);
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    margin-right: -12px;
    flex: 0 0 auto;
    fill: rgba(0, 0, 0, 0.54);
    padding: 12px;
    overflow: visible;
    text-align: center;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 50%;
`;
const LoginSvg = styled.svg`
    width: 1.5em;
    height: 1.5em;
`;

function Profile() {
    return (
        <>
            <Header />
            <BgColor>
                <ProfileMain>
                    <ProfLeft>
                        <LeftItem>
                            <SvgDiv>
                                <LeftItemSvg
                                    className="MuiSvgIcon-root"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
                                </LeftItemSvg>
                            </SvgDiv>
                            <LeftP>آخرین سفارشات</LeftP>
                        </LeftItem>
                        <LeftItem>
                            <SvgDiv>
                                <LeftItemSvg
                                    className="MuiSvgIcon-root"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"></path>
                                </LeftItemSvg>
                            </SvgDiv>
                            <LeftP>آموزش کار با بامادر</LeftP>
                        </LeftItem>
                        <LeftItem>
                            <SvgDiv>
                                <LeftItemSvg
                                    className="MuiSvgIcon-root"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                                </LeftItemSvg>
                            </SvgDiv>
                            <LeftP>تماس با پشتیبانی</LeftP>
                        </LeftItem>
                    </ProfLeft>
                    <ProfRight>
                        <RightDivOne>
                            <RightImgDiv>
                                <RightImg src={Man} />
                            </RightImgDiv>
                        </RightDivOne>
                        <RightDivTwo>
                            <Login>
                                <LoginpDiv>
                                    <LoginP>
                                        ورود به سامانه و ثبت اطلاعات
                                    </LoginP>
                                </LoginpDiv>
                                <LoginSvgDiv>
                                    <LoginSvg
                                        className="MuiSvgIcon-root"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                    </LoginSvg>
                                </LoginSvgDiv>
                            </Login>
                        </RightDivTwo>
                    </ProfRight>
                </ProfileMain>
            </BgColor>
        </>
    );
}

export default Profile;
