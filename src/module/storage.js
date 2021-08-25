
export function setPeopleId(people){
        localStorage.setItem("people", people);
}

 export function getPeopleId(){
    const item = localStorage.getItem("people");
    return item
}