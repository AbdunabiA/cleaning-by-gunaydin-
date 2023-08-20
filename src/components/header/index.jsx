import logo from "assets/icons/Logo.svg";
import rusFlag from "assets/icons/RUS.svg";
import woman from "assets/images/HeaderWoman.png";
import Button from "components/ui/button";
import leftBladder from "assets/images/headerLeftBladder.png";
import rightBladder from "assets/images/headerRightBladder.png";
import UzFlag from "assets/icons/Uzb.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import humburger from "assets/icons/Humburger.png";

const Header = () => {
  const [langOpen, setLangOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const [menu, setMenu] = useState(false);
  return (
    <header>
      <div className="bladder-left">
        <img src={leftBladder} alt="img" />
      </div>
      {/* {menu ? ( */}
        <div
          className={`phone-menu ${menu ? 'active' : ''}`}
          id="menu-cover"
          onClick={(e) => {
            if (e.target.id === "menu-cover") {
              setMenu(false);
            }
          }}
        >
          <div className="menu">
            <div>
              <h3 onClick={() => setMenu(false)}>X</h3>
            </div>
            <ul>
              <li onClick={() => setMenu(false)}>
                <a href="#ourServices">{t("Наши услуги")}</a>
              </li>
              <li onClick={() => setMenu(false)}>
                <a href="#aboutUs">{t("О нас")}</a>
              </li>
              <li onClick={() => setMenu(false)}>
                <a href="#ourTeam">{t("Наша команда")}</a>
              </li>
              <li onClick={() => setMenu(false)}>
                <a href="tel:+998333000057">{t("Свяжитесь с нами")}</a>
              </li>
              <li onClick={() => i18n.changeLanguage("ru")}>RU</li>
              <li onClick={() => i18n.changeLanguage("uz")}>UZ</li>
            </ul>
          </div>
        </div>
      {/* ) : null} */}

      <div className="container">
        <nav className="navbar">
          <div className="navbar__logo">
            <img src={logo} alt="logo" />
          </div>
          <a className="number" href="tel:333000057">
            333000057
          </a>
          <div className="humburger" onClick={() => setMenu(true)}>
            <img src={humburger} alt="" />
          </div>
          <ul>
            <li>
              <a href="#ourServices">{t("Наши услуги")}</a>
            </li>
            <li>
              <a href="#aboutUs">{t("О нас")}</a>
            </li>
            <li>
              <a href="#ourTeam">{t("Наша команда")}</a>
            </li>
            <li>
              <a href="tel:+998333000057">{t("Свяжитесь с нами")}</a>
            </li>
          </ul>
          <div className="nav-flag__wrapper">
            <div className="nav-flag" onClick={() => setLangOpen(!langOpen)}>
              <img src={i18n.language == "uz" ? UzFlag : rusFlag} alt="" />
            </div>
            {langOpen ? (
              <div
                className="language-options__wrapper"
                id="cover"
                onClick={(e) => {
                  if (e.target.id === "cover") {
                    setLangOpen(false);
                  }
                }}
              >
                <div className="container">
                  <div className="options_place">
                    <div className="language-options">
                      <div
                        className="option"
                        onClick={() => {
                          i18n.changeLanguage("ru");
                          setLangOpen(false);
                        }}
                      >
                        <h4>RU</h4>
                        <div>
                          <img src={rusFlag} alt="" />
                        </div>
                      </div>
                      <div
                        className="option"
                        onClick={() => {
                          i18n.changeLanguage("uz");
                          setLangOpen(false);
                        }}
                      >
                        <h4>UZ</h4>
                        <div>
                          <img src={UzFlag} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </nav>

        <div className="header">
          <div className="header__left">
            <h1>Сделайте свое помещение чистым и блестящим</h1>
            <p>Профессиональный клининг для вашего дома и компании</p>
            <Button text={"Свяжитесь с нами"} />
          </div>
          <div className="header__right">
            <img src={woman} alt="" />
          </div>
        </div>
      </div>

      <div className="bladder-right">
        <img src={rightBladder} alt="" />
      </div>
    </header>
  );
};

export default Header;
