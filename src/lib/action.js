"use server"
const api = "http://localhost:5000";
export const addDestination = async(destination)=>{
    const res = await fetch(api+"/destination", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(destination)
    })
    const data = await res.json();
    if(!res.ok){
        return;
    }
    return data;
    
}