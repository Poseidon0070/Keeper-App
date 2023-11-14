import Card from "./Card"

let ListItem = (props) => {
    return (
        <Card>
            <div className="mx-4 py-2">
                <p className="fs-4">{props.title}</p>
                <p className="fs-5">{props.description}</p>
            </div>
        </Card>
    )
}

export default ListItem