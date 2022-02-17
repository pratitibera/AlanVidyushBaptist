/* eslint-disable jsx-a11y/alt-text */

import Sidebar from "../components/Layout/Sidebar";
import Footer from "../components/Layout/Footer";

import PortfolioImage1 from "../img/portfolio/1.jpeg"
import PortfolioImage2 from "../img/portfolio/2.jpeg"
import PortfolioImage3 from "../img/portfolio/3.jpeg"
import PortfolioImage4 from "../img/portfolio/4.jpeg"
import PortfolioImage5 from "../img/portfolio/5.jpeg"
import PortfolioImage6 from "../img/portfolio/6.jpeg"
import PortfolioImage7 from "../img/portfolio/7.jpeg"
import PortfolioImage8 from "../img/portfolio/8.jpeg"
import PortfolioImage9 from "../img/portfolio/9.jpeg"
import PortfolioImage10 from "../img/portfolio/10.jpeg"
import PortfolioImage11 from "../img/portfolio/11.jpeg"
import PortfolioImage12 from "../img/portfolio/12.jpeg"

/* eslint-disable jsx-a11y/anchor-is-valid */
const Portfolio = () => (
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
            
            <div class="owl-carousel d-sm-none portfolioSection_mobile" id="portfolioSection">
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage1} class="w-100 copyright_img"></img>
                    </div>  
                </div> 
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage2} class="w-100 copyright_img"></img>
                    </div>  
                </div> 
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage3} class="w-100 copyright_img"></img>
                    </div>  
                </div>  
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage4} class="w-100 copyright_img"></img>
                    </div>  
                </div> 
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage5} class="w-100 copyright_img"></img>
                    </div>  
                </div>  
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage6} class="w-100 copyright_img"></img>
                    </div>  
                </div> 
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage7} class="w-100 copyright_img"></img>
                    </div>  
                </div> 
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage8} class="w-100 copyright_img"></img>
                    </div>  
                </div>  
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage9} class="w-100 copyright_img"></img>
                    </div>  
                </div> 
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage10} class="w-100 copyright_img"></img>
                    </div>  
                </div>  
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage11} class="w-100 copyright_img"></img>
                    </div>  
                </div>  
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage12} class="w-100 copyright_img"></img>
                    </div>  
                </div>  
            </div>


            <div class="portfolioSection_desktop row d-none d-sm-flex">
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage1} class="w-100 copyright_img"></img>
                    </div>  
                </div> 
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage2} class="w-100 copyright_img"></img>
                    </div>  
                </div> 
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage3} class="w-100 copyright_img"></img>
                    </div>  
                </div>  
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage4} class="w-100 copyright_img"></img>
                    </div>  
                </div> 
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage5} class="w-100 copyright_img"></img>
                    </div>  
                </div>  
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage6} class="w-100 copyright_img"></img>
                    </div>  
                </div> 
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage7} class="w-100 copyright_img"></img>
                    </div>  
                </div> 
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage8} class="w-100 copyright_img"></img>
                    </div>  
                </div>  
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage9} class="w-100 copyright_img"></img>
                    </div>  
                </div> 
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage10} class="w-100 copyright_img"></img>
                    </div>  
                </div>  
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage11} class="w-100 copyright_img"></img>
                    </div>  
                </div>  
                <div class="p-2">
                    <div class="card p-0 border-0">
                        <img src={PortfolioImage12} class="w-100 copyright_img"></img>
                    </div>  
                </div>  
            </div>
            
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
        <Footer/>
    </main>
)

export default Portfolio;