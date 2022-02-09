const CollabSection = () => {
    const elems = [
        {
            href: "https://www.gqindia.com/content/how-to-lose-weight-like-this-23-year-old-nutritionist-who-lost-35-kg-in-just-9-months-weight-loss-inspirations",
            img: "img/logos/gq.png"
        },
        {
            href: "https://timesofindia.indiatimes.com/life-style/health-fitness/weight-loss/weight-loss-i-was-taunted-by-my-close-friend-for-having-man-boobs/articleshow/67953957.cms",
            img: "img/logos/toi.png"
        },
        {
            href: "https://www.rediff.com/getahead/report/fat-to-fit-how-i-lost-30-kg-in-less-than-a-year/20211227.htm",
            img: "img/logos/rediff.png"
        },
        {
            href: "https://www.mensxp.com/health/motivation/49170-31-days-of-fitness-alan-lost-30-kgs-got-down-to-9-body-fat-doing-things-the-right-way.html",
            img: "img/logos/mxp.png"
        },
        {
            href: "https://m.facebook.com/story.php?story_fbid=4354644617962440&id=100002508336418",
            img: "img/logos/fe.png"
        },
        {
            href: "https://www.gqindia.com/content/how-to-lose-weight-like-this-23-year-old-nutritionist-who-lost-35-kg-in-just-9-months-weight-loss-inspirations",
            img: "img/logos/gq.png"
        },
        {
            href: "https://m.facebook.com/nfna.education/photos/a.370415893855728/949739359256709/",
            img: "img/logos/ie.png"
        }
    ]
    return (
        <section className="collabs bg-dark d-block d-sm-none">
        <div className="container-fluid">
            <div className="row">
                { elems.forEach(elem => {
                    return(
                        <div className="col-4">
                        <a href={elem.href} target="_blank" rel="noreferrer">
                            <img src={elem.img} className="w-100" />
                        </a>
                    </div>
                    )
                })}

            </div>
        </div>
    </section>
    )
}


export default CollabSection;