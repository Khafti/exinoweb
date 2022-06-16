import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import StarRatings from "react-star-ratings";
import "./_circleProgressbar.scss";
import ProgressBar from "@ramonak/react-progress-bar";

const CustomerReview = () => {
  const percentage = 3.66;
  return (
    <section className="review">
      <div className="review_header">OUR CUSTOMERS REVIEW</div>
      <div className="review_value">
        <div style={{ width: 124, height: 124 }} className="review_value_left">
          <CircularProgressbar
            className="review_value_left_circle-progress"
            maxValue={5}
            minValue={0}
            strokeWidth={4}
            value={percentage}
            text={`${percentage}`}
            styles={buildStyles({
              pathColor: "#C39A27",
              textColor: "#000",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
        <div>
          <div className="review_value_right">
            <StarRatings
              rating={percentage}
              starDimension="18px"
              starSpacing="1px"
              starRatedColor="#C39A27"
              name="review1"
            />
            <div className="review_value_right_progressbar">
              <ProgressBar
                completed="60"
                height="4px"
                isLabelVisible={false}
                width="100px"
                bgColor="#C39A27"
              />
              <span style={{ marginLeft: "8px", fontSize: "14px" }}>120</span>
            </div>
          </div>
          <div className="review_value_right">
            <StarRatings
              rating={percentage}
              starDimension="18px"
              starSpacing="1px"
              starRatedColor="#C39A27"
              name="review1"
            />
            <div className="review_value_right_progressbar">
              <ProgressBar
                completed="60"
                height="4px"
                isLabelVisible={false}
                width="100px"
                bgColor="#C39A27"
              />
              <span style={{ marginLeft: "8px", fontSize: "14px" }}>73</span>
            </div>
          </div>
          <div className="review_value_right">
            <StarRatings
              rating={percentage}
              starDimension="18px"
              starSpacing="1px"
              starRatedColor="#C39A27"
              name="review1"
            />
            <div className="review_value_right_progressbar">
              <ProgressBar
                completed="60"
                height="4px"
                isLabelVisible={false}
                width="100px"
                bgColor="#C39A27"
              />
              <span style={{ marginLeft: "8px", fontSize: "14px" }}>32</span>
            </div>
          </div>
          <div className="review_value_right">
            <StarRatings
              rating={percentage}
              starDimension="18px"
              starSpacing="1px"
              starRatedColor="#C39A27"
              name="review1"
            />
            <div className="review_value_right_progressbar">
              <ProgressBar
                completed="60"
                height="4px"
                isLabelVisible={false}
                width="100px"
                bgColor="#C39A27"
              />
              <span style={{ marginLeft: "8px", fontSize: "14px" }}>17</span>
            </div>
          </div>
          <div className="review_value_right">
            <StarRatings
              rating={percentage}
              starDimension="18px"
              starSpacing="1px"
              starRatedColor="#C39A27"
              name="review1"
            />
            <div className="review_value_right_progressbar">
              <ProgressBar
                completed="60"
                height="4px"
                isLabelVisible={false}
                width="100px"
                bgColor="#C39A27"
              />
              <span style={{ marginLeft: "8px", fontSize: "14px" }}>13</span>
            </div>
          </div>
        </div>
      </div>

      <div className="review_comment">
        <div className="review_comment_left">
          <div className="review_comment_left_name">
            Audrey C., Lakeland, United States
          </div>
          <div className="review_comment_left_star">
            <StarRatings
              rating={percentage}
              starDimension="20px"
              starSpacing="1px"
              starRatedColor="#C39A27"
              name="review1"
            />
          </div>
          <div className="review_comment_left_comment">
            Arrived on time. Got text message updates. Very pleased with my
            experience. Will order again
          </div>
        </div>
        <div className="review_comment_right">April 2022</div>
      </div>
      <div className="review_comment">
        <div className="review_comment_left">
          <div className="review_comment_left_name">
            Audrey C., Lakeland, United States
          </div>
          <div className="review_comment_left_star">
            <StarRatings
              rating={percentage}
              starDimension="20px"
              starSpacing="1px"
              starRatedColor="#C39A27"
              name="review1"
            />
          </div>
          <div className="review_comment_left_comment">
            Arrived on time. Got text message updates. Very pleased with my
            experience. Will order again
          </div>
        </div>
        <div className="review_comment_right">April 2022</div>
      </div>
      <div className="review_comment">
        <div className="review_comment_left">
          <div className="review_comment_left_name">
            Audrey C., Lakeland, United States
          </div>
          <div className="review_comment_left_star">
            <StarRatings
              rating={percentage}
              starDimension="20px"
              starSpacing="1px"
              starRatedColor="#C39A27"
              name="review1"
            />
          </div>
          <div className="review_comment_left_comment">
            Arrived on time. Got text message updates. Very pleased with my
            experience. Will order again
          </div>
        </div>
        <div className="review_comment_right">April 2022</div>
      </div>
    </section>
  );
};

export default CustomerReview;
