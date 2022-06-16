import React from "react";
import { productsData } from "../../data/productsData";
import Container from "../../components/container";
import CoverImgPage from "../../components/coverImgPage";
import FilterLeftSide from "../../components/productsScreen/filterLeftSide";
import HoleContainerProductScreen from "../../components/productsScreen/holeContainer";
import HrProductsScreen from "../../components/productsScreen/hr";
import ProductCard from "../../components/productsScreen/productCard";
import ProductListRightSide from "../../components/productsScreen/productListRight";
import TopbarRightSide from "../../components/productsScreen/rightSideTopbar";
import SubtitleProductScreen from "../../components/productsScreen/subtitle";
import TitleProductsScreen from "../../components/productsScreen/title";
import "./_products.scss";

const Product = () => {
  return (
    <Container className="products-main-container">
      {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
      <h1 style={{ paddingTop: "136px" }} />
      <CoverImgPage src="https://cdn.oakandluna.com/images/site/All_Jewelry_DT%20copy.jpg" />
      <TitleProductsScreen>ALL TRENDY JEWELRY</TitleProductsScreen>
      <SubtitleProductScreen>
        The easiest way to spruce up your look is by accessorizing with fashion
        jewelry. Discover trendy and unique gold jewelry that perfectly
        complements any season, outfit, and occasion. Read More
      </SubtitleProductScreen>
      <HrProductsScreen />
      <HoleContainerProductScreen>
        <FilterLeftSide />
        <ProductListRightSide>
          <TopbarRightSide />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {productsData.map((item, index) => (
              // <div style={{ width: "100%" }} key={index}>
              <ProductCard productData={item} />
              // </div>
            ))}
          </div>
        </ProductListRightSide>
      </HoleContainerProductScreen>
    </Container>
  );
};

export default Product;
