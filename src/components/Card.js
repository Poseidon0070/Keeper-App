import styles from "./Card.module.css"

let Card = (props) => {
    let cardClass = `${styles['Card']}`
    return (
        <div className={cardClass}>
            {props.children}
        </div>
    )
}

export default Card;