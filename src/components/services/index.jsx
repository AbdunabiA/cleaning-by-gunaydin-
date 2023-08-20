import Title from "components/ui/title";
import img1 from 'assets/images/OurServices1.png'
import img2 from "assets/images/OurServices2.png";
import img3 from "assets/images/OurServices3.png";
import img4 from "assets/images/OurServices4.png";
import ThumbUp from "assets/icons/ThumbsUp";
import leftBladder from 'assets/images/OurServicesLeftBladder.png'
import rightBladder from "assets/images/OurServicesRightBladder.png";

const Services = () => {
  return (
    <div className="container">
      <div className="services" id="ourServices">
        <Title text={"Наши услуги"} />
        <h3 className="services__subtitle">
          Мы предоставляем услуги <br />
          <span>профессионального клининга</span>
        </h3>
        <div>
          <div className="services__left-text">
            <h1>SERVICE</h1>
          </div>
          <div>
            <div className="services__left-bladder">
              <img src={leftBladder} alt="" />
            </div>
            <p>
              Наш приоритет - качество и удовлетворение наших клиентов. Мы
              используем профессиональные средства и современное оборудование,
              чтобы достичь безупречных результатов. Наша гибкая система
              ценообразования позволяет выбрать оптимальные услуги,
              соответствующие вашим потребностям и бюджету.
            </p>
            <div className="services__cards">
              <div className="phone-services__left-bladder">
                <img src={leftBladder} alt="" />
              </div>
              <div className="phone-services__right-bladder">
                <img src={rightBladder} alt="" />
              </div>
              <div className="services__card card">
                <div className="card__image">
                  <img src={img1} alt="" />
                </div>
                <div className="card__info">
                  <h4>Мойка Панорамных Окон</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    quibusdam nam culpa dignissimos sint sapiente, illo sed
                    reiciendis nihil.
                  </p>
                  <div>
                    <ThumbUp />
                  </div>
                </div>
              </div>
              <div className="services__card card">
                <div className="card__image">
                  <img src={img2} alt="" />
                </div>
                <div className="card__info">
                  <h4>Мойка фасадов</h4>
                  <p>
                    Мойка фасадов и окон может потребоваться для любых зданий,
                    для частных домов, для торговых и офисных центров, для
                    промышленных предприятий.
                  </p>
                  <div>
                    <ThumbUp />
                  </div>
                </div>
              </div>
              <div className="services__card card">
                <div className="card__image">
                  <img src={img3} alt="" />
                </div>
                <div className="card__info">
                  <h4>Химчистка мягкой мебели</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem adipisci quidem accusamus nisi quia quasi qui
                    temporibus iste eius?
                  </p>
                  <div>
                    <ThumbUp />
                  </div>
                </div>
              </div>
              <div className="services__card card">
                <div className="card__image">
                  <img src={img4} alt="" />
                </div>
                <div className="card__info">
                  <h4>Чистка бассейнов</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur, blanditiis cupiditate similique iusto iste qui
                    nisi ducimus unde alias!
                  </p>
                  <div>
                    <ThumbUp />
                  </div>
                </div>
              </div>
            </div>
            <div className="services__right-bladder">
              <img src={rightBladder} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services