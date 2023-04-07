import React from "react";
import { ImSearch } from "react-icons/im";
import { MdKeyboardVoice } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import LeftNav from "./LeftNav";
import SearchBar from "./SearchBar";
import RightNav from "./RightNav";
import useWindowSize from "../../../helpers/useWindowSize";

const NavigationBar = () => {
  const { width } = useWindowSize(); // windowSize 안의 width

  const spacialSearchBarRender = (
    <div className="'spacile_searchbar">
      <button>
        <BiArrowBack size={25} />
      </button>

      <form>
        <input type="text" name="search" placeholder="Search" />

        <button>
          <ImSearch size={20} />
        </button>
      </form>
      <button className="icon-container voiceIcon">
        <MdKeyboardVoice size={25} />
      </button>
    </div>
  );

  return (
    <nav className="Navbar">
      {width <= 640 ? (
        spacialSearchBarRender
      ) : (
        <React.Fragment>
          <LeftNav />
          <SearchBar />
          <RightNav />
        </React.Fragment>
      )}
    </nav>
  );
};

export default NavigationBar;
