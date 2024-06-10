'use server'

import { redirect } from "next/navigation";
import { findUserByCredentials, updateInterest, upsertNewUser } from "../lib/queries"
import { revalidatePath } from "next/cache";

async function handleSubmitRegistration(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const phone = formData.get("phone");
    const bio = formData.get("bio");

    const registerData = {
        name,
        email,
        password,
        phone,
        bio
    }
  await upsertNewUser(registerData);

    redirect("/login")

}
async function performLogin(formData) {
    try {
        const credential = {};
        credential.email = formData.get("email");
        credential.password = formData.get("password");
        const found = await findUserByCredentials(credential);
        return found;
    } catch (error) {
        throw error;
    }
}

async function toggleInterestButton(authId, eventId) {    
    try {
        await updateInterest(authId, eventId)
    } catch (error) {
        throw error
    }

    revalidatePath("/")
}


export {
    performLogin,
    handleSubmitRegistration, 
    toggleInterestButton
}
