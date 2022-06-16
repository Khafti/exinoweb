import React from "react";
import "./_sliderTop.scss";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { useLocation } from "react-router-dom";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const SliderTop = () => {
  const { pathname } = useLocation();
  return (
    <div className="sliderTop" style={{ padding: 0 }}>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={true}
        interval={3000}
        className="sliderTop"
        organicArrows={false}
        bullets={false}
        style={{}}
      >
        <div
          style={{
            background: pathname !== "/" ? "#000" : "#c5a86f",
            zIndex: "999999",
          }}
        >
          Last Chance! Buy Gifts in Time for Mother's Day.
        </div>
        <div
          style={{
            background: pathname !== "/" ? "#000" : "#c5a86f",
            zIndex: "999999",
          }}
        >
          Use Code: Earth
        </div>
        <div
          style={{
            background: pathname !== "/" ? "#000" : "#c5a86f",
            zIndex: "999999",
          }}
        >
          It's Earth Day! Get an Eco Friendly Bag!
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default SliderTop;
