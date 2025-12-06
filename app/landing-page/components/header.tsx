export function Header() {
    return (
        <div className="header autoShow">
            <div className="header-title display-text">Browse everything.</div>
            <div className="image-container__clipped">
                <div className="header-image-container">
                    <div className="green-square"></div>
                    <div className="ipad-image-container"></div>
                    <img src="ipad-screen.png" alt="" className="ipad-image" />
                </div>
            </div>
        </div>
    )
}