import React from "react";
import style from "./Header.module.css";
import NavLinks from "./NavLinks";
import Search from "./Search";
import logo from "../../../../static/img/instaLogo.png";
function Header() {
  return (
    <div className={style.headerMainWrapper}>
      <div className={style.headerInnerWrapper}>
        <div className={style.imgDiv}>
          <img alt="logo" src={logo} className={style.logoImg} />
        </div>
        <div className={style.searchDiv}>
          <Search />
        </div>
        <div className={style.navLinks}>
          <NavLinks />
        </div>
      </div>
    </div>
  );
}

export default Header;
