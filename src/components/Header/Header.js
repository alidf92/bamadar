import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./../../images/Logo.png";

const HeaderM = styled.div`
    display: gird;
    transition: all 250ms ease 0s;
    width: 100%;
    position: fixed;
    z-index: 200;
    top: 0;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
    background-color: rgb(255, 255, 255) !important;
`;
const RowOne = styled.div`
    border-bottom: 0.125rem solid rgb(229, 229, 229);
`;
const RowTwo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 20px;
    max-width: 1366px;
    margin: auto;
    justify-content: space-between;
`;

const DivSearch = styled.div`
    direction: ltr !important;
    max-width: 1366px;
    padding: 19px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: auto;
`;
const ImgLogo = styled.img`
    height: 45px;
    width: 45px;
    cursor: pointer;
`;
const SearchBox = styled.div`
    display: flex;
    align-items: center;
    z-index: 2;
    position: relative;
    width: 36vw;
    height: 40px;
`;

const BtnSearch = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgb(23, 155, 191);
    background-size: 1rem;
    background-repeat: no-repeat;
    background-position: 50% center;
    transition: background-color 0.3s ease-in-out 0s;
    border: 0px;
    border-radius: 0.25rem;
    cursor: pointer;
    outline: 0px;
    text-indent: -9999px;
    overflow: hidden;
    width: 2.3rem;
    z-index: 11;
    height: 40px;
`;

const SvgSearch = styled.svg`
    fill: white;
    z-index: 12;
    position: absolute;
    right: 5px;
    top: 8px;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
`;
const InputSearch = styled.input`
    position: relative;
    display: block;
    width: 100%;
    height: 40px;
    margin: 0px;
    padding: 0.5rem 1rem 0.5rem 2.5rem;
    font-size: 0.875rem;
    font-weight: 400;
    color: rgb(87, 87, 87);
    border: 0.0625rem solid rgb(23, 155, 191);
    border-radius: 0.25rem;
    background-color: rgb(255, 255, 255);
    box-shadow: none;
    appearance: none;
    transition: border 0.3s ease-in-out 0s;
    text-align: right;
    direction: rtl;
`;
const Icons = styled.div`
    display: flex;
    padding: 0px 15px;
    box-sizing: content-box;
    justify-content: space-between;
    align-items: center;
    width: 190px;
    direction: ltr !important;
`;

const Icon = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    text-align: center;
    transition: all 250ms ease 0s;
    cursor: pointer;
`;

const IconSvg = styled.div`
    width: 100%;
    transition: all 150ms ease 0s;
    fill: rgb(255, 255, 255);
    position:relative;
`;

const RowTwoIcons = styled.div`
    display: flex;
    justify-content: space-between;
`;

const RowTwoIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    transition: all 250ms ease 0s;
    border-bottom: 3px solid transparent;
    padding-bottom: 10px;
    cursor: pointer;
`;

const RowTwoSpan = styled.span`
    display: inline-block;
    max-width: 445px;
    max-height: 45px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const RowTwoSvg = styled.svg`
    width: 20px;
    height: 20px;
    margin: 0px 5px;
`;

const HeaderMob = styled.div`
    height: 52px;
    padding: 5px;
    width: 100%;
    max-width: 1000px;
    z-index: 3000;
    position: fixed;
    direction: rtl;
    transition: all 500ms ease 0s;
    border-radius: 5px;
    display: flex;
`;

const MobInput = styled.input`
    width: 100%;
    display: inline-block;
    height: 100%;
    padding-right: 40px;
    outline: none;
    border: none;
    background: rgba(239, 239, 239, 0.7);
    border-radius: 5px;
    font-size: 1rem;
`;
const MobSvg = styled.svg`
    position: absolute;
    fill: currentColor;
    width: 1.62rem;
    height: 1.62rem;
    transform: translateX(-15px) translateY(2px);
    top: 12px;
    opacity: 0.4;
`;
const MobSpan = styled.span`
    opacity: 0.4;
    position: absolute;
    right: 50px;
    top: 12px;
`;

const MobBaMadar = styled.span`
    position: absolute;
    right: 50%;
    transform: translateY(0px) translateX(50%);
    font-size: 18px;
    top: 0.55rem;
`;

const CartBadge = styled.span`
    top: 0;
    right: 0;
    transform: scale(1) translate(50%, -50%);
    transform-origin: 100% 0%;
    color: #fff;
    background-color: #f50057;
    height: 20px;
    display: flex;
    padding: 0 6px;
    z-index: 1;
    position: absolute;
    flex-wrap: wrap;
    font-size: 0.75rem;
    min-width: 20px;
    box-sizing: border-box;
    transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    align-items: center;
    font-weight: 500;
    line-height: 1;
    align-content: center;
    border-radius: 10px;
    flex-direction: row;
    justify-content: center;
