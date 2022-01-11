const baseUrl = "http://localhost:8081";
var urlSet = {
    get_blogApi: {
        url: baseUrl + "/api/v1/blogs/",
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
    addServiceApi: {
        url: baseUrl + "/api/v1/admin/service",
        method: "POST",
    },
    adminLoginApi: {
        url: baseUrl + "/api/v1/admin/login",
        method: "POST",
    },
    viewOffersApi: {
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
};