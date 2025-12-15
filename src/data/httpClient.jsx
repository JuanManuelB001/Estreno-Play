const API ="https://api.themoviedb.org/3";

export function getApi(path, width){
    return fetch(API+path,{
        headers:{
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTFhNjI1NDQzZDczMmJiNGJmNmMxNzY0ZGUyYzU2YyIsIm5iZiI6MTc2NTQ3MDg1NS44Niwic3ViIjoiNjkzYWYyODdhNWI5MWNjMjhkNjkwNTkwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.e4AgJfc3kCvvCWbLNA0NgGvbETBHbTvqH_LPPCZg4nY",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((result)=> result.json());
}