`

function Header() {
    return (
        <>
            <HeaderM className="header-nav">
                <RowOne>
                    <DivSearch>
                        <Link className="link-style" to="/">
                            <ImgLogo src={Logo} alt="logo" />
                        </Link>
                        <SearchBox>
                            <BtnSearch>
                                <SvgSearch
                                    className="MuiSvgIcon-root"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                </SvgSearch>
                            </BtnSearch>
                            <InputSearch />
                        </SearchBox>
                        <Icons>
                            <Link className="link-style" to="/order">
                                <Icon>
                                    <IconSvg>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3 11L8.5 5.5L14 11L23 2M23 2H18M23 2V7M3 18V21M8.5 21V15M14 21V18M19.5 21V15"
                                                stroke="#262F56"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <circle
                                                cx="14"
                                                cy="11"
                                                r="2.5"
                                                fill="#262F56"
                                            ></circle>
                                            <circle
                                                cx="8.5"
                                                cy="5.5"
                                                r="2.5"
                                                fill="#262F56"
                                            ></circle>
                                            <circle
                                                cx="3"
                                                cy="11"
                                                r="2.5"
                                                fill="#262F56"
                                            ></circle>
                                        </svg>
                                    </IconSvg>
                                    <p>خط سفارش</p>
                                </Icon>
                            </Link>
                            <Link className="link-style" to="/cart">
                                <Icon>
                                    <IconSvg>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 2.5H2.65424C3.13263 2.5 3.37183 2.5 3.56628 2.58674C3.73771 2.66321 3.88415 2.78638 3.98886 2.94217C4.10763 3.11888 4.14862 3.35454 4.23058 3.82585L4.6087 6M4.6087 6L5.49173 11.0774C5.67091 12.1077 5.7605 12.6228 6.02583 12.9939C6.25945 13.3207 6.58606 13.5695 6.96311 13.708C7.39133 13.8654 7.91176 13.815 8.95264 13.7143L18.614 12.7793C19.6298 12.681 20.1378 12.6318 20.5221 12.4033C20.8653 12.1993 21.1395 11.8972 21.3095 11.536C21.5 11.1314 21.5 10.6211 21.5 9.6005V9.6005C21.5 8.51582 21.5 7.97348 21.2922 7.55394C21.1068 7.17971 20.809 6.8729 20.4404 6.67654C20.0272 6.4564 19.4851 6.44036 18.4009 6.40826L4.6087 6Z"
                                                stroke="#262F56"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <circle
                                                cx="8.5"
                                                cy="19"
                                                r="2"
                                                stroke="#262F56"
                                                strokeWidth="1.8"
                                            ></circle>
                                            <circle
                                                cx="18"
                                                cy="19"
                                                r="2"
                                                stroke="#262F56"
                                                strokeWidth="1.8"
                                            ></circle>
                                        </svg>
                                        <CartBadge>
                                            1
                                        </CartBadge>
                                    </IconSvg>
                                    <p>سبد خرید</p>
                                </Icon>
                            </Link>
                            <Link className="link-style" to="/profile">
                                <Icon>
                                    <IconSvg>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <ellipse
                                                cx="12"
                                                cy="6.5"
                                                rx="4"
                                                ry="4.5"
                                                stroke="#262F56"
                                                strokeWidth="1.8"
                                            ></ellipse>
                                            <path
                                                d="M20 19C20 22.5 16 21.5 12 21.5C8 21.5 4 22.5 4 19C4 17 7.58172 14.5 12 14.5C16.4183 14.5 20 17 20 19Z"
                                                stroke="#262F56"
                                                strokeWidth="1.8"
                                            ></path>
                                        </svg>
                                    </IconSvg>
                                    <p>پروفایل</p>
                                </Icon>
                            </Link>
                        </Icons>
                    </DivSearch>
                </RowOne>
                <RowTwo>
                    <RowTwoIcons>
                        <Link className="link-style" to="/">
                            <RowTwoIcon>
                                <RowTwoSvg
                                    className="MuiSvgIcon-root"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"></path>
                                </RowTwoSvg>
                                <RowTwoSpan>خانه</RowTwoSpan>
                            </RowTwoIcon>
                        </Link>
                        <Link className="link-style" to="/category">
                            <RowTwoIcon>
                                <RowTwoSvg
                                    className="MuiSvgIcon-root"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"></path>
                                </RowTwoSvg>
                                <RowTwoSpan>دسته بندی ها</RowTwoSpan>
                            </RowTwoIcon>
                        </Link>
                    </RowTwoIcons>
                </RowTwo>
            </HeaderM>
            <HeaderMob className="header-mob">
                <MobSvg
                    className="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </MobSvg>
                <MobSpan>جستجو در</MobSpan>
                <MobInput />
                <MobBaMadar>بامـــادر</MobBaMadar>
            </HeaderMob>
        </>
    );
}

export default Header;
