import "./SearchBar.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDriver, searchDriver } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  //verifica si  es uuid
  const isUUID = (value) => {
    const uuidPattern =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    return uuidPattern.test(value);
  };

  //Búsqueda por id y name
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isNaN(input)) {
      dispatch(getDriver(input));
      navigate(`/home/${input}`);
    } else if (isUUID(input)) {
      dispatch(getDriver(input));
      navigate(`/home/${input}`);
    } else {
      dispatch(searchDriver(input));
      navigate(`/home?name=${input}`);
    }
    setInput(""); //limpia con value{}
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          className="input-search-bar"
          value={input}
          onChange={handleChange}
          placeholder=" Enter a name or id..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
