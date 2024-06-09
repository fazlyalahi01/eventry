'use server'

import { redirect } from "next/navigation";
import { findUserByCredentials, upsertNewUser } from "../lib/queries"

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
    const userCreated = await upsertNewUser(registerData);

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


export {
    performLogin,
    handleSubmitRegistration
}
