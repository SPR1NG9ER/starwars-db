import "./preloader.css"

const Preloader = () => {
    return(
        <div className="ytp-spinner" data-layer="4">
            <div>
                <div className="ytp-spinner-container">
                    <div className="ytp-spinner-rotator">
                        <div className="ytp-spinner-left">
                            <div className="ytp-spinner-circle"/>
                        </div>
                        <div className="ytp-spinner-right">
                            <div className="ytp-spinner-circle"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader;