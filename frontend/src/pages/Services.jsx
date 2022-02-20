/* eslint-disable jsx-a11y/alt-text */

import Sidebar from "../components/Layout/Sidebar";
import ServicesBanner from "../img/banners/services_banner.png"

/* eslint-disable jsx-a11y/anchor-is-valid */
const Services = () => (
    <main>
        <div id="overlay"></div>
        <div id="contextMenu" className="context-menu" style={{ display: "none" }}>
            This photo is Copyright ©️ 2022 Alan Baptist. All rights reserved.
        </div>


        <div className="whatsapp_icon row">
            <div className="fo-16 bg-gray text-white">Talk to Us <span className="borde-gray"></span></div>
            <a href="https://wa.me/919836143134?text=Greetings%20good%20sir!%0A%0AI%20found%20your%20website%20online%20and%20had%20an%20enquiry%20to%20make." className="position-relative">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" />
                <span className="whatsapp_icon_span">1</span>
            </a>
        </div>


        <Sidebar />



        <div id="notification-area"></div>

    
        
        <section>
            <section>
                <div class="partners-cover text-center">
                    <img src={ServicesBanner} class="w-100"></img>
                </div>
            </section>
            <section class="services-list">
                <div class="row m-0" id="mainServices_section"></div>
            </section>


            <div className="modal fade" id="checkout">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header bg-theme">
                            <h4 className="text-dark fw-700 fo-20 mb-0">CHECKOUT</h4>
                            <button type="button" className="close text-dark fw-800" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body pt-4">
                            <div id="particulars"></div>
                            <div className="mt-4 text-right">
                                <div className="fo-14 fw-600 cursorPointer" onclick="emptyCart();" data-dismiss="modal">EMPTY CART</div>
                            </div>
                            <div className="input-data">
                                <input type="text" required id="customer_name" />
                                <div className="underline"></div>
                                <label>Full Name</label>
                            </div>
                            <div className="input-data mt-5">
                                <input type="text" required id="customer_email" />
                                <div className="underline"></div>
                                <label>Email</label>
                            </div>
                            <div className="input-data mt-5">
                                <input type="text" required id="customer_mobile" />
                                <div className="underline"></div>
                                <label>Contact number</label>
                            </div>
                            <div className="row m-0 couponsection mt-3">
                                <div className="col-6 col-sm-6 pl-0" id="coupon_status">
                                    <input type="text" placeholder="Coupon code" id="coupon_code" />
                                </div>
                                <div className="col-6 col-sm-6 pr-0">
                                    <button className="btn website-button bg-dark text-white w-100 mfo-12" onclick="applyCoupon();" id="coupon_button">APPLY COUPON</button>
                                </div>
                                <div className="col-12 col-sm-12 text-center cash_option">
                                    <div className="fo-16 fw-700" onclick="payInCash();">PAY IN CASH</div>
                                </div>
                            </div>
                        </div>
                        <div className="checkoutfooter row m-0">
                            <button className="btn website-button w-50 bg-white text-dark fo-20 fw-800" id="totalbill"></button>
                            <button className="btn website-button w-50 bg-dark text-white" onclick="checkout();">PROCEED TO PAYMENT</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
)

export default Services;