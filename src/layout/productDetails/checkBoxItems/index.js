import React, { useState } from "react";
import { GrDown } from "react-icons/gr";
import "./_checkboxItem.scss";

const CheckboxItems = () => {
  const lengthArrayData = [
    {
      length: 16,
    },
    {
      length: 18,
    },
    {
      length: 24,
    },
  ];

  const [length, setLength] = useState(16);
  const [lenghtChecked, setLengthChecked] = useState(false);

  const [checkedBoxLength, setCheckedBoxLength] = useState(false);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="CheckboxItems">
      <div className="CheckboxItems_header">COMPLETE THE LOOK</div>
      <hr />
      <div className="CheckboxItems_box">
        <input
          defaultChecked={checkedBoxLength}
          onChange={() => setCheckedBoxLength(!checkedBoxLength)}
          type="checkbox"
          className="CheckboxItems_box_checkbox"
        />
        <img
          className="CheckboxItems_box_img"
          src="https://cdn.oakandluna.com/images/Products/m_big_114-12-3075-01.jpg"
          alt=""
        />
        <div className="CheckboxItems_box_details">
          <div className="CheckboxItems_box_details_name">
            BLUE SAPPHIRE STUD EARRINGS WITH CUBIC ZIRCONIA- 14K SOLID GOLD
          </div>
          <div className="CheckboxItems_box_details_price">$100K</div>
        </div>
      </div>
      {/*  */}
      {checkedBoxLength && (
        <>
          <div style={{ marginTop: "2.5rem" }} />
          <div
            onClick={() => {
              setLengthChecked(!lenghtChecked);
            }}
            className="productDetails_right_select"
          >
            <div className="productDetails_right_select_left">
              <div className="productDetails_right_select_title">
                Select number of initials (1-8):
              </div>
              <div className="productDetails_right_select_value">
                {length} "
              </div>
            </div>
            <GrDown />
          </div>
          {lenghtChecked && (
            <div className="productDetails_right_select_option">
              {lengthArrayData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setLength(item.length);
                    setLengthChecked(!lenghtChecked);
                  }}
                  style={{
                    background: item.length === length && "#F4EDE7",
                  }}
                  className="productDetails_right_select_option_value"
                >
                  {item.length} "
                </div>
              ))}
            </div>
          )}
        </>
      )}
      {/* <hr /> */}
      <div className="CheckboxItems_header">IS THIS A GIFT?</div>
      <hr />
      <div className="CheckboxItems_box">
        <input
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
          type="checkbox"
          className="CheckboxItems_box_checkbox"
        />
        <img
          className="CheckboxItems_box_img"
          src="https://cdn.oakandluna.com/images/Products/m_big_106-01-001-01.jpg"
          alt=""
        />
        <div className="CheckboxItems_box_details">
          <div className="CheckboxItems_box_details_name">ADD A GIFT NOTE</div>
          <div className="CheckboxItems_box_details_price">FREE</div>
        </div>
      </div>
      {checked && (
        <div className="CheckboxItems_bottom">
          <div className="CheckboxItems_bottom_title">
            Make it personal with a custom message:
          </div>
          <div className="CheckboxItems_bottom_subtitle">
            (Optional, up to 280 characters)
          </div>
          <div className="CheckboxItems_bottom_txt">
            P.S. Gifts are packed in a gift box and sent without price tags.
            Your receipt will be emailed to you.
          </div>
          <textarea
            className="CheckboxItems_bottom_textarea"
            rows="3"
            name="textarea"
            value={value}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};

export default CheckboxItems;
