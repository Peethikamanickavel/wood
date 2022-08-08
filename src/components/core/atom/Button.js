export default function Button(props){
return(
    <button className={'btn-color btn-rad-42 txt-primary '+(props.btnDesign)}>{props.text}</button>
);
}