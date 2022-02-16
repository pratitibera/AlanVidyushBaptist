const CheckoutModal = () => {
    return (
        <div class="modal fade" id="checkout">
        <div class="modal-dialog modal-dialog-centered">
           <div class="modal-content">
              {/* <!-- Modal Header --> */}
              <div class="modal-header bg-theme">
                 <h4 class="text-dark fw-700 fo-20 mb-0">CHECKOUT</h4>
                 <button type="button" class="close text-dark fw-800" data-dismiss="modal">&times;</button>
              </div>
              {/* <!-- Modal body --> */}
              <div class="modal-body pt-4">
                 <div id="particulars"></div>
                 <div class="mt-4 text-right">
                    <div class="fo-14 fw-600 cursorPointer" onclick="emptyCart();" data-dismiss="modal">EMPTY CART</div>
                 </div>
                 <div class="input-data">
                    <input type="text" required id="customer_name" />
                    <div class="underline"></div>
                    <label>Full Name</label>
                 </div>
                 <div class="input-data mt-5">
                    <input type="text" required id="customer_email" />
                    <div class="underline"></div>
                    <label>Email</label>
                 </div>
                 <div class="input-data mt-5">
                    <input type="text" required id="customer_mobile" />
                    <div class="underline"></div>
                    <label>Contact number</label>
                 </div>
                 <div class="row m-0 couponsection mt-3">
                    <div class="col-6 col-sm-6 pl-0" id="coupon_status">
                       <input type="text" placeholder="Coupon code" id="coupon_code" />
                    </div>
                    <div class="col-6 col-sm-6 pr-0">
                       <button class="btn website-button bg-dark text-white w-100 mfo-12" onclick="applyCoupon();" id="coupon_button">APPLY COUPON</button>
                    </div>
                    <div class="col-12 col-sm-12 text-center cash_option">
                       <div class="fo-16 fw-700" onclick="payInCash();">PAY IN CASH</div>
                    </div>
                 </div>
              </div>
              <div class="checkoutfooter row m-0">
                 <button class="btn website-button w-50 bg-white text-dark fo-20 fw-800" id="totalbill"></button>
                 <button class="btn website-button w-50 bg-dark text-white" onclick="checkout();">PROCEED TO PAYMENT</button>
              </div>
           </div>
        </div>
     </div>
    )
}


export default CheckoutModal;