import "./personDetails.css"

const PersonDetails = () => {
    return(
        <div className="person-details">
            <div className="person-details-img">

            </div>

            <div className="person-details-info">
                <h3 className="person-details-title">Planet name</h3>
                <div className="person-details-list">
                    <div className="person-details-item">
                        <span className="person-details-key">Population</span>
                        <span className="person-details-value">1234</span>
                    </div>
                    <div className="person-details-item">
                        <span className="person-details-key">Population</span>
                        <span className="person-details-value">1234</span>
                    </div>
                    <div className="person-details-item">
                        <span className="person-details-key">Population</span>
                        <span className="person-details-value">1234</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonDetails;