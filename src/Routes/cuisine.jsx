import React, { useContext } from "react";
import { RestaurantContext } from "../restaurantContext";
import {cuisineData} from "../data"
export default function Cuisine() {
  const {  handleCuisine } = useContext(RestaurantContext);
  return (
    <div>
      <h1>Food Ordering App</h1>
      <h3>Select Your Cuisine</h3>
      <ul>
        {cuisineData.map((type) => (
          <div
            key={type.id}
            onClick={() => {
              handleCuisine(type.id);              
            }}
            style={{cursor:"pointer"}}
          >
            {type.name}
          </div>
        ))}
      </ul>
    </div>
  );
}
