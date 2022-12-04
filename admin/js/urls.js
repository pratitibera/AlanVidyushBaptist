const baseUrl = "https://itchy-blue-seagull.cyclic.app"
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
    edit_blogApi: { // Edit blog
        url: baseUrl + "/api/v1/blogs/",
        method: "PATCH",
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
    blog_swapApi: { // swap blogs
        url: baseUrl + "/api/v1/blogs/swapBlogs",
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
        url: baseUrl + "/api/v1/blogs/featuredBlog/",
        method: "PATCH",
    },
    delete_blog_from_featuredApi: { // Delete from featured blogs
        url: baseUrl + "/api/v1/blogs/featuredBlog/",
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


    addOffersApi: { // Update offer
        url: baseUrl + "/api/v1/admin/offer/",
        method: "POST",
    },
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

    viewTransactionsApi: { // View all transactions
        url: baseUrl + "/api/v1/transaction",
        method: "GET",
    },
    addTransactionsApi: { // Add transactions
        url: baseUrl + "/api/v1/transaction/",
        method: "POST",
    },
    updateTransactionsApi: { // Update transactions
        url: baseUrl + "/api/v1/transaction/",
        method: "PATCH",
    },
    deleteTransactionsApi: { // Delete transactions
        url: baseUrl + "/api/v1/transaction/",
        method: "DELETE",
    },

    // Messages of Optimum wellness
    getMessagesApi: { // Get messages
        url: baseUrl + "/api/v1/messages/",
        method: "GET",
    },
    deleteMessagesApi: { // Delete messages
        url: baseUrl + "/api/v1/messages/",
        method: "DELETE",
    },

    // Messages of portfolio website
    getMessagesPwApi: { // Get messages
        url: baseUrl + "/api/v1/feedbacks/",
        method: "GET",
    },
    deleteMessagesPwApi: { // Delete messages
        url: baseUrl + "/api/v1/feedbacks/",
        method: "DELETE",
    },


    

    // Add employees
    viewEmployeesApi: { // Get all employees
        url: baseUrl + "/api/v1/employees/?index=0&limit=50",
        method: "GET",
    },
    addEmployeesApi: { // Add employees
        url: baseUrl + "/api/v1/employees/",
        method: "POST",
    },
    deleteEmployeesApi: { // Delete employees
        url: baseUrl + "/api/v1/employees/",
        method: "DELETE",
    },
    editEmployeesApi: { // Patch employees
        url: baseUrl + "/api/v1/employees/",
        method: "PATCH",
    },
    getEmployeesApi: { // Get all employees
        url: baseUrl + "/api/v1/employees/",
        method: "GET",
    },


    // Add programs
    viewProgramsApi: { // Get all reaches
        url: baseUrl + "/api/v1/program_reaches/?index=0&limit=1500",
        method: "GET",
    },
    deleteProgramsApi: { // Delete reaches
        url: baseUrl + "/api/v1/program_reaches/",
        method: "DELETE",
    },
    editProgramsApi: { // Patch reaches
        url: baseUrl + "/api/v1/program_reaches/",
        method: "PATCH",
    }
};