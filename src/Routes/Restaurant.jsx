import React, { useContext } from "react";
import { RestaurantContext } from "../restaurantContext";
import { restaurantsData } from "../data";
export default function Restaurant() {
  const { cuisine, handleRestaurant } = useContext(RestaurantContext);

  return (
    <div>
      <ul>
        {restaurantsData
          .filter((item) => item.cuisine_id === cuisine)
          .map((res) => (
            <li type="none">
              <h1
                onClick={() => handleRestaurant(res.id)}
                style={{ cursor: "pointer" }}
              >
                {res.name}
              </h1>
              <p>Dishes by {res.name}</p>
              <ul>
                {res.menu.map((dish) => (
                  <li
                    onClick={() => handleRestaurant(res.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={dish.imgSrc}
                      alt=""
                      height="200px"
                      width="200px"
                    />
                    <p>{dish.name}</p>
                    <p>
                      {dish.qty} from Rs {dish.price}
                    </p>
                    <p
                      onClick={() => handleRestaurant(res.id)}
                      style={{ cursor: "pointer" }}
                    >
                      {res.name}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
}
