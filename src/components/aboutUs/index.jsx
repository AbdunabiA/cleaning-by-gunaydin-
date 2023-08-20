import Button from "components/ui/button";
import Title from "components/ui/title"
import bigImg from 'assets/images/AboutUsBigImg.png'
import img1 from 'assets/images/AboutUs1.png'
import img2 from "assets/images/AboutUs2.png";
import img3 from "assets/images/AboutUs3.png";
import img4 from "assets/images/AboutUs4.png";
import img5 from "assets/images/AboutUs5.png";
import img6 from "assets/images/AboutUs6.png";
import img7 from "assets/images/AboutUs7.png";
import img8 from "assets/images/AboutUs8.png";
import img9 from "assets/images/AboutUs9.png";
import img10 from "assets/images/AboutUs10.png";
import img11 from "assets/images/AboutUs11.png";
import leftBladder from 'assets/images/OurServicesLeftBladder.png'


const AboutUs = () => {
  return (
    <div className="container">
      <div className="about-us" id="aboutUs">
        <Title text={"О нас"} />
        <div className="about-us_flex">
          <div className="about-us__left">
            <h2>Качественно и быстро</h2>
            <p>
              В клининговой службе мы ставим удовлетворение наших клиентов
              превыше всего. Именно поэтому мы стремимся предоставлять свои
              услуги с улыбкой и доброжелательным отношением. Мы понимаем, что
              каждый клиент уникален, и уделяем время тому, чтобы выслушать ваши
              потребности и предпочтения. Наша цель — предоставлять услуги
              личной уборки, которые каждый раз превосходят ваши ожидания.
            </p>
            <Button text={"Свяжитесь с нами"} />
          </div>
          <div className="about-us__right">
            <div className="about-us__bladder">
                <img src={leftBladder} alt="" />
            </div>
            <div className="about-us_grid">
              <div>
                <img src={bigImg} alt="" />
              </div>
              <div>
                <img src={img1} alt="" />
              </div>
              <div>
                <img src={img2} alt="" />
              </div>
              <div className="grid3">
                <img src={img3} alt="" />
              </div>
              <div className="grid4">
                <img src={img4} alt="" />
              </div>
              <div>
                <img src={img5} alt="" />
              </div>
              <div>
                <img src={img6} alt="" />
              </div>
              <div>
                <img src={img7} alt="" />
              </div>
              <div>
                <img src={img8} alt="" />
              </div>
              <div>
                <img src={img9} alt="" />
              </div>
              <div>
                <img src={img10} alt="" />
              </div>
              <div>
                <img src={img11} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs