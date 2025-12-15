import placeHolder from "../img/palomitas.png"

export function GetImages(path, width){
    console.log(path)
    return path ?`https://image.tmdb.org/t/p/w${width}${path}` : 
    placeHolder;
}