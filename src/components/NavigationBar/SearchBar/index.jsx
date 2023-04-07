import React from "react";
import { ImSearch as SearchIcon } from "react-icons/im";
import { MdKeyboardVoice as VoiceIcon } from "react-icons/md";
import useWindowSize from "../../../helpers/useWindowSize";

const SearchBar = () => {
  const { width } = useWindowSize(); // windowSize 안의 width

  return (
    <div className={`SearchBar ${width <= 640 ? "smallSearch" : ""}`}>
      {width > 640 ? (
        <form>
          <input type="text" name="search" placeholder="Search" />
          <button type="submit">
            <SearchIcon
              size={20}
              data-tooltip-content="Search"
              data-tooltip-id="navbar"
            />
          </button>
        </form>
      ) : (
        <button className="icon-conatiner searchIcon">
          <SearchIcon
            size={20}
            data-tooltip-content="Search"
            data-tooltip-id="navbar"
          />
        </button>
      )}

      <button className="icon-container voiceIcon">
        <VoiceIcon
          size={25}
          data-tooltip-content="Search with your voice"
          data-tooltip-id="navbar"
        />
      </button>
    </div>
  );
};

export default SearchBar;
