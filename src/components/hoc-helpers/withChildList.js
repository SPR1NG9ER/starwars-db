const withChildList = (renderFunction) => (Component) => {
    return (props) => {
        return (
            <Component {...props}>
                {renderFunction}
            </Component>
        )
    }
}

export default withChildList;