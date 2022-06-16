import React, { useState } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaSlidersH } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import "./_filterLeftSide.scss";

const FilterLeftSide = ({ toggleFilter, setToggleFilter }) => {
  const [state, setState] = useState([
    { name: "Necklaces", quantity: 78, select: false },
    { name: "Rings", quantity: 33, select: false },
    { name: "Earrings", quantity: 22, select: false },
    { name: "Bracelets", quantity: 21, select: false },
    { name: "Gold Plated", quantity: 47, select: false },
    { name: "Gold Vermeil", quantity: 16, select: false },
    { name: "14k Yellow Gold", quantity: 10, select: false },
    { name: "10k Yellow Gold", quantity: 3, select: false },
  ]);

  const handleState = (Name, currentSelect) => {
    setState(
      state.map((item) =>
        item.name === Name ? { ...item, select: !currentSelect } : { ...item }
      )
    );
  };

  const handleClearAll = () => {
    setState(
      state.map((item) =>
        item.select === true ? { ...item, select: false } : { ...item }
      )
    );
  };

  const findSelectedItems = state.find((item) => item.select);
  return (
    <>
      <div className={toggleFilter ? "toggleFilter" : "filterLeftSide"}>
        <div className="filterLeftSide_headerContainer">
          <div
            className={
              toggleFilter ? "toggleFilter_header" : "filterLeftSide_header"
            }
          >
            {toggleFilter ? (
              <span
                onClick={() => {
                  setToggleFilter(!toggleFilter);
                }}
                className="toggleFilter_header__closeIcon"
              >
                <GrClose size={24} />
              </span>
            ) : (
              <FaSlidersH style={{ marginRight: "10px" }} />
            )}
            FILTERS
          </div>

          {findSelectedItems?.select && (
            <div onClick={handleClearAll} className="filterLeftSide_clear-all">
              Clear all
            </div>
          )}
        </div>
        <>
          {findSelectedItems?.select && <hr style={{ margin: "14px 0" }} />}

          <div className="filterLeftSide_select">
            {state.map((item, index) => (
              <>
                {item.select && (
                  <div key={index} className="filterLeftSide_select_item">
                    {item.name}
                    <IoClose
                      onClick={() => {
                        handleState(item.name, item.select);
                      }}
                      style={{ marginLeft: "4px", cursor: "pointer" }}
                    />
                  </div>
                )}
              </>
            ))}
          </div>
        </>
        <hr style={{ margin: "14px 0" }} />
        <div className="filterLeftSide_title">Categories</div>
        {state.slice(0, 4).map((item, index) => (
          <div key={index} className="filterLeftSide_container">
            {!item.select ? (
              <MdCheckBoxOutlineBlank />
            ) : (
              <RiCheckboxBlankFill />
            )}
            <div
              onClick={() => {
                handleState(item.name, item.select);
              }}
              className={
                toggleFilter ? "toggleFilter_item" : "filterLeftSide_item"
              }
            >
              {item.name}{" "}
              <span style={{ color: "gray" }}>({item.quantity})</span>
            </div>{" "}
          </div>
        ))}
        <hr style={{ margin: "14px 0" }} />
        <div className="filterLeftSide_title">Material</div>
        {state.slice(4, 8).map((item, index) => (
          <div key={index} className="filterLeftSide_container">
            {!item.select ? (
              <MdCheckBoxOutlineBlank />
            ) : (
              <RiCheckboxBlankFill />
            )}
            <div
              onClick={() => {
                handleState(item.name, item.select);
              }}
              className={
                toggleFilter ? "toggleFilter_item" : "filterLeftSide_item"
              }
            >
              {item.name}{" "}
              <span style={{ color: "gray" }}>({item.quantity})</span>
            </div>
          </div>
        ))}

        {toggleFilter && (
          <>
            <div style={{ marginBottom: "180px" }} />
            <div className="toggleFilter_viewItems">
              <button
                onClick={() => {
                  setToggleFilter(!toggleFilter);
                }}
              >
                View items (33)
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FilterLeftSide;
