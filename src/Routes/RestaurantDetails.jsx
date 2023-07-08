import React, { useContext, useState } from "react";
import { restaurantsData } from "../data";
import { RestaurantContext } from "../restaurantContext";

export default function RestaurantDetails() {
  const { restaurant } = useContext(RestaurantContext);
  const [reviews, setReviews] = useState([]);

  return (
    <div>
      <ul>
        {restaurantsData
          .filter((item) => item.id === restaurant)
          .map((res) => {
           return  <li>
              <div>
                <h1>{res.name}</h1>
                <p>{res.menu.map((item) => item.name)},</p>
                <p>{res.address}</p>
                <p>Average Rating {res.averageRating}</p>
                <hr />
                <h2>Reviews</h2>

                {/* <ul>
                  {reviews.map((rating) => (
                    <li>
                      <img
                        src={rating.pp}
                        alt=""
                        height="100px"
                        width="100px"
                        style={{ borderRadius: "50%" }}
                      />
                      <p>{rating.revName}</p>
                      <p>{rating.comment}</p>
                      <p>{rating.rating}⭐</p>
                    </li>
                  ))}
                </ul> */}
              </div>
              <button>Add Review</button>
            </li>;
          })}
      </ul>
    </div>
  );
}
