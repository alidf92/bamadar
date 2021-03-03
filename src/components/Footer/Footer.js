import React from "react";
import styled from "styled-components";
import map from "./../../images/map.svg";
import support from "./../../images/support.svg";

const FooterMain = styled.div`
    @media only screen and (max-width: 767px) {
        display: none;
    }
`;

const FooterRowOne = styled.div`
    background-color: rgb(14, 51, 104);
    width: 100%;
    direction: rtl;
    color: white;
`;
const RowOneFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    max-width: 77.5rem;
    padding: 1.5rem;
    direction: rtl;
`;
const RowOneSpan = styled.span`
    margin: 0.5em 0px 0.5em 0.5em;
    font-weight: 300;
`;
const RowOneSvg = styled.svg`
    padding: 0px 5px;
    fill: white;
    width: 34px;
    height: 34px;
`;
const FooterRowTwo = styled.div`
    display: flex;
    width: 99vw;
    padding: 10px 20px;
    margin: -12px;
    flex-wrap: wrap;
    direction: ltr !important;
`;

const FooterSupp = styled.div`
    @media only screen and (min-width: 960px) {
        flex-grow: 0;
        max-width: 50% !important;
        flex-basis: 50% !important;
    }
    @media only screen and (min-width: 600px) {
        flex-grow: 0;
        max-width: 100%;
        flex-basis: 100%;
    }
    padding: 12px;
    display: flex;
    text-align: right;
    line-height: 2rem;
    align-items: center;

}
`;
const FooterAddres = styled.div`
    @media only screen and (min-width: 960px) {
        flex-grow: 0;
        max-width: 50% !important;
        flex-basis: 50% !important;
    }
    @media only screen and (min-width: 600px) {
        flex-grow: 0;
        max-width: 100%;
        flex-basis: 100%;
    }
    padding: 12px;
    display: flex;
    text-align: right;
    line-height: 2rem;
    align-items: center;
`;

const FootImg = styled.img`
    display: block;
    margin-left: 24px;
    width: 100%;
    height: 100%;
    max-width: 3rem;
`;

const FootSpanTwo = styled.span`
    color: rgb(14, 51, 104);
    font-weight: bold;
    display: block;
`;

function Footer() {
    return (
        <FooterMain>
            <FooterRowOne>
                <RowOneFlex>
                    <RowOneSpan>
                        ما را در شبکه های اجتماعی دنبال کنید:
                    </RowOneSpan>
                    <RowOneSvg
                        className="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                    </RowOneSvg>
                </RowOneFlex>
            </FooterRowOne>
            <FooterRowTwo>
                <FooterAddres>
                    <FootImg src={map} />
                    <div>
                        <FootSpanTwo>آدرس</FootSpanTwo>
                        <p>
                            دزفول، بلوار پیام آوران، تقاطع آفرینش، شهر تفریحی
                            مادر
                        </p>
                    </div>
                </FooterAddres>
                <FooterSupp>
                    <FootImg src={support} />
                    <div>
                        <FootSpanTwo>پشتیبانی در ساعات کاری</FootSpanTwo>
                        <p>
                            بامادر همه روزه از ساعت 8صبح تا 11:30شب در کنار
                            شماست
                        </p>
                        <p>شماره تماس: 42544444</p>
                    </div>
                </FooterSupp>
            </FooterRowTwo>
        </FooterMain>
    );
}

export default Footer;
