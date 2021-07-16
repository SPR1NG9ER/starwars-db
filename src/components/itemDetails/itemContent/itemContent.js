const ItemContent = ({item}) => {
    const {id, name, gender, birthYear, eyeColor} = item;

    return (
        <div className="item-details">
            <div className="item-details-img item-details-img-chosen">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=""/>
            </div>

            <div className="person-details-info">
                <h3 className="person-details-title">{name}</h3>
                <div className="item-details-list">
                    <div className="item-details-list">
                        <span className="person-details-key">Gender</span>
                        <span className="person-details-value">{gender}</span>
                    </div>
                    <div className="item-details-list">
                        <span className="person-details-key">Birth Year</span>
                        <span className="person-details-value">{birthYear}</span>
                    </div>
                    <div className="item-details-list">
                        <span className="person-details-key">Eye color</span>
                        <span className="person-details-value">{eyeColor}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  ItemContent;