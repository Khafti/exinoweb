import React, { useState } from "react";
import FilterLeftSide from "../filterLeftSide";
import "./_topbarRightSide.scss";

const TopbarRightSide = () => {
  const [toggleFilter, setToggleFilter] = useState(false);

  return (
    <>
      <div className="topbarRightSide">
        <span className="topbarRightSide_quantity">111 items</span>
        <span
          onClick={() => {
            setToggleFilter(!toggleFilter);
          }}
          className="topbarRightSide_filters"
        >
          Filters
        </span>
        <span>
          <span className="topbarRightSide_title">Sort-By:</span>
          <span className="topbarRightSide_select">
            <select className="topbarRightSide_select_tag" name="" id="">
              <option value="volvo">Featured</option>
              <option value="saab">What's New</option>
              <option value="mercedes">Lowest Price</option>
              <option value="audi">Highest Price</option>
            </select>
          </span>
        </span>
      </div>
      <div>
        <span className="topbarRightSide_quantity_mobi">111 items</span>
      </div>

      {toggleFilter && (
        <FilterLeftSide
          setToggleFilter={setToggleFilter}
          toggleFilter={toggleFilter}
        />
      )}
    </>
  );
};

export default TopbarRightSide;
