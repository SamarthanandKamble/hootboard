import useGetCityKey from "../Hooks/useGetCityKey";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInputCity } from "../redux/citySlice";

const UserInput = () => {
  const city = useSelector((state) => state.city?.userInputCity);
  const dispatch = useDispatch();
  useGetCityKey();

  return (
    <div className="input-container">
      <input
        type="search"
        className="input"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => dispatch(updateUserInputCity(e.target.value))}
      />
      <div className="line-breaker">
        <span className="line"></span>
        <span className="line-breaker-text">or</span>
        <span className="line"></span>
      </div>
      <button className="location-btn">Get device location</button>
    </div>
  );
};

export default UserInput;
