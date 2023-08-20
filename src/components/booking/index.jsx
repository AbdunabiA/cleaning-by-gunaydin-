import Button from "components/ui/button";
import Title from "components/ui/title"
import man from 'assets/images/OrderMan.png'
import leftBladder from 'assets/images/OurServicesLeftBladder.png'
import rightBladder from "assets/images/OurServicesRightBladder.png";

const Booking = () => {
  return (
    <div className="container">
      <div className="booking">
        <div>
          <div className="booking__left-bladder">
            <img src={leftBladder} alt="img" />
          </div>
          <img src={man} alt="" />
          <div className="booking__right-bladder">
            <img src={rightBladder} alt="img" />
          </div>
        </div>
        <div>
          <Title text={"Забронируйте наши услуги клининга сегодня"} />
          <div className="booking-phone__img">
            <div className="booking-phone__left-bladder">
              <img src={leftBladder} alt="img" />
            </div>
            <img src={man} alt="" />
            <div className="booking-phone__right-bladder">
              <img src={rightBladder} alt="img" />
            </div>
          </div>
          <p>
            Мы понимаем, что поддержание чистоты и порядка дома или на рабочем
            месте важно для физического и психического благополучия. Именно
            поэтому мы стремимся предоставлять качественные клининговые услуги,
            отвечающие индивидуальным потребностям каждого нашего клиента.
          </p>
          <p>
            Наша команда профессиональных уборщиков опытна, надежна и любит свою
            работу. Они используют только лучшие методы, методы и продукты для
            уборки, чтобы ваше пространство всегда было безупречным и
            сверкающим.
          </p>
          <Button text={"Свяжитесь с нами"} />
        </div>
      </div>
    </div>
  );
}

export default Booking