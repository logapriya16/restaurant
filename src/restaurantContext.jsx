import React, { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const RestaurantContext = createContext();

export default function RestaurantProvider({ children }) {
  const [cuisine, setCuisine] = useState(0);
  const [restaurant, setRestaurant] = useState(0);
  const navigate = useNavigate();
  const handleCuisine = (cuisine_id) => {
    setCuisine(cuisine_id);
    navigate("/restaurant");
  };
  const handleRestaurant = (res_id) => {
    setRestaurant(res_id);
    navigate("/restaurant-individual");
  };
  
  return (
    <RestaurantContext.Provider
      value={{ cuisine, restaurant, handleCuisine, handleRestaurant }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}
