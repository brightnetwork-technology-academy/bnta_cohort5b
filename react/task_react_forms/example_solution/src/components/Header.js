// This component houses the header for the whole site, including the Search functionality
import { useState } from "react";

const Header = ({ filterCakes }) => {

  const [searchTerm, setsearchTerm] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    filterCakes(searchTerm);
  }

  return (
    <header className="header">
      <h1 className="header__title">Recip-EZ</h1>
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item"><a href="#">Home</a></li>
          <li className="navbar__item"><a href="#">About</a></li>
          <li className="navbar__item"><a href="#">Contact</a></li>
        </ul>
      </nav>
      <form className="search" role="search" onSubmit={handleSubmit}>
        <label className="search__label" htmlFor="search__input">Search:</label>
        <input type="search" placeholder="Please type here..." id="search__input" onChange={e => setsearchTerm(e.target.value)}></input>
        <input type="submit" value="Submit" className="search__submit"/>
      </form>
    </header>
  )
}

export default Header