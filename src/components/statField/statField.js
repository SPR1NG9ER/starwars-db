const StatField = ({label, value, item}) => {
    return(
        <div className="item-details-list">
            <span className="person-details-key">{label}</span>
            <span className="person-details-value">{item[value]}</span>
        </div>
    )
}

export default StatField;