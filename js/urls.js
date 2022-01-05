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
};