import React, { useContext } from "react";
import { ImSearch } from "react-icons/im";
import { MdKeyboardVoice } from "react-icons/md";
import useWindowSize from "../../../helpers/useWindowSize";
import { SearchContext } from "../../../context/SearchContext";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";

const SearchBar = () => {
  const { width } = useWindowSize(); // windowSize 안의 width
  const { searchQuery, setSearchQuery, setShowSpecialSearchBar } =
    useContext(SearchContext);

  let navigate = useNavigate();

  const handleChange = (e) => {
    setSearchQuery({
      ...searchQuery,
      input: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchQuery.input !== "") {
      const response = await axios.get(
        `/search?part=snippet&maxResults=10&q=${searchQuery.input}`
      );

      setSearchQuery({
        ...searchQuery,
        videos: response.data.items,
      });

      navigate(`/results/${searchQuery.input}`);
    }
  };

  return (
    <div className={`SearchBar ${width <= 640 ? "smallSearch" : ""}`}>
      {width > 640 ? (
        <form onSubmit={handleSubmit}>
          <input
            value={searchQuery.input}
            type="text"
            name="search"
            placeholder="Search"
            onChange={handleChange}
          />
          <button type="submit">
            <ImSearch
              size={20}
              data-tooltip-content="Search"
              data-tooltip-id="navbar"
            />
          </button>
        </form>
      ) : (
        <button
          className="icon-conatiner searchIcon"
          onClick={() => setShowSpecialSearchBar(true)}
        >
          <ImSearch
            size={20}
            data-tooltip-content="Search"
            data-tooltip-id="navbar"
          />
        </button>
      )}

      <button className="icon-container voiceIcon">
        <MdKeyboardVoice
          size={25}
          data-tooltip-content="Search with your voice"
          data-tooltip-id="navbar"
        />
      </button>
    </div>
  );
};

export default SearchBar;
