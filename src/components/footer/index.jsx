import logo from "assets/icons/Logo.svg";
import Button from "components/ui/button";
import Youtube from "assets/icons/YouTube.svg";
import Telegram from "assets/icons/Telegram.svg";
import Instagram from "assets/icons/Instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer__logo_wrapper">
            <div className="footer__logo">
              <img src={logo} alt="" />
            </div>
            <div className="phone-icons">
              <a href="">
                <img src={Youtube} alt="" />
              </a>
              <a href="">
                <img src={Instagram} alt="" />
              </a>
              <a href="">
                <img src={Telegram} alt="" />
              </a>
            </div>
          </div>

          <nav className="footer__nav">
            <ul>
              <li>
                <a href="#ourServices">Наши услуги</a>
              </li>
              <li>
                <a href="#aboutUs">О нас</a>
              </li>
              <li>
                <a href="#ourTeam">Наша команда</a>
              </li>
              <li>
                <a href="tel:333000057">Свяжитесь с нами</a>
              </li>
            </ul>
          </nav>
          <div>
            <div>
              <p>Телефон для связи:</p>
              <p>333000057</p>
            </div>
            <div>
              <p>Адрес:</p>
              <p>Сергили 5 , 33</p>
            </div>
          </div>
          <div>
            <div className="icons">
              <a href="">
                <img src={Youtube} alt="" />
              </a>
              <a href="">
                <img src={Instagram} alt="" />
              </a>
              <a href="">
                <img src={Telegram} alt="" />
              </a>
            </div>
            <Button text={"Свяжитесь с нами"} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
