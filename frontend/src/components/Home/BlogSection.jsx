const BlogSection = () => {
    return(
        <div className="blog-section" id="blogs">
        <div className="fo-52 pt-3 fw-700 text-center text-white mfo-32 d-flex justify-content-center">
            Check out my
            <a href="blogs.html" className="pulsating_text ml-3">Blogs</a>
        </div>
        <hr />
        <div className="pr-lg-4 pl-lg-4">
            <div className="container-fluid pr-0 pl-0 pl-lg-5 pr-lg-5" id="blogSlider">
                <input type="radio" name="blogSlider" id="s1" value="1" />
                <input type="radio" name="blogSlider" id="s2" value="2" />
                <input type="radio" name="blogSlider" id="s3" value="3" checked />
                <input type="radio" name="blogSlider" id="s4" value="4" />
                <input type="radio" name="blogSlider" id="s5" value="5" />
                <label for="s1" id="slide1">
                    <div className="blogcardimage">
                        <a href="blog.html">
                            <img src="https://www.linkpicture.com/q/blog3.png" height="100%" width="100%" />
                        </a>
                    </div>
                    <div className="blog-body">
                        <div className="fo-21 fw-700 mfo-12">Bolo Zuban Cancery – Is Pan Masala Harmful for Health?</div>
                        <div className="fo-14 txtco mt-3 fw-400 mfo-11">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. m dolor sit amet, consectetur adipisicing.</div>
                        <div className="mt-4">
                            <a href="blog.html" className="fo-12 fw-600 bco mfo-11">READ MORE</a>
                        </div>
                    </div>
                    <div className="blog-footer fo-12 mfo-11">May 4, 2021</div>
                </label>
            </div>

            <div className="text-center mt-5">
                <i className="fas fa-long-arrow-alt-left mr-1 text-white fw-800 fo-20 cursorPointer" onclick="prevBlog()"></i>
                <i className="fas fa-long-arrow-alt-right ml-1 text-white fw-800 fo-20 cursorPointer" onclick="nextBlog()"></i>
            </div>
        </div>
    </div>
    )
}


export default BlogSection;