/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

import BlogSection from "../components/Home/BlogSection";
import CollabSection from "../components/Home/CollabSection";
import Header from "../components/Home/Header";

import AboutLogo from "../img/about.jpg";
import OWLogo from "../img/logos/ow.png";

import urlSet from "../utils/urls";

import axios from "axios";
import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const onHashChange = () => {
    document
      .getElementById(window.location.hash.replace("#", ""))
      .scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    console.log("Here");

    console.log(window.location.hash);
  };

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      console.log("HERERE");
    });
    return () =>
      window.removeEventListener("hashchange", () => {
        console.log("HERERE");
      });
  }, []);

  useEffect(() => {
    const getFeaturedBlogs = async () => {
      try {
        const url = urlSet.get_featuredblogApi.url + "?index=0&limit=5";
        const res = await axios.get(url);
        setBlogs(res.data);
      } catch (err) {
        setBlogs([]);
        console.log(err);
      }
    };

    getFeaturedBlogs();
    // onHashChange();
  }, []);

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

      <div id="notification-area"></div>
      <Header />

      <CollabSection />

      <section className="about-section overflow-hidden" id="about">
        <div className="about-container w-70 mow-90">
          <div
            className="bco fw-600 fo-55 mfo-25 text-center m-4"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            ABOUT ALAN
          </div>
          <div
            className="text-white text-justify"
            data-aos="fade-right"
            data-aos-delay="130"
          >
            Alan Baptist, is a highly sought-after lifestyle coach, and the
            President and the Co-Founder and Head Nutritionist at the National
            Fitness and Nutrition Academy, the leading Evidence-Based fitness
            and nutrition educational institution in India. He is also the
            Managing Director at Let’s Be Fit, a health-based startup that
            consults clients to achieve their fitness and health goals. He is
            also an evidence-based practitioner and the CTO(Chief Technological
            Officer) at Zest Fitness Studios, an elite chain of gyms founded by
            his family and operational across Kolkata, India. He also is India's
            first optimum wellness coach.
          </div>
          <br />
          <div
            className="text-white text-justify"
            data-aos="fade-right"
            data-aos-delay="130"
          >
            Despite having an immensely profound and rich academic and
            professional background in the field of finance, accounting, and
            taxation he decided to foray into the domain of fitness and
            nutrition in his early 20s when he felt the need to lose weight and
            get fit himself. Conscious about his own body image, Alan began his
            longstanding fitness journey as a unwaveringly firm New Year’s
            resolution in 2017 under the guidance of his brother Vinit Baptist,
            co-founder and CEO of Zest Fitness Studio brand of gyms. He lost
            around 30 kgs of weight across a grueling period of 9 months and
            reduced his body fat to 9% by following a rigorous fitness routine
            and ensuring calorie deficit. He was the modeling subject of several
            immensely inspiring fitness photoshoots and magazine features that
            soon followed post his transformation.
          </div>
          <br />
          <div
            className="text-white text-justify"
            data-aos="fade-right"
            data-aos-delay="130"
          >
            In his quest to get fitter and achieve his desired physique, Alan
            learned the science behind fitness and weight loss, nutrition, and
            dieting. This is when he realized that fitness and nutrition are
            vital aspects of an individual’s life that are currently quite
            neglected in the modern world, hence considering it his moral duty
            to solve this challenge, Alan took it upon himself to generate
            awareness and share his knowledge of the same and co-founded
            NFNA(National Fitness and Nutrition Academy) that provides
            evidence-based fitness and nutrition courses.
          </div>
          <br />
          <div className="row m-0">
            <div
              className="col-sm-6 p-0"
              data-aos="fade-right"
              data-aos-delay="140"
            >
              <div className="text-white text-justify">
                Alan has helped over 3000+ individuals across 5 years in
                achieving health transformations. He has also actively guided
                countless budding fitness trainers to successfully launch their
                careers in this ever-expansive field of fitness and nutrition.
              </div>
              <br />
              <div className="text-white text-justify">
                In addition to being an educationalist, finance professional,
                and fitness coach, Alan is also a licensed therapist.
                Furthermore, he has a Master’s degree in Philosophy as well. He
                wishes to coach and mentor other individuals who are struggling
                with the various dimensions of their wellness. Being an optimum
                wellness coach, his life’s objective is to provide education,
                enlightenment, and inspiration to people and help them achieve
                optimal and holistic wellness in the different dimensions of
                their life such as physical, dietary and psychological wellness,
                financial wellness, spiritual wellness, sexual wellness,
                intellectual and occupational wellness and social wellness.
              </div>
            </div>
            <div
              className="col-sm-6 p-0 text-center mt-3 mt-sm-0"
              data-aos="fade-left"
              data-aos-delay="140"
            >
              <img src={AboutLogo} className="w-80 copyright_img" />
            </div>
          </div>
          <br />
          <div
            className="about-quote font-italic text-white text-justify"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="bco fw-600">"</span>The fool is in many ways the
            precursor to the expert. An individual who's open to humbly
            accepting their ignorance stands a greater chance at attaining
            enlightenment than the self-proclaimed intellectual.
            <span className="bco fw-600">"</span>
          </div>
          <br />
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <Link to="/about">
              <button className="btn website-button pulsating">
                KNOW MORE
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="associations overflow-hidden" id="success">
        <div
          className="text-white text-center fo-40 fw-600 mfo-20"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          MY ASSOCIATIONS
        </div>
        <div className="container-fluid pt-5">
          <div
            className="row m-0 mb-9"
            data-aos="fade-right"
            data-aos-delay="110"
          >
            <div className="col-sm-5 m-auto">
              <div className="p-4 p-sm-0">
                <a href="#" target="_blank">
                  <img src={OWLogo} className="w-100" />
                </a>
              </div>
            </div>
            <div className="col-sm-7 pl-sm-3">
              <div className="text-white fo-22 fw-600 mt-1 mt-sm-0">
                Optimum Wellness
              </div>
              <div className="text-white fo-14 font-italics fw-400 mt-1">
                CEO and Co-Founder
              </div>
              <div className="text-white fo-13 fw-400 mt-2">
                Year Established - 2020
              </div>
              <br />
              <div className="row m-0">
                <a href="https://www.facebook.com/Optimum-Wellness-100325099229123" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f text-white fw-600 m-2"></i>
                </a>
                <a href="https://www.instagram.com/optimum_wellness_official/" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram text-white fw-600 m-2"></i>
                </a>
                <a href="https://www.linkedin.com/company/optimum-wellness-official/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in text-white fw-600 m-2"></i>
                </a>
              </div>
              <br />
              <div className="text-white fo-16 mt-2">
                Optimum Wellness is the world’s first and only platform that’s
                been established to provide research-backed diversified
                solutions to holistically elevate an individual’s status of
                wellness.
                <br />
                <br />
                An individual’s wellness is influenced by an increasingly broad
                scope of factors that most lifestyle coaches have an inadequate
                understanding of and as a consequence of which most people find
                themselves struggling to find fulfillment in their life.
                <br />
                <br />
                Owing to Alan’s wealth of experience owing to his exposure in
                various fields across and the Optimum Wellness brand was founded
                to offer phenomenal fine-tuned counseling with respect to
                various aspects of an individual’s life.
                <br />
                <br />
                Optimum Wellness provides integrated lifestyle advice
                considering all influential factors of a person’s wellness, such
                as their intellectual wellness, social wellness, financial
                wellness, dietary wellness, physical wellness,
                emotional(psychological) wellness, occupational wellness,
                environmental wellness, spiritual wellness and sexual wellness.
              </div>
            </div>
          </div>
          <div
            className="row m-0 mb-9"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="col-sm-5 m-auto">
              <div>
                <a href="#" target="_blank">
                  <img
                    src="https://www.linkpicture.com/q/nfna.png"
                    className="w-100"
                  />
                </a>
              </div>
            </div>
            <div className="col-sm-7 pl-sm-3">
              <div className="text-white fo-22 fw-600">
                National Fitness and Nutrition Academy
              </div>
              <div className="text-white fo-14 font-italics fw-400 mt-1">
                President and Co-Founder
              </div>
              <div className="text-white fo-13 fw-400 mt-2">
                Year Established - 2018
              </div>
              <br />
              <div className="row m-0">
                <a
                  href="https://www.facebook.com/nfna.education"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f text-white fw-600 m-2"></i>
                </a>
                <a
                  href="hdivttps://instagram.com/nfna.education?utm_medium=copy_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram text-white fw-600 m-2"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/nfna"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in text-white fw-600 m-2"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCSWw4OmSEoJuusDQFWdPhVQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube text-white fw-600 m-2"></i>
                </a>
                <a
                  href="https://t.me/nfna_education"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-telegram-plane text-white fw-600 m-2"></i>
                </a>
                <a
                  href="https://pin.it/3y7YpHM"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-pinterest text-white fw-600 m-2"></i>
                </a>
                <a
                  href="https://twitter.com/nfna_education"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter text-white fw-600 m-2"></i>
                </a>
              </div>
              <br />
              <div className="text-white fo-16 mt-2">
                The National Fitness and Nutrition Academy was co-founded by
                Alan with a vision to create 1,00,000+ extraordinary fitness
                professionals around the globe by 2025, NFNA is India’s leading
                evidence-based fitness and nutrition academy. They provide
                evidence-based fitness and nutrition knowledge to the masses and
                create extraordinary budding fitness professionals and help them
                boost their careers in the same. Their scientifically-backed
                coursework, spear-headed by Alan, is thoroughly researched and
                absolutely dynamic as it is constantly kept upgraded as per the
                latest developments in fitness and nutrition sciences. The
                courses are taught in such a way using relatable examples and
                simplistic analogies that makes it really easy for the students
                to comprehend and apply the concepts in real life practical
                scenarios. They are the first fitness academy to provide
                lifetime free education support to its students and aid them in
                their career growth.
                <br />
                <br />
                Hundreds of successful careers of several students as fitness
                and nutrition coaches have launched under Alan’s direct
                one-on-one guidance and meticulous mentorship. Numerous students
                of varying age groups and demographics, ranging from college
                going kids to housewives with an incredible passion to restart
                their potentially glorious careers, have thoroughly learnt
                applicable concepts in fitness and nutrition, despite having
                totally no background in science merely due to Alan's ability to
                deliver well-structured lectures that cater to even the most
                basic entry-level scholars.
              </div>
            </div>
          </div>
          <div
            className="row m-0 mb-9"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="col-sm-5 m-auto">
              <div>
                <a href="#" target="_blank">
                  <img
                    src="https://www.linkpicture.com/q/lbf.png"
                    className="w-100"
                  />
                </a>
              </div>
            </div>
            <div className="col-sm-7 pl-sm-3">
              <div className="text-white fo-22 fw-600">Let's Be Fit</div>
              <div className="text-white fo-14 font-italics fw-400 mt-1">
                Managing Director and Co-Founder
              </div>
              <div className="text-white fo-13 fw-400 mt-2">
                Year Established - 2016
              </div>
              <br />
              <div className="row m-0">
                <a href="https://www.facebook.com/letsbefitindia" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f text-white fw-600 m-2"></i>
                </a>
                <a href="https://www.instagram.com/lets_be_fit_official/" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram text-white fw-600 m-2"></i>
                </a>
                <a href="https://www.linkedin.com/company/let-s-be-fit/about/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in text-white fw-600 m-2"></i>
                </a>
              </div>
              <br />
              <div className="text-white fo-16 mt-2">
                Let's Beblogs Fit is an online nutrition and fitness consultancy
                platform that strives to provide to their clients not only
                evidence-based solutions to their diet and fitness concerns, but
                also an experience that makes them happy, confident and strong.
                They have been working in the field of fitness since the past 5
                years and have transformed and positively touched and impacted
                the lives of 1000+ individuals.
                <br />
                <br />
                The key specialty of Let's Be Fit lies in -<br />
                <br />
                <ul>
                  <li>
                    <i className="fas fa-long-arrow-alt-right mr-2"></i>
                    Providing a completely tailor-made and customized experience
                    based on all the personal relevant data of a client
                    pertaining to their fitness and health goals.
                  </li>
                  <li>
                    <i className="fas fa-long-arrow-alt-right mr-2"></i>Regular
                    rigorous follow-ups with clients with the aim to enhance
                    accountability towards adhering to the prescribed plan is a
                    core aspect of Let's Be Fit's coaching philosophy!
                  </li>
                  <li>
                    <i className="fas fa-long-arrow-alt-right mr-2"></i>Multiple
                    updated video links of recipes of every single low-calorie
                    vegetable, meat, fruit juice, salad, soup and dairy product
                    preparations imaginable are curated and offered to clients
                    to ensure the plan is sustainably followed without it
                    feeling too monotonous!
                  </li>
                </ul>
                <br />
                Marathon runners, famous Bodybuilders, to complete beginners
                starting their fitness journey from the corporate sector,
                established entrepreneurs and business owners to even Medical
                Doctors consider Let’s Be Fit to be their one stop solution with
                respect to health and fitness!
              </div>
            </div>
          </div>
          <div
            className="row m-0 mb-9"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="col-sm-5 m-auto">
              <div>
                <Link to="#" target="_blank">
                  <img
                    src="https://i.postimg.cc/NfkmrrdX/zest.png"
                    className="w-100"
                  />
                </Link>
              </div>
            </div>
            <div className="col-sm-7 pl-sm-3">
              <div className="text-white fo-22 fw-600">Zest Fitness Studio</div>
              <div className="text-white fo-14 font-italics fw-400 mt-1">
                Chief Technology Officer and Head Online Nutritionist
              </div>
              <div className="text-white fo-13 fw-400 mt-2">
                Year Established - 2015
              </div>
              <br />
              <div className="row m-0">
                <a href="https://www.facebook.com/zesttnl" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f text-white fw-600 m-2"></i>
                </a>
                <a href="https://www.instagram.com/zesttnl/" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram text-white fw-600 m-2"></i>
                </a>
                <a href="https://www.linkedin.com/company/zest-fitness-studio/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in text-white fw-600 m-2"></i>
                </a>
              </div>
              <br />
              <div className="text-white fo-16 mt-2">
                Zest Fitness Studio, is arguably the finest and the most elite
                chain of premium gym brands in Kolkata with the highest number
                of publicly posted client transformations. They have empowered
                2500+ people to get fitter and stronger for almost over half a
                decade! They offer step-by-step Fitness Counseling by
                formulating the right nutritional diet and training methods in
                order to achieve one’s fitness goals.
                <br />
                <br />
                They specialize in various training methods such as
                <br />
                <br />
                <ul>
                  <li>
                    <i className="fas fa-long-arrow-alt-right mr-2"></i>
                    High-Intensity Interval Training (H.I.I.T.)
                  </li>
                  <li>
                    <i className="fas fa-long-arrow-alt-right mr-2"></i>
                    Bodybuilding
                  </li>
                  <li>
                    <i className="fas fa-long-arrow-alt-right mr-2"></i>CrossFit
                    training methodologies
                  </li>
                  <li>
                    <i className="fas fa-long-arrow-alt-right mr-2"></i>
                    Hypertrophy-oriented training
                  </li>
                  <li>
                    <i className="fas fa-long-arrow-alt-right mr-2"></i>Sports
                    Performance Programming
                  </li>
                  <li>
                    <i className="fas fa-long-arrow-alt-right mr-2"></i>
                    Flexibility and Mobility drills
                  </li>
                  <li>
                    <i className="fas fa-long-arrow-alt-right mr-2"></i>
                    Powerlifting
                  </li>
                  <li>
                    <i className="fas fa-long-arrow-alt-right mr-2"></i>Olympic
                    Lifting
                  </li>
                  <li>
                    <i className="fas fa-long-arrow-alt-right mr-2"></i>
                    Calisthenics and all other popular aspects of fitness.
                  </li>
                </ul>
                <br />
                Zest Fitness Studio was founded not only with the grand vision
                of creating Kolkata the fittest city in the nation, but also
                with mission of educating their members regarding the scientific
                fundamentals behind fitness and exercise topics, a process that
                inspired the creation of rising stellar fitness professionals
                across the city with highly successful and robust careers that
                can easily be traced by to their humble roots at Zest. The
                existence of Zest Fitness Studio thereby has undoubtedly
                positively improved Kolkata's available quality of fitness
                coaching!
              </div>
            </div>
          </div>
        </div>

        <BlogSection blogs={blogs} />

        <section>
          <div className="text-center mt-4">
            <Link to="/services">
              <button
                className="btn website-button pulsating fo-30"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                CONSULT
              </button>
            </Link>
          </div>
          <div
            className="text-center fo-40 fw-800 bco mfo-35 text-white pt-5"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            ALAN BAPTIST
          </div>
        </section>
        <div
          className="extended_black"
          style={{
            height: "170px",
            width: "100%",
            background: "black",
            position: "absolute",
          }}
        ></div>
      </section>
    </main>
  );
};

export default Home;
