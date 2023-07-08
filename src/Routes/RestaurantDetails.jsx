import React, { useContext, useState } from "react";
import { restaurantsData } from "../data";
import { RestaurantContext } from "../restaurantContext";

export default function RestaurantDetails() {
  const { restaurant } = useContext(RestaurantContext);
  const [displayform, setDisplayform] = useState(false);
  const [reviews, setReviews] = useState([
    {
      rating: "",
      comment: "",
      pp: "",
      revName: "",
    },
  ]);
  const [rating, setRating] = useState(0);
  const [details, setDetails] = useState("");
  const handleNewReview = () => {
    setReviews(
    [{  rating: rating,
      comment: details,
      pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
      revName: "new-user",}]
    );
  };
  console.log(reviews);
  return (
    <div>
      <ul>
        {restaurantsData
          .filter((item) => item.id === restaurant)
          .map((res) => {
            return (
              <li>
                <div>
                  <h1>{res.name}</h1>
                  <p>{res.menu.map((item) => item.name)},</p>
                  <p>{res.address}</p>
                  <p>Average Rating {res.averageRating}</p>
                  <hr />
                  <h2>Reviews</h2>

                  <ul>
                    {res.ratings.map((rating) => (
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
                  </ul>
                </div>
              </li>
            );
          })}
      </ul>
      <ul>
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
      </ul>
      <button onClick={() => setDisplayform(true)}>Add Review</button>
      <div style={{ display: displayform ? "block" : "none" }}>
        <div>
          <label>Rating</label>
          <select onClick={(e) => setRating(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Comment</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="share your review"
            onChange={(e) => setDetails(e.target.value)}
          />
          <button
            onClick={() => {
              setDisplayform(false);
              handleNewReview();
            }}
          >
            Add Review
          </button>
        </div>
      </div>
    </div>
  );
}
