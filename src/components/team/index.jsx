import Title from 'components/ui/title'
import im1 from 'assets/images/TeamImg1.png'
import im2 from "assets/images/TeamImg2.png";
import im3 from "assets/images/TeamImg3.png";
import im4 from "assets/images/TeamImg4.png";
import leftBladder from "assets/images/OurServicesLeftBladder.png";
import rightBladder from "assets/images/OurServicesRightBladder.png";

const Team = () => {
  return (
    <div className="container">
      <div className="team" id='ourTeam'>
        <Title text={"Наша команда"} />
        <div>
          <div className="team__left-bladder">
            <img src={leftBladder} alt="" />
          </div>
          <div className="team__cards">
            <div className="team__card">
              <div>
                <img src={im1} alt="" />
              </div>
              <button>
                Дом
                <hr />
                <span>Уборка дома</span>
              </button>
            </div>
            <div className="team__card">
              <div>
                <img src={im2} alt="" />
              </div>
              <button>
                Офис
                <hr />
                <span>Уборка офиса</span>
              </button>
            </div>
            <div className="team__card">
              <div>
                <img src={im3} alt="" />
              </div>
              <button>
                Зеркало
                <hr />
                <span>Мойка окон</span>
              </button>
            </div>
            <div className="team__card">
              <div>
                <img src={im4} alt="" />
              </div>
              <button className="button4">
                <span>Tехник</span>
                <hr />
                Предоставление <br /> технической помощи
              </button>
            </div>
          </div>
          <div className="team__right-bladder">
            <img src={rightBladder} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team