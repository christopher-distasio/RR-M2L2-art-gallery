export default function Gallery(props){
    return (
        <div style={{'width': '100%'}}>
            <img src={props.image} alt={props.title} />
            <p>{props.artist}</p>
        </div>
    )
}
