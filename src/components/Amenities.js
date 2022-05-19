import './Amenities.css';
import { 
  MdPark as ParkIcon,
  MdRestaurant as FoodIcon,
  MdAccountBalance as LandmarkIcon, 
  MdShoppingBag as ShopIcon,
} from "react-icons/md";

export default function Amenities() {
  return (
    <div className="amenities">
      <div> 
        <input 
          type="checkbox" 
          id="tree" 
          hidden className="cb-btn"
        />
        <label className="btn btn-dark" for="tree">
          <ParkIcon className="fs-4" /><br></br>Parks
        </label>
        <input 
          type="checkbox" 
          id="bag" 
          hidden className="cb-btn"
        />
        <label className="btn btn-dark" for="bag">
          <ShopIcon className="fs-4" /><br></br>Shops
        </label>
      </div>
      <div>   
        <input 
          type="checkbox" 
          id="landmark" 
          hidden className="cb-btn"
        />
        <label className="btn btn-dark" for="landmark">
          <LandmarkIcon className="fs-4" /><br></br>Landmarks
        </label>
        <input 
          type="checkbox" 
          id="food" 
          hidden className="cb-btn"
        />
        <label className="btn btn-dark" for="food">
          <FoodIcon className="fs-4"/><br></br>Food
        </label>
      </div>
      <div className="fav"> 
        <input 
          type="checkbox" 
          id="fav" 
          hidden className="cb-btn"
          value="Add to Favourites"
        />&nbsp;
        <label className="btn btn-dark fav" for="fav">
          Add to Favourites?
        </label> 
      </div> 
    </div>
  )
}