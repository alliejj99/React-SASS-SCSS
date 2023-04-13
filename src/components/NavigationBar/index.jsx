import React, { useContext } from "react";
import { ImSearch } from "react-icons/im";
import { MdKeyboardVoice } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import LeftNav from "./LeftNav";
import SearchBar from "./SearchBar";
import RightNav from "./RightNav";
import useWindowSize from "../../helpers/useWindowSize";
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";

const NavigationBar = () => {
  const { width } = useWindowSize(); // windowSize 안의 width
  const {
    showSpecialSearchBar,
    setShowSpecialSearchBar,
    searchQuery,
    setSearchQuery,
  } = useContext(SearchContext);

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

  const spacialSearchBarRender = (
    <div className="special_searchbar">
      <button onClick={() => setShowSpecialSearchBar(false)}>
        <BiArrowBack size={25} />
      </button>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={searchQuery.input}
          type="text"
          name="search"
          placeholder="Search"
        />
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
          <SearchBar onChange={handleChange} onSubmit={handleSubmit} />
          <RightNav />
        </React.Fragment>
      )}
    </nav>
  );
};

export default NavigationBar;
