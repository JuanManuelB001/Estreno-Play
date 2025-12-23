import { GetImages } from "../utils/GetImages";
import { Link } from "react-router-dom";
export function Casting({props}){
    return(
        <div>
            {
                
                   <div key={props.id} >
                    
                    <a href={`https://www.google.com/search?q=${props.name}`} target= "_blank">
                    <img src={GetImages(props.profile_path,300)} alt={props.name} />
                    </a>
                    <p>Character {props.character}</p>
                    <p>Name Actor: {props.name}</p>
                   </div>
                
            }
        </div>
    );
}