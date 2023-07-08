import './App.css';
import { Routes, Route } from "react-router-dom";
import Cuisine from './Routes/cuisine';
import Restaurant from './Routes/Restaurant';
import RestaurantDetails from './Routes/RestaurantDetails';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Cuisine/>}/>
        <Route path='/restaurant' element={<Restaurant/>}/>
        <Route path='/restaurant-individual' element={<RestaurantDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
