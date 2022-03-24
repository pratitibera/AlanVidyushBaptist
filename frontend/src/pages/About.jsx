/* eslint-disable jsx-a11y/alt-text */

import AboutImage1 from "../img/about/about1.png";
import AboutImage2 from "../img/about/about2.png";
import AboutImage3 from "../img/about/about3.png";
import AboutImage4 from "../img/about/about4.jpg";
import AboutImage5 from "../img/about/about5.png";
import AboutImage6 from "../img/about/about6.png";
import AboutImage7 from "../img/about/about7.png";
import AboutImage8 from "../img/about/about8.png";
import AboutImage9 from "../img/about/about9.png";
import AboutImage10 from "../img/about/about10.jfif";
import AboutImage11 from "../img/about/about11.png";
import AboutImage12 from "../img/about/about12.png";
import AboutImage13 from "../img/about/about13.png";
import AboutImage14 from "../img/about/about14.png";
import AboutImage15 from "../img/about/about15.png";
import AboutImage16 from "../img/about/about16.jpg";
import AboutImage17 from "../img/about/about17.png";
import AboutImage18 from "../img/about/about18.png";
import Footer from "../components/Layout/Footer";

/* eslint-disable jsx-a11y/anchor-is-valid */
const About = () => {
  return (
    <main>
      <div
        id="contextMenu"
        className="context-menu"
        style={{ display: "none" }}
      >
        This photo is Copyright ©️ 2022 Alan Baptist. All rights reserved.
      </div>

      <div className="whatsapp_icon row">
        <div className="fo-16 bg-gray text-white">
          Talk to Us <span className="borde-gray"></span>
        </div>
        <a
          href="https://wa.me/919836143134?text=Greetings%20good%20sir!%0A%0AI%20found%20your%20website%20online%20and%20had%20an%20enquiry%20to%20make."
          className="position-relative"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" />
          <span className="whatsapp_icon_span">1</span>
        </a>
      </div>

      <section className="site-title site-title-about">
        <div
          className="site-background w-100"
          data-aos="fade-up"
          data-aos-delay="100"
        ></div>
      </section>

      <section>
        <div className="container-fluid p-0 pt-5 pr-sm-5 pl-sm-5 pt-sm-5">
        <div class="text-center about_labels">
               <picture>
                 <source media="(min-width:465px)" srcset="https://alanvidyushbaptist.com/img/labels/1.png"></source>
                 <img src="https://alanvidyushbaptist.com/img/labels/1.png"></img>
               </picture>
            </div>
          <div
            className="aboutpage-container"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="row m-0">
              <div className="col-2 col-sm-3">
                <a
                  href="https://www.precisionnutrition.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={AboutImage1} className="w-100"></img>
                </a>
              </div>
              <div className="col-10 col-sm-9 m-auto bluetext fw-600 mfo-13">
                Studied the{" "}
                <b>PN Level 1 Course at Precision Nutrition(Canada)</b>
              </div>
            </div>
            <div className="row m-0 d-flex flex-row-reverse">
              <div className="col-2 col-sm-3">
                <a
                  href="https://www.mac-nutritionuni.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={AboutImage2} className="w-100"></img>
                </a>
              </div>
              <div className="col-10 col-sm-9 m-auto bluetext fw-600 mfo-13">
                Studied the{" "}
                <b>MNU Course at Mac Nutrition Uni(United Kingdom)</b>
              </div>
            </div>
            <div className="row m-0">
              <div className="col-2 col-sm-3">
                <a
                  href="https://www.nasm.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={AboutImage3} className="w-100"></img>
                </a>
              </div>
              <div className="col-10 col-sm-9 m-auto bluetext fw-600 mfo-13">
                Studied Certified{" "}
                <b>
                  Sports Nutrition Coach(CSNC) at the National Academy of Sports
                  Medicine(NASM)
                </b>
              </div>
            </div>
            <div className="row m-0 d-flex flex-row-reverse">
              <div className="col-2 col-sm-3">
                <a
                  href="https://www.nasm.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={AboutImage4} className="w-100"></img>
                </a>
              </div>
              <div className="col-10 col-sm-9 m-auto bluetext fw-600 mfo-13">
                Studied{" "}
                <b>
                  Sports Nutritionist Specialist at the National Exercise &
                  Sports Trainers Association(NESTA)
                </b>
              </div>
            </div>
          </div>
          <div class="text-center about_labels">
               <picture>
                 <source media="(min-width:465px)" srcset="https://alanvidyushbaptist.com/img/labels/2.png"></source>
                 <img src="https://alanvidyushbaptist.com/img/labels/2.png"></img>
               </picture>
            </div>
          <div
            className="aboutpage-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="row m-0">
              <div className="col-2 col-sm-3">
                <a
                  href="https://www.acefitness.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={AboutImage5} className="w-100"></img>
                </a>
              </div>
              <div className="col-10 col-sm-9 m-auto bluetext fw-600 mfo-13">
                Studied the <b>Personal Trainer Course</b> at the{" "}
                <b>American Council of Exercise(ACE)</b>
              </div>
            </div>
            <div className="row m-0 d-flex flex-row-reverse">
              <div className="col-2 col-sm-3">
                <a
                  href="https://www.issaonline.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={AboutImage6} className="w-100"></img>
                </a>
              </div>
              <div className="col-10 col-sm-9 m-auto bluetext fw-600 mfo-13">
                Studied the <b>Certified Personal Trainer Course</b> at the{" "}
                <b>International Sports Sciences Association(ISSA)</b>
              </div>
            </div>
            <div className="row m-0">
              <div className="col-2 col-sm-3">
                <a
                  href="https://www.strengthandconditioning.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={AboutImage7} className="w-100"></img>
                </a>
              </div>
              <div className="col-10 col-sm-9 m-auto bluetext fw-600 mfo-13">
                Studied the <b>Strength and Conditioning Coach Course</b> at the{" "}
                <b>Australian Strength and Conditioning Association(ASCA)</b>
              </div>
            </div>
            <div className="row m-0 d-flex flex-row-reverse">
              <div className="col-2 col-sm-3">
                <a
                  href="https://www.crossfit.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={AboutImage8} className="w-100"></img>
                </a>
              </div>
              <div className="col-10 col-sm-9 m-auto bluetext fw-600 mfo-13">
                Studied <b>CROSSFIT L-1</b>, <b>CROSSFIT L-2</b> and{" "}
                <b>CROSSFIT</b> for Kids
              </div>
            </div>
            <div className="row m-0">
              <div className="col-2 col-sm-3">
                <a
                  href="https://functionalanatomyseminars.com/frs-system/functional-range-conditioning/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={AboutImage9} className="w-100"></img>
                </a>
              </div>
              <div className="col-10 col-sm-9 m-auto bluetext fw-600 mfo-13">
                Studied <b>Functional Range Conditioning(FRC)</b> at{" "}
                <b>Functional Range Systems(FRS)</b>
              </div>
            </div>
          </div>
          <div class="text-center about_labels">
               <picture>
                 <source media="(min-width:465px)" srcset="https://alanvidyushbaptist.com/img/labels/3.png"></source>
                 <img src="https://alanvidyushbaptist.com/img/labels/3.png"></img>
               </picture>
            </div>
          <div
            className="aboutpage-container"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="row m-0 d-flex flex-row-reverse">
              <div className="col-2 col-sm-3">
                <a
                  href="https://www.nationalcprfoundation.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={AboutImage10} className="w-100"></img>
                </a>
              </div>
              <div className="col-10 col-sm-9 m-auto bluetext fw-600 mfo-13">
                <b>CPR / AED / First-Aid</b> (Adult / Child / Infant / Choking)
                Certified by the <b>National CPR Foundation(USA)</b>
              </div>
            </div>
          </div>
          <div class="text-center about_labels">
               <picture>
                 <source media="(min-width:465px)" srcset="https://alanvidyushbaptist.com/img/labels/4.png"></source>
                 <img src="https://alanvidyushbaptist.com/img/labels/4.png"></img>
               </picture>
            </div>
          <div
            className="aboutpage-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="row m-0">
              <div className="col-2 col-sm-3">
                <a
                  href="https://www.icai.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={AboutImage11} className="w-100"></img>
                </a>
              </div>
              <div className="col-10 col-sm-9 m-auto bluetext fw-600 mfo-13">
                Studied the <b>Chartered Accountancy’s</b> Course at the{" "}
                <b>Institute of Chartered Accountancy of India(ICAI)</b>
              </div>
            </div>
            <div className="row m-0 d-flex flex-row-reverse">
              <div className="col-2 col-sm-3">
                <a
                  href="https://www.icsi.edu/home/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={AboutImage12} className="w-100"></img>
                </a>
              </div>
              <div className="col-10 col-sm-9 m-auto bluetext fw-600 mfo-13">
                Studied the <b>Company Secretary’s</b> Course at the Institute
                of Company Secretary of India(ICSI)
              </div>
            </div>
            <div className="row m-0">
              <div className="col-2 col-sm-3">
                <a
                  href=" https://courses.varunmalhotra.co.in/learn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={AboutImage13} className="w-100"></img>
                </a>
              </div>
              <div className="col-10 col-sm-9 m-auto bluetext fw-600 mfo-13">
                Studied the <b>Financial Literacy Intensive Programme(FLIP)</b>{" "}
                by <b>EIFS</b>
              </div>
            </div>
            <div className="row m-0 d-flex flex-row-reverse">
              <div className="col-2 col-sm-3">
                <a
                  href="https://courses.varunmalhotra.co.in/learn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={AboutImage14} className="w-100"></img>
                </a>
              </div>
              <div className="col-10 col-sm-9 m-auto bluetext fw-600 mfo-13">
                Studied the <b>Financial Literacy Awareness Programme(FLAP)</b>{" "}
                by <b>EIFS</b>
              </div>
            </div>
            <div className="row m-0">
              <div className="col-2 col-sm-3">
                <a
                  href="https://www.caluniv.ac.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={AboutImage15} className="w-100"></img>
                </a>
              </div>
              <div className="col-10 col-sm-9 m-auto bluetext fw-600 mfo-13">
                Studied <b>M.Com</b> with a specialization in Accounting and
                Finance at <b>Calcutta University</b>
              </div>
            </div>
            <div className="row m-0 d-flex flex-row-reverse">
              <div className="col-2 col-sm-3">
                <a
                  href="https://www.sxccal.edu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={AboutImage16} className="w-100"></img>
                </a>
              </div>
              <div className="col-10 col-sm-9 m-auto bluetext fw-600 mfo-13">
                Studied <b>B.Com(Honors)</b> with a specialization in Accounting
                and Finance at <b>St. Xavier’s College Kolkata</b>
              </div>
            </div>
          </div>
          <div class="text-center about_labels">
               <picture>
                 <source media="(min-width:465px)" srcset="https://alanvidyushbaptist.com/img/labels/5.png"></source>
                 <img src="https://alanvidyushbaptist.com/img/labels/5.png"></img>
               </picture>
            </div>
          <div
            className="aboutpage-container"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="row m-0">
              <div className="col-2 col-sm-3">
                <a href="http://ignou.ac.in/" target="_blank" rel="noreferrer">
                  <img src={AboutImage17} className="w-100"></img>
                </a>
              </div>
              <div className="col-10 col-sm-9 m-auto bluetext fw-600 mfo-13">
                Studied <b>Master’s in Psychology</b> at the{" "}
                <b>Indira Gandhi National Open University(IGNOU)</b>
              </div>
            </div>
            <div className="row m-0 d-flex flex-row-reverse">
              <div className="col-2 col-sm-3">
                <a href="http://ignou.ac.in/" target="_blank" rel="noreferrer">
                  <img src={AboutImage17} className="w-100"></img>
                </a>
              </div>
              <div className="col-10 col-sm-9 m-auto bluetext fw-600 mfo-13">
                Studied <b>Master’s in Philosophy</b> at the{" "}
                <b>Indira Gandhi National Open University(IGNOU)</b>
              </div>
            </div>
          </div>
          <div class="text-center about_labels">
               <picture>
                 <source media="(min-width:465px)" srcset="https://alanvidyushbaptist.com/img/labels/6.png"></source>
                 <img src="https://alanvidyushbaptist.com/img/labels/6.png"></img>
               </picture>
            </div>
          <div
            className="aboutpage-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="row m-0">
              <div className="col-2 col-sm-3">
                <a
                  href="https://www.sxcsccu.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={AboutImage18} className="w-100"></img>
                </a>
              </div>
              <div className="col-10 col-sm-9 m-auto bluetext fw-600 mfo-13">
                Studied and appeared for <b>ICSE</b> and <b>ISC</b> examination
                at <b>St. Xavier’s Collegiate School</b>
              </div>
            </div>
            <div className="row m-0 d-flex flex-row-reverse">
              <div className="col-2 col-sm-3">
                <a
                  href="https://www.facebook.com/SMSKolkata"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={AboutImage18} className="w-100"></img>
                </a>
              </div>
              <div className="col-10 col-sm-9 m-auto bluetext fw-600 mfo-13">
                Studied primary school <b>foundation subjects</b> at{" "}
                <b>St. Mary’s High School</b>
              </div>
            </div>
          </div>
          <div
            className="aboutpage-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="fo-18 mfo-12">
              <b>Disclaimer -</b>Kindly note that having studied a module
              offered by an organisation or an institution doesn’t necessarily
              signify that Alan Baptist is certified in the course corresponding
              to the modules studied.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;