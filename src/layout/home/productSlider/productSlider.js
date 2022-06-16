import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./_productSlider.scss";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const ProductSlider = () => {
  return (
    <>
      {/* For Desktop */}
      <div className="productSliderForDesktop">
        <AutoplaySlider
          // bullets={false}
          className="productSlider"
          cancelOnInteraction={true}
        >
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-2198-09.jpg"
              alt=""
            />
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-3026-09.jpg"
              alt=""
            />
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-05-2191-09.jpg"
              alt=""
            />
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-03-2566-09.jpg"
              alt=""
            />
          </div>
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_101-05-312-09.jpg"
              alt=""
            />
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-2575-09.jpg"
              alt=""
            />
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-2190-09.jpg"
              alt=""
            />
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-2568-09.jpg"
              alt=""
            />
          </div>
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_101-01-817-08.jpg"
              alt=""
            />
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-1405-09.jpg"
              alt=""
            />
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-03-2187-04.jpg"
              alt=""
            />
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-2198-09.jpg"
              alt=""
            />
          </div>
        </AutoplaySlider>
      </div>
      {/* For Laptop/tab */}
      <div className="productSliderForTab">
        <AutoplaySlider
          // bullets={false}
          className="productSlider"
          cancelOnInteraction={true}
        >
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-2198-09.jpg"
              alt=""
            />
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-3026-09.jpg"
              alt=""
            />
          </div>
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-05-2191-09.jpg"
              alt=""
            />
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-03-2566-09.jpg"
              alt=""
            />
          </div>
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_101-05-312-09.jpg"
              alt=""
            />
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-2575-09.jpg"
              alt=""
            />
          </div>
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-2190-09.jpg"
              alt=""
            />
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-2568-09.jpg"
              alt=""
            />
          </div>
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_101-01-817-08.jpg"
              alt=""
            />
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-1405-09.jpg"
              alt=""
            />
          </div>
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-03-2187-04.jpg"
              alt=""
            />
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-2198-09.jpg"
              alt=""
            />
          </div>
        </AutoplaySlider>
      </div>
      {/* For Mobile */}
      <div className="productSliderForMobile">
        <AutoplaySlider
          // bullets={false}
          className="productSlider"
          // cancelOnInteraction={true}
        >
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-2198-09.jpg"
              alt=""
            />
          </div>
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-3026-09.jpg"
              alt=""
            />
          </div>
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-05-2191-09.jpg"
              alt=""
            />
          </div>
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-03-2566-09.jpg"
              alt=""
            />
          </div>
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_101-05-312-09.jpg"
              alt=""
            />
          </div>
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-2575-09.jpg"
              alt=""
            />
          </div>
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-2190-09.jpg"
              alt=""
            />
          </div>
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-2568-09.jpg"
              alt=""
            />
          </div>
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_101-01-817-08.jpg"
              alt=""
            />
          </div>
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-1405-09.jpg"
              alt=""
            />
          </div>
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-03-2187-04.jpg"
              alt=""
            />
          </div>
          <div
            style={{ background: "#fff" }}
            className="productSlider-img-container"
          >
            <img
              className="productSlider-img"
              src="https://cdn.oakandluna.com/images/Products/m_big_110-01-2198-09.jpg"
              alt=""
            />
          </div>
        </AutoplaySlider>
      </div>
    </>
  );
};

export default ProductSlider;
