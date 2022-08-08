import "../style.css";
export default function Image(props){
    console.log(props.url);
    return(
        <img src={props.url} className={props.imgDesign} alt={props.alter} />
    );
}