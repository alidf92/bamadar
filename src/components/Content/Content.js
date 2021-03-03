import React from "react";
import BestSeller from "./BestSeller";
import Favorites from "./Favorites";
import OfferSlider from "./OfferSlider";
import Slider from "./Slider/Slider";

function Content() {
    return (
        <div
            style={{
                width: "100%",
                margin: "auto",
                background: "rgb(245, 245, 245)",
            }}
        >
            <Slider />
            <OfferSlider />
            <div className="max-width-slider">
                <BestSeller />
                <Favorites />
            </div>
        </div>
    );
}

export default Content;
