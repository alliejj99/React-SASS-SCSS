/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { ImSearch } from "react-icons/im";
import { MdKeyboardVoice } from "react-icons/md";
import useWindowSize from "../../../helpers/useWindowSize";
import { SearchContext } from "../../../context/SearchContext";

const SearchBar = ({ onChange, onSubmit }) => {
  const { width } = useWindowSize(); // windowSize 안의 width
  const { searchQuery, setShowSpecialSearchBar } = useContext(SearchContext);

  return (
    <div className={`SearchBar ${width <= 640 ? "smallSearch" : ""}`}>
      {width > 640 ? (
        <form onSubmit={onSubmit}>
          <input
            value={searchQuery.input}
            type="text"
            name="search"
            placeholder="Search"
            onChange={onChange}
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
