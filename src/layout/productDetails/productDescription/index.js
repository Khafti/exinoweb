import React from "react";
import { AiTwotonePlusCircle } from "react-icons/ai";
import { MdLocalShipping } from "react-icons/md";
import { GrRefresh } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Collapsible from "react-collapsible";
import "react-tabs/style/react-tabs.css";
import "./_productDescription.scss";

const ProductDescription = () => {
  return (
    <>
      <div className="products-details-tab">
        <Tabs>
          <TabList>
            <Tab style={{ borderRadius: 0 }}>
              <span className="products-details-tab_name">
                DESCRIPTION & MATERIALS
              </span>
            </Tab>
            <Tab style={{ borderRadius: 0 }}>
              <span className="products-details-tab_name">PRODUCT DETAILS</span>
            </Tab>
            <Tab style={{ borderRadius: 0 }}>
              <span className="products-details-tab_name">
                SHIPPING & RETURNS
              </span>
            </Tab>
          </TabList>

          <TabPanel>
            <p className="products-details-tab_paragraph">
              Our Inez Initial Necklace - Silver exudes simplicity with a hint
              of sultriness. It’s multifaceted and will surely be a crowd
              pleaser in whichever occasion you wear it to. Your collection of
              personalized accessories will be a notch higher style-wise with a
              valuable addition such as this. You can never go wrong with a
              simple yet meaningful piece of jewelry that was well thought out,
              well designed, and well executed. It's a sophisticated creation to
              top off an attire with.
            </p>
            <p className="products-details-tab_paragraph">
              Customize Me! This silver letter necklace is customizable with up
              to eight letters that are beautifully spaced out to highlight your
              collarbone. How to Make It Yours: Literally make a statement with
              a necklace that reflects your name or your word of choice. How to
              Wear It: Use this initial necklace to accessorize your cut-out
              tops, button-downs, turtlenecks, or even formal dresses一the list
              can go on and on. Layer it with longer necklaces or a choker, to
              give it a stronger, more solid appeal. This piece looks perfect
              stacked with other necklaces with initials, as the mini initial
              necklace.
            </p>
          </TabPanel>
          <TabPanel>
            <div style={{ paddingTop: "16px" }} />
            <div className="products-details-tab_Table">
              <td className="products-details-tab_Table_left">ID:</td>
              <td className="products-details-tab_Table_right">
                114-01-3218-04
              </td>
            </div>
            <div className="products-details-tab_Table">
              <td className="products-details-tab_Table_left">Main Material</td>
              <td className="products-details-tab_Table_right">
                {" "}
                Sterling Silver 0.925
              </td>
            </div>
            <div className="products-details-tab_Table">
              <td className="products-details-tab_Table_left">Chain Type</td>
              <td className="products-details-tab_Table_right"> Cable Chain</td>
            </div>
            <div className="products-details-tab_Table">
              <td className="products-details-tab_Table_left">Chain Length</td>
              <td className="products-details-tab_Table_right"> Adjustable</td>
            </div>
            <div className="products-details-tab_Table">
              <td className="products-details-tab_Table_left">
                Style / Collection
              </td>
              <td className="products-details-tab_Table_right">
                {" "}
                Initial Collection
              </td>
            </div>
          </TabPanel>
          <TabPanel>
            <div style={{ paddingTop: "16px" }} />
            <div className="products-details-tab_TableShipping">
              <div
                style={{ fontWeight: "bold" }}
                className="products-details-tab_TableShipping_left"
              >
                METHOD
              </div>
              <div
                style={{ fontWeight: "bold" }}
                className="products-details-tab_TableShipping_right"
              >
                ESTIMATED US DELIVERY
              </div>
            </div>
            <div className="products-details-tab_TableShipping">
              <div className="products-details-tab_TableShipping_left">
                Free
              </div>
              <div className="products-details-tab_TableShipping_right">
                Get it Sun, May 15 - Thu, May 19
              </div>
            </div>
            <div className="products-details-tab_TableShipping">
              <div className="products-details-tab_TableShipping_left">
                Standard
              </div>
              <div className="products-details-tab_TableShipping_right">
                Get it Sun, May 8 - Tue, May 10
              </div>
            </div>
            <div className="products-details-tab_TableShipping">
              <div className="products-details-tab_TableShipping_left">
                Urgent
              </div>
              <div className="products-details-tab_TableShipping_right">
                Get it Tue, May 3 - Wed, May 4
              </div>
            </div>

            <div style={{ paddingTop: "8px" }} />
            <div className="products-details-tab_TableShipping_bottom_txt">
              <AiTwotonePlusCircle size={8} style={{ marginRight: "4px" }} />
              We ship worldwide! Visit our shipping policy page for
              international delivery times.
            </div>
            <div className="products-details-tab_TableShipping_bottom_txt">
              <AiTwotonePlusCircle size={8} style={{ marginRight: "4px" }} />
              Please note that the estimated delivery mentioned above includes
              production time.
            </div>

            <div className="products-details-tab_TableShipping_bottom_icons">
              <div className="products-details-tab_TableShipping_bottom_icon">
                <MdLocalShipping size={24} />
                <span className="products-details-tab_TableShipping_bottom_icon_txt">
                  Returns
                </span>
              </div>
              <div
                style={{ marginLeft: "24px" }}
                className="products-details-tab_TableShipping_bottom_icon"
              >
                <GrRefresh size={24} />
                <span className="products-details-tab_TableShipping_bottom_icon_txt">
                  Shipping Policy
                </span>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <div className="products-details-mobi_dropdown">
        <Collapsible
          trigger={
            <div className="products-details-mobi_dropdown_header">
              <span>DESCRIPTION & MATERIALS</span>
              <FaChevronDown />
            </div>
          }
        >
          <p className="products-details-mobi_dropdown_paragraph">
            Our Inez Initial Necklace - Silver exudes simplicity with a hint of
            sultriness. It’s multifaceted and will surely be a crowd pleaser in
            whichever occasion you wear it to. Your collection of personalized
            accessories will be a notch higher style-wise with a valuable
            addition such as this. You can never go wrong with a simple yet
            meaningful piece of jewelry that was well thought out, well
            designed, and well executed. It's a sophisticated creation to top
            off an attire with.
          </p>
          <p className="products-details-mobi_dropdown_paragraph">
            Customize Me! This silver letter necklace is customizable with up to
            eight letters that are beautifully spaced out to highlight your
            collarbone. How to Make It Yours: Literally make a statement with a
            necklace that reflects your name or your word of choice. How to Wear
            It: Use this initial necklace to accessorize your cut-out tops,
            button-downs, turtlenecks, or even formal dresses一the list can go
            on and on. Layer it with longer necklaces or a choker, to give it a
            stronger, more solid appeal. This piece looks perfect stacked with
            other necklaces with initials, as the mini initial necklace.
          </p>
          <div style={{ marginBottom: "2rem" }} />
        </Collapsible>
        <Collapsible
          trigger={
            <div className="products-details-mobi_dropdown_header">
              <span>PRODUCT DETAILS</span>
              <FaChevronDown />
            </div>
          }
        >
          <div style={{ paddingTop: "16px" }} />
          <div className="products-details-tab_Table">
            <td className="products-details-tab_Table_left">ID:</td>
            <td className="products-details-tab_Table_right">114-01-3218-04</td>
          </div>
          <div className="products-details-tab_Table">
            <td className="products-details-tab_Table_left">Main Material</td>
            <td className="products-details-tab_Table_right">
              {" "}
              Sterling Silver 0.925
            </td>
          </div>
          <div className="products-details-tab_Table">
            <td className="products-details-tab_Table_left">Chain Type</td>
            <td className="products-details-tab_Table_right"> Cable Chain</td>
          </div>
          <div className="products-details-tab_Table">
            <td className="products-details-tab_Table_left">Chain Length</td>
            <td className="products-details-tab_Table_right"> Adjustable</td>
          </div>
          <div className="products-details-tab_Table">
            <td className="products-details-tab_Table_left">
              Style / Collection
            </td>
            <td className="products-details-tab_Table_right">
              {" "}
              Initial Collection
            </td>
          </div>
          <div style={{ marginBottom: "2rem" }} />
        </Collapsible>
        <Collapsible
          trigger={
            <div className="products-details-mobi_dropdown_header">
              <span>SHIPPING & RETURNS</span>
              <FaChevronDown />
            </div>
          }
        >
          <div style={{ paddingTop: "16px" }} />
          <div className="products-details-tab_TableShipping">
            <div
              style={{ fontWeight: "bold" }}
              className="products-details-tab_TableShipping_left"
            >
              METHOD
            </div>
            <div
              style={{ fontWeight: "bold" }}
              className="products-details-tab_TableShipping_right"
            >
              ESTIMATED US DELIVERY
            </div>
          </div>
          <div className="products-details-tab_TableShipping">
            <div className="products-details-tab_TableShipping_left">Free</div>
            <div className="products-details-tab_TableShipping_right">
              Get it Sun, May 15 - Thu, May 19
            </div>
          </div>
          <div className="products-details-tab_TableShipping">
            <div className="products-details-tab_TableShipping_left">
              Standard
            </div>
            <div className="products-details-tab_TableShipping_right">
              Get it Sun, May 8 - Tue, May 10
            </div>
          </div>
          <div className="products-details-tab_TableShipping">
            <div className="products-details-tab_TableShipping_left">
              Urgent
            </div>
            <div className="products-details-tab_TableShipping_right">
              Get it Tue, May 3 - Wed, May 4
            </div>
          </div>

          <div style={{ paddingTop: "8px" }} />
          <div className="products-details-tab_TableShipping_bottom_txt">
            <AiTwotonePlusCircle size={8} style={{ marginRight: "4px" }} />
            We ship worldwide! Visit our shipping policy page for international
            delivery times.
          </div>
          <div className="products-details-tab_TableShipping_bottom_txt">
            <AiTwotonePlusCircle size={8} style={{ marginRight: "4px" }} />
            Please note that the estimated delivery mentioned above includes
            production time.
          </div>

          <div className="products-details-tab_TableShipping_bottom_icons">
            <div className="products-details-tab_TableShipping_bottom_icon">
              <MdLocalShipping size={24} />
              <span className="products-details-tab_TableShipping_bottom_icon_txt">
                Returns
              </span>
            </div>
            <div
              style={{ marginLeft: "24px" }}
              className="products-details-tab_TableShipping_bottom_icon"
            >
              <GrRefresh size={24} />
              <span className="products-details-tab_TableShipping_bottom_icon_txt">
                Shipping Policy
              </span>
            </div>
          </div>
          <div style={{ marginBottom: "2rem" }} />
        </Collapsible>
      </div>
    </>
  );
};

export default ProductDescription;
