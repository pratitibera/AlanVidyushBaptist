import QrImage from "../../img/logos/gq.png";
import TOIImage from "../../img/logos/toi.png";
import RediffImage from "../../img/logos/rediff.png";
import MXPImage from "../../img/logos/mxp.png";
import FEImage from "../../img/logos/fe.png";
import IEImage from "../../img/logos/ie.png";

const CollabSection = () => {
  return (
    <section className="collabs bg-dark d-block d-sm-none">
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <a
              href="https://www.gqindia.com/content/how-to-lose-weight-like-this-23-year-old-nutritionist-who-lost-35-kg-in-just-9-months-weight-loss-inspirations"
              target="_blank"
            >
              <img src={QrImage} className="w-100" />
            </a>
          </div>
          <div className="col-4">
            <a
              href="https://timesofindia.indiatimes.com/life-style/health-fitness/weight-loss/weight-loss-i-was-taunted-by-my-close-friend-for-having-man-boobs/articleshow/67953957.cms"
              target="_blank"
            >
              <img src={TOIImage} className="w-100" />
            </a>
          </div>
          <div className="col-4">
            <a
              href="https://www.rediff.com/getahead/report/fat-to-fit-how-i-lost-30-kg-in-less-than-a-year/20211227.htm"
              target="_blank"
            >
              <img src={RediffImage} className="w-100" />
            </a>
          </div>
          <div className="col-4">
            <a
              href="https://www.mensxp.com/health/motivation/49170-31-days-of-fitness-alan-lost-30-kgs-got-down-to-9-body-fat-doing-things-the-right-way.html"
              target="_blank"
            >
              <img src={MXPImage} className="w-100" />
            </a>
          </div>
          <div className="col-4">
            <a
              href="https://m.facebook.com/story.php?story_fbid=4354644617962440&id=100002508336418"
              target="_blank"
            >
              <img src={FEImage} className="w-100" />
            </a>
          </div>
          <div className="col-4">
            <a
              href="https://m.facebook.com/nfna.education/photos/a.370415893855728/949739359256709/"
              target="_blank"
            >
              <img src={IEImage} className="w-100" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollabSection;
