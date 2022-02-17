/* eslint-disable jsx-a11y/alt-text */
const Footer = () => {
  return (
    <footer id="contact" className="pageContact">
      <div class="footer-bg overflow-hidden">
        <div class="footer-img-container w-100">
          <img src="https://static.wixstatic.com/media/bf92a9_c650aa5fcf9e4302b65032a2db35194f~mv2.png/v1/fill/w_1235,h_304,al_c,q_90,usm_0.66_1.00_0.01/bf92a9_c650aa5fcf9e4302b65032a2db35194f~mv2.webp"
            class="w-100"/>
        </div>
      </div>
      <div class="text-center bg-dark pb-5">
        <div class="text-white fo-24 fw-600 mfo-16">CONTACT</div>
        <hr />
        <div class="row justify-content-center m-0 mt-3">
          <a
            href="https://www.facebook.com/alanvidyushandrew.baptist"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-facebook-f text-white fw-600 m-2"></i>
          </a>
          <a
            href="https://www.instagram.com/alan_baptist/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-instagram text-white fw-600 m-2"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/alanvidyushbaptist"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-linkedin-in text-white fw-600 m-2"></i>
          </a>
          <a
            href="https://alan.optimumwellness@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fas fa-envelope text-white fw-600 m-2"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=919836143134&text=Greetings%20good%20sir!%0A%0AI%20found%20your%20website%20online%20and%20had%20an%20enquiry%20to%20make."
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-whatsapp text-white fw-600 m-2"></i>
          </a>
        </div>
        <div class="mt-2 text-white mfo-13">
          &copy; 2021 Alan Baptist | Website Design by{" "}
          <span class="bco">"Pratiti Bera"</span>
        </div>
        <div class="text-white mfo-13">
          Front End Design Conceptualizer{" "}
          <span class="bco">"Hritavash Saha"</span>
        </div>
        <div className="text-white mfo-12">
          Chief Website Asset Creator <span className="bco">"Rupsha Das"</span>
        </div>
        <div class="text-white mfo-13">
          Chief Content Manager <span class="bco">"Debasmita Das"</span>
        </div>
      </div>
      <div class="move-up" data-aos="fade-up" data-aos-delay="1800">
        <span>
          <i class="fas fa-arrow-up fa-2x bco fw-800"></i>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
