import "../style.css";
export default function Text(props){
return(
    <p className={'txt-primary '+(props.textDesigin)}>{props.text}</p>
);
}