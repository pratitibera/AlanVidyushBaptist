const baseUrl = "http://localhost:8081";
var urlSet = {
    get_blogApi: {
        url: baseUrl + "/api/v1/blogs/",
        method: "GET",
    },
    get_AuthorblogApi: {
        url: baseUrl + "/api/v1/blogs/author/",
        method: "GET",
    },
    get_featuredblogApi: {
        url: baseUrl + "/api/v1/blogs/featured",
        method: "GET",
    },
    post_blogApi: {
        url: baseUrl + "/api/v1/blogs/",
        method: "POST",
    },
    add_blog_to_featuredApi: {
        url: baseUrl + "/api/v1/admin/featuredBlog/",
        method: "PATCH",
    },
    delete_blog_from_featuredApi: {
        url: baseUrl + "/api/v1/admin/featuredBlog/",
        method: "DELETE",
    },
    getMainServiceApi: {
        url: baseUrl + "/api/v1/admin/service",
        method: "GET",
    },
    addServiceApi: {
        url: baseUrl + "/api/v1/admin/service",
        method: "POST",
    },
    adminLoginApi: {
        url: baseUrl + "/api/v1/admin/login",
        method: "POST",
    },
    viewServicesApi: {
        url: baseUrl + "/api/v1/admin/",
        method: "GET",
    },
    editOffersApi: {
        url: baseUrl + "/api/v1/admin/offer/",
        method: "PATCH",
    },
    deleteOffersApi: {
        url: baseUrl + "/api/v1/admin/offer/",
        method: "DELETE",
    },
    viewCouponsApi: {
        url: baseUrl + "/api/v1/admin/coupon",
        method: "GET",
    },
    addCouponsApi: {
        url: baseUrl + "/api/v1/admin/coupon/",
        method: "POST",
    },
    deleteCouponsApi: {
        url: baseUrl + "/api/v1/admin/coupon/",
        method: "DELETE",
    },
    paymentApi: {
        url: baseUrl + "/api/v1/payment/generateReceipt",
        method: "POST",
    },
    applyCouponApi: {
        url: baseUrl + "/api/v1/payment/applyCoupon",
        method: "POST",
    },
};