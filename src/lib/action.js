"use server";

import { revalidatePath } from "next/cache";

const api = "http://localhost:5000";
export const addDestination = async (destination) => {
  const res = await fetch(api + "/destination", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(destination),
  });
  const data = await res.json();
  if (!res.ok) {
    return;
  }
  return data;
};

export const editDestination = async (id, formData) => {
  const updatedData = Object.fromEntries(formData.entries());
  const res = await fetch(api + "/destination/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  const data = await res.json();
  if (!res.ok) {
    return;
  }
  if (data.modifiedCount > 0) {
    revalidatePath("/destination/" + id);
  }
  return data;
};

export const deleteDestination = async (id) => {
  const res = await fetch(api + "/destination/" + id, {
    method: "DELETE",
  });
  const data = await res.json();
  if (!res.ok) return;
  return data;
};


export const addBooking = async(booking)=>{
    const res = await fetch(api+"/booking",{
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(booking)
    })
    const data = await res.json();
    if(!res.ok) return;
    return data;
}

export const deleteBooking = async(bookingId)=>{
    const res = await fetch(api+"/booking/"+bookingId, {
        method: "DELETE"
    })
    const data = await res.json();
    if(data.deletedCount > 0){
            revalidatePath("/my-bookings")
        }
    return data;
}