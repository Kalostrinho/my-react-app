import './css/Card.css'

export const Card = (props) => {
    const classes = `card ${props.className}`
    return <div id={props.id} className={classes}>{props.children}</div>
}
