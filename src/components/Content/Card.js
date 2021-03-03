import { useState } from "react";
import styled from "styled-components";
const CarD = styled.div`
    width: 206px;
    height: 100%;
    background: rgb(255, 255, 255);
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 9px;
    padding: 8px;
    position: relative;
    box-shadow: rgb(0 0 0 / 5%) -5px 10px 20px;
    width: 165px;
    min-height: 250px;
    border: 1px solid rgb(218, 218, 218);
    cursor: pointer;
`;
const CradPlusD = styled.div`
    position: absolute;
    right: -1px;
    top: -1px;
    z-index: 15;
`;

const CradPlus = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    direction: rtl;
    border: 1px solid rgb(23, 155, 191);
    background: rgb(23, 155, 191);
    border-bottom-left-radius: 15px;
    border-top-right-radius: 10px;
    padding: 0px 5px;
    height: 50px;
`;
const Plus = styled.div`
    width: 20px;
    height: 18px;
    transform: translateY(1px);
    display: flex;
    align-items: center;
`;

const PlusSvg = styled.svg`
    width: 100%;
    height: 100%;
    fill: rgb(255, 255, 255);
`;
const CardImgPar = styled.div`
    width: 100%;
`;
const CardImgDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 124px;
    margin-bottom: 10px;
    z-index: 0;
    position: relative;
    width: 145px;
`;

const CardImg = styled.img`
    display: block;
    width: 120px;
    height: 100%;
    pointer-events: none;
`;

const CardPriceDiv = styled.div`
    display: grid;
    font-size: 0.857rem;
    line-height: 1.833;
    font-weight: 300;
    flex-wrap: wrap;
    color: rgb(66, 66, 66);
    width: 100%;
`;
const CardImgP = styled.p`
    font-size: 0.85rem;
    line-height: 22px;
    height: 42px;
    color: rgb(42, 42, 42);
    overflow: hidden;
    margin-bottom: 5px;
    text-overflow: ellipsis;
    display: grid;
    -webkit-box-align: center;
    align-items: center;
`;
const SellPrice = styled.div`
    display: flex;
    direction: rtl;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;
const SellP = styled.div`
    font-weight: 600;
    padding: 0px 5px;
`;

const SellDiscount = styled.div`
    width: 45px;
    height: 22px;
    left: 273px;
    top: 1147px;
    background: rgb(236, 59, 79);
    border-radius: 8px;
    text-align: center;
    color: rgb(255, 255, 255);
`;

const Price = styled.div`
    font-weight: 600;
    padding: 0px 5px;
    text-decoration: line-through;
    opacity: 0.5;
    font-size: 12.5px;
`;

const CardAdd = styled.div`
    position: absolute;
    right: -1px;
    top: -1px;
    z-index: 15;
`;

const CardAddOpt = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    direction: rtl;
    border: 1px solid rgb(23, 155, 191);
    background: rgb(255, 255, 255);
    border-bottom-left-radius: 15px;
    border-top-right-radius: 10px;
    padding: 0px 5px;
    height: 50px;
`;

const AddBtn = styled.div`
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;
const AddBtnSvg = styled.svg`
    fill: rgb(23, 155, 191);
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
`;

const AddNum = styled.div`
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
    color: rgb(23, 155, 191);
`;
const AddSvgD = styled.div`
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

const AddSvg = styled.svg`

    fill: rgb(23, 155, 191);
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
`

function Card(props) {
    const imgsrc = "https://www.bamadar.com/data" + props.img;
    const [discountStatus, setDiscountStatus] = useState(false);
    const [itemStatus, setItemStatus] = useState("");
    const [addStatus, setAddStatus] = useState(false);
    const [num , setNum] = useState(0);


    const addItemHandler = (e) => {
        setItemStatus(props.id);
        setAddStatus(true);
    };
    const removeHandler = e => {
        setAddStatus(false);
        setNum(0)
    }
    const addNumHandler = e => {
        setNum(num +1)
    }
    return (
        <CarD>
            {
                !addStatus ? 
                <CradPlusD>
                <CradPlus>
                    <Plus onClick={addItemHandler}>
                        <PlusSvg
                            viewBox="0 0 512 512"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="none"
                        >
                            <path d="m437.332031 192h-160v-160c0-17.664062-14.335937-32-32-32h-21.332031c-17.664062 0-32 14.335938-32 32v160h-160c-17.664062 0-32 14.335938-32 32v21.332031c0 17.664063 14.335938 32 32 32h160v160c0 17.664063 14.335938 32 32 32h21.332031c17.664063 0 32-14.335937 32-32v-160h160c17.664063 0 32-14.335937 32-32v-21.332031c0-17.664062-14.335937-32-32-32zm0 0"></path>
                        </PlusSvg>
                    </Plus>
                </CradPlus>
            </CradPlusD>
         :<CardAdd>
                <CardAddOpt>
                    <AddBtn>
                        <AddBtnSvg
                        onClick={addNumHandler}
                            className="MuiSvgIcon-root"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                        </AddBtnSvg>
                    </AddBtn>
                    <AddNum>{num}</AddNum>
                    <div>
                        <div style={{ cursor: "pointer" }}>
                            <AddSvgD>
                            <AddSvg
                            onClick={removeHandler}
                                className="MuiSvgIcon-root"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"></path>
                            </AddSvg>
                            </AddSvgD>
                        </div>
                    </div>
                </CardAddOpt>
            </CardAdd>
}
            <div>
                <CardImgPar>
                    <CardImgDiv>
                        <CardImg src={imgsrc} />
                    </CardImgDiv>
                    <CardImgP>{props.name}</CardImgP>
                </CardImgPar>
                <CardPriceDiv>
                    <SellPrice>
                        <SellP>
                            {props.sellprice}
                            ریال
                        </SellP>
                        <SellDiscount
                            className={props.discount === 0 ? "dis-none" : ""}
                        >
                            {props.discount} %
                        </SellDiscount>
                    </SellPrice>
                    <Price>35000</Price>
                </CardPriceDiv>
            </div>
        </CarD>
    );
}

export default Card;
