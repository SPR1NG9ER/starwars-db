import "./itemList.css"

const ItemsList = (props) => {
    const {listData} = props;

    const items = listData.map((item, i) => {
        const labels = props.children(item)

        if (i > 4) {
            return false;
        }
        return (
            <div className="items-list-item" onClick={() => props.onItemSelect(item.id)} key={item.id}>
                <div className="items-list-name">{labels}</div>
            </div>
        )
    })


    return (
        <div className="items-list">
            {items}
        </div>
    )
}

export default ItemsList;