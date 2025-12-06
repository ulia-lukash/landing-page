export function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <div className="footer">
            <ul className="nav-items">
                <li className="nav-item link-text">Benefits</li>
                <li className="nav-item link-text">Specifications</li>
                <li className="nav-item link-text">How-to</li>
            </ul>
            <div className="credits">
                <img src="credits-icon.svg" alt="" className="credits-icon" />
                <div className="credits-text">
                    <div className="captions-text no-wrap">© Area.</div>
                    <div className="captions-text w-full no-wrap">{currentYear}</div>
                    <div className="captions-text no-wrap">All Rights Reserved</div>
                </div>
            </div>
        </div>
    )
}