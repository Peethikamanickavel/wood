export default function Text(props){
return(
    <p className={'txt-secondary '+(props.textDesigin)}>{props.text}</p>
);
}