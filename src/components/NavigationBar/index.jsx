import React, { useContext } from "react";
import { ImSearch } from "react-icons/im";
import { MdKeyboardVoice } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import LeftNav from "./LeftNav";
import SearchBar from "./SearchBar";
import RightNav from "./RightNav";
import useWindowSize from "../../helpers/useWindowSize";
import { SearchContext } from "../../context/SearchContext";

const NavigationBar = () => {
  const { width } = useWindowSize(); // windowSize 안의 width
  const { showSpecialSearchBar, setShowSpecialSearchBar } =
    useContext(SearchContext);

  const spacialSearchBarRender = (
    <div className="special_searchbar">
      <button onClick={() => setShowSpecialSearchBar(false)}>
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
      {width <= 640 && showSpecialSearchBar ? (
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
