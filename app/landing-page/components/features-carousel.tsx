export function FeaturesCarousel() {
    return (
        <div className="features-carousel-container">
            <div className="text-container w-full">
                <div className="title-container">
                    <div className="heading-1-text">See the Big Picture</div>
                    <div className="paragraph-text color-paragraph">Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.</div>
                    
                </div>
                <div className="list-section w-full">
                    <div className="list-item w-full">
                        <div className="paragraph-text color-paragraph">01</div>
                        <div className="paragraph-text">Spot Trends in Seconds: No more digging through numbers.</div>
                    </div>
                    <div className="list-item w-full">
                        <div className="paragraph-text color-paragraph">02</div>
                        <div className="paragraph-text">Get Everyone on the Same Page: Share easy-to-understand reports with your team.</div>
                    </div>
                    <div className="list-item w-full">
                        <div className="paragraph-text color-paragraph">03</div>
                        <div className="paragraph-text">Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.</div>
                    </div>
                    <div className="list-item w-full">
                        <div className="paragraph-text color-paragraph">04</div>
                        <div className="paragraph-text">Your Global Snapshot: Get a quick, clear overview of your entire operation.</div>
                    </div>
                </div>
                <button className="discover-more-btn">
                    <div className="link-text">Discover More</div>
                </button>
            </div>
            <div className="carousel-image w-full"></div>
            
        </div>
    )
}