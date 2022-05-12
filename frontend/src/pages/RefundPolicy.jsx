
import Footer from "../components/Layout/Footer";

/* eslint-disable jsx-a11y/anchor-is-valid */
const RefundPolicy = () => {
  return (
    <main className="bg-dark">
      <div id="overlay"></div>
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
      <section class="bg-dark policy_pages">
         <div class="pr-md-5 pl-md-5">
            <div class="fo-40 fw-700 text-yellow mfo-25 mb-4 text-center">CANCELLATION AND REFUND POLICY</div>
            <div class="fo-18 text-white p-4 p-md-5 mfo-14 text-justify">Once a consultation is already underway, we have a no-cancellation policy. Further refund requests under special circumstances are entirely under Alan Baptist’s discretion.</div>
         </div>
      </section>
      

      <Footer />
    </main>
  );
};
export default RefundPolicy;