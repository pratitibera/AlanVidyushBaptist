const baseUrl = "https://desolate-retreat-74146.herokuapp.com";
// http://localhost:8081
var urlSet = {

    // Blogs

    get_blogApi: { // Get blogs
        url: baseUrl + "/api/v1/blogs/", 
        method: "GET",
    },
    post_blogApi: { // Add a new blog
        url: baseUrl + "/api/v1/blogs/",
        method: "POST",
    },
    delete_blogApi: { // Delete a blog
        url: baseUrl + "/api/v1/blogs/",
        method: "DELETE",
    },
    get_AuthorblogApi: { // Get blogs of an author
        url: baseUrl + "/api/v1/blogs/author/",
        method: "GET",
    },
    get_featuredblogApi: { // Get featured blogs
        url: baseUrl + "/api/v1/blogs/featured",
        method: "GET",
    },
    data_intervalApi: { // set data interval
        url: baseUrl + "/api/v1/blogs/updateDataInterval",
        method: "PATCH",
    },


    // Admin

    adminLoginApi: { // Admin login
        url: baseUrl + "/api/v1/auth/api/v1/auth/login",
        method: "POST",
    },
    adminUpdateApi: { // Admin login
        url: baseUrl + "/api/v1/auth/api/v1/auth/update",
        method: "PATCH",
    },



    // Admin blogs 


    add_blog_to_featuredApi: { // Add to featured blogs
        url: baseUrl + "/api/v1/admin/featuredBlog/",
        method: "PATCH",
    },
    delete_blog_from_featuredApi: { // Delete from featured blogs
        url: baseUrl + "/api/v1/admin/featuredBlog/",
        method: "DELETE",
    },



    // Admin services


    viewServicesApi: { // To get services
        url: baseUrl + "/api/v1/admin/service/",
        method: "GET",
    },
    getMainServiceApi: { // To get services based on level
        url: baseUrl + "/api/v1/admin/service",
        method: "GET",
    },
    addServiceApi: { // To add new service
        url: baseUrl + "/api/v1/admin/service",
        method: "POST",
    },
    deleteServiceApi: { // To delete services
        url: baseUrl + "/api/v1/admin/service/",
        method: "DELETE",
    },
    editServicesApi: { // Update service names
        url: baseUrl + "/api/v1/admin/service/",
        method: "PATCH",
    },
    
    
    

    // Admin offers 


    editOffersApi: { // Update offer
        url: baseUrl + "/api/v1/admin/offer/",
        method: "PATCH",
    },
    deleteOffersApi: { // Delete offer
        url: baseUrl + "/api/v1/admin/offer/",
        method: "DELETE",
    },





    // Admin coupons 



    viewCouponsApi: { // Get all coupons
        url: baseUrl + "/api/v1/admin/coupon",
        method: "GET",
    },
    addCouponsApi: { // Add new coupon
        url: baseUrl + "/api/v1/admin/coupon/",
        method: "POST",
    },
    deleteCouponsApi: { // Delete a coupon
        url: baseUrl + "/api/v1/admin/coupon/",
        method: "DELETE",
    },




    


    // Payments

    applyCouponApi: { // Apply coupon 
        url: baseUrl + "/api/v1/payment/applyCoupon",
        method: "POST",
    },
    paymentApi: { // Create payment order id
        url: baseUrl + "/api/v1/payment/generateReceipt",
        method: "POST",
    },
    verifyPaymentApi: { // Verify payments status after razorpay
        url: baseUrl + "/api/v1/payment/verifyPayment",
        method: "POST",
    },



    // Admin transactions

    transactionsApi: { // View all transactions
        url: baseUrl + "/api/v1/admin/transactions?status=Successful",
        method: "GET",
    },
};