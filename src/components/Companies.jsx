import { GetImages } from "../utils/GetImages";
import "./companies.css"

export function Companies({props}){
    let imagen = GetImages(props.logo_path,200);

    console.log(props);

    return (
        <div className="containerCompanies">

        
        <div className="companies">
            { props.logo_path != null? <img src={imagen} alt={props.name} /> : null
        }
        {props.logo_path != null ? <p className="name" >{props.name}</p> :null}
        
        
        </div>
        </div>
    );
}