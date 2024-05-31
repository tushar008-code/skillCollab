/** @format */

import LogoBox from "./components/LogoBox";
import Navbar from "./components/Navbar";
import OptionsBox from "./components/OptionsBox";
import SearchBox from "./components/SearchBox";

function Header() {
  return (
    <header className="h-16 bg-cyan-50 flex items-center mobile:h-32 mobile:bg-white ">
      <div className="container tab:container desktop:container">
        <div className="flex items-center mobile:flex-col mobile:items-start">
          <div className="flex-1">
            <LogoBox />
            <SearchBox />
          </div>
          <Navbar />
          <OptionsBox />
        </div>
      </div>
    </header>
  );
}

export default Header;
