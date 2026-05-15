"use server"
const api = "http://localhost:5000";
export const getDestinations = async()=> {
    const res = await fetch(api+"/destination");
    const data = res.json();
    return data;
